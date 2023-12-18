import axios from "axios";
import { AppDispatch, RootState } from "..";
import { ENV_BE } from "../../constants";
import {
  ADD_PRODUCT_CART,
  CART_SAVE_SHIPPING_ADDRESS,
  REMOVE_CART,
  REMOVE_PRODUCT_CART,
} from "../constants";

export const addToCart =
  (id: number, sl: number) =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    const response = await axios.get(`${ENV_BE}/products/${id}`);
    console.log(response);
    if (response.status === 200) {
      if (response.data.status === "success") {
        dispatch({
          type: ADD_PRODUCT_CART,
          cartItem: { ...response.data.data[0], sl: sl },
        });
        console.log("check", getState().cart.cartItems);
        localStorage.setItem(
          "cartItems",
          JSON.stringify(getState().cart.cartItems)
        );
      }
    }
  };

export const deleteCart =
  (id: number) => async (dispatch: AppDispatch, getState: () => RootState) => {
    const response = await axios.get(`${ENV_BE}/products/${id}`);
    if (response.status === 200) {
      if (response.data.status === "success") {
        dispatch({
          type: REMOVE_PRODUCT_CART,
          cartItem: response.data.data[0],
        });
        if (getState().cart.cartItems.length) {
          localStorage.setItem(
            "cartItems",
            JSON.stringify(getState().cart.cartItems)
          );
        } else {
          localStorage.removeItem("cartItems");
        }
        // console.log(getState().cart.cartItems);
      }
    }
  };

export const removeCart = () => async (dispatch: AppDispatch) => {
  dispatch({ type: REMOVE_CART });
  localStorage.removeItem("cartItems");
};

export const saveShipPingAddress = (data: any) => (dispatch: AppDispatch) => {
  dispatch({
    type: CART_SAVE_SHIPPING_ADDRESS,
    shipping: data,
  });
  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

import { Products, ShippingAddress } from "../../constants";
import {
  ADD_PRODUCT_CART,
  CART_SAVE_SHIPPING_ADDRESS,
  REMOVE_CART,
  REMOVE_PRODUCT_CART,
} from "../constants";

const cartReducer = (
  state: { cartItems: Products[]; shipping: ShippingAddress } = {
    cartItems: [],
    shipping: { fullname: "", email: "", address: "", phone: "" },
  },
  action: {
    cartItems: Products[];
    cartItem: Products;
    shipping: ShippingAddress;
    type: string;
  }
) => {
  switch (action.type) {
    case ADD_PRODUCT_CART: {
      const existItem = state.cartItems.find(
        (item) => item.id === action.cartItem.id
      );
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) => {
            return item.id === existItem.id ? action.cartItem : item;
          }),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, action.cartItem],
        };
      }
    }
    case REMOVE_PRODUCT_CART:
      let listCart = state.cartItems;
      let newListCart;
      if (action.cartItem) {
        newListCart = listCart.filter(
          (item) => item.id !== Number(action.cartItem.id)
        );
      }
      return {
        ...state,
        isLoading: false,
        cartItems: newListCart || [],
      };
    case REMOVE_CART:
      return {
        ...state,
        cartItems: [],
      };
    case CART_SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        shipping: action.shipping,
      };
    default:
      return state;
  }
};
export { cartReducer };

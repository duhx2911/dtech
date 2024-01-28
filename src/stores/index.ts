import { configureStore } from "@reduxjs/toolkit";

import { combineReducers } from "redux";
import { productReducer } from "./reducers/productReducer";
import { imageProductReducer } from "./reducers/imgProductReducer";
import { cartReducer } from "./reducers/cartReducer";
import { loginReducer } from "./reducers/loginReducer";
import { reviewReducer } from "./reducers/reviewReducer";
// import thunk from "redux-thunk";

const reducer = combineReducers({
  // User
  userLogin: loginReducer,
  productReducer: productReducer,
  imageProductReducer: imageProductReducer,
  cart: cartReducer,
  reviewReducer: reviewReducer,
});
const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo")!)
  : {};
// Cart
const cartItemsFromLocalStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems")!)
  : [];
const shipAddressFromLocalStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress")!)
  : {};
const initialState = {
  cart: {
    cartItems: cartItemsFromLocalStorage,
    shipping: shipAddressFromLocalStorage,
  },
  userLogin: { userInfo: userInfoFromLocalStorage },
};
// const middleware = [thunk];
const store = configureStore({
  reducer,
  preloadedState: initialState,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;

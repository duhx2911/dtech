import axios from "axios";
import { AppDispatch } from "..";
import { ENV_BE } from "../../constants";
import { IPAD_LIST, IPHONE_LIST, NEW_PRODUCT_LIST } from "../constants";

const getNewProduct = () => async (dispatch: AppDispatch) => {
  const response = await axios.get(`${ENV_BE}/newproducts`);
  if (response.status) {
    if (response.data.status === "success") {
      dispatch({
        type: NEW_PRODUCT_LIST,
        products: response.data.data || [],
      });
    }
  }
};
const getIphoneList = () => async (dispatch: AppDispatch) => {
  const response = await axios.get(`${ENV_BE}/iphone`);
  if (response.status) {
    if (response.data.status === "success") {
      dispatch({
        type: IPHONE_LIST,
        iphones: response.data.data || [],
      });
    }
  }
};
const getIpadList = () => async (dispatch: AppDispatch) => {
  const response = await axios.get(`${ENV_BE}/ipad`);
  if (response.status) {
    if (response.data.status === "success") {
      dispatch({
        type: IPAD_LIST,
        ipads: response.data.data || [],
      });
    }
  }
};
export { getNewProduct, getIphoneList, getIpadList };

import axios from "axios";
import { AppDispatch } from "..";
import { SAVE_IMAGES } from "../constants";
import { ENV_BE } from "../../constants";

const getImageProduct = (data: any) => async (dispatch: AppDispatch) => {
  console.log(data);
  const response = await axios.get(`${ENV_BE}/imageProduct/${data?.id}`);
  if (response.status) {
    dispatch({
      type: SAVE_IMAGES,
      images: response.data.data || [],
    });
  }
};

export { getImageProduct };

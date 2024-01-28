import axios from "axios";
import { AppDispatch } from "..";
import { ENV_BE } from "../../constants";
import { REVIEW_LIST } from "../constants";

const getReview = () => async (dispatch: AppDispatch) => {
  const response = await axios.get(`${ENV_BE}/rating/7`);
  if (response.status) {
    if (response.data.status === "success") {
      dispatch({
        type: REVIEW_LIST,
        reviews: response.data.data || [],
      });
    }
  }
};
export { getReview };

import axios from "axios";
import { AppDispatch } from "..";
import { ENV_BE } from "../../constants";
import { REVIEW_LIST } from "../constants";

const getReview = (id: number) => async (dispatch: AppDispatch) => {
  const response = await axios.get(`${ENV_BE}/rating/${id}`);
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

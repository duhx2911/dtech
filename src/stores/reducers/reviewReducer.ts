import { Reviews } from "../../constants";
import { REVIEW_LIST } from "../constants";

const reviewReducer = (
  state: { reviews: Reviews[] } = {
    reviews: [],
  },
  action: {
    reviews: Reviews[];
    review: Reviews;
    type: string;
  }
) => {
  switch (action.type) {
    case REVIEW_LIST: {
      return { ...state, reviews: action.reviews };
    }

    default:
      return state;
  }
};

export { reviewReducer };

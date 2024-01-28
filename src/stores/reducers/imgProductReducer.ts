import { ImageProduct } from "../../constants";
import { SAVE_IMAGES } from "../constants";

const imageProductReducer = (
  state: { images: ImageProduct[] } = {
    images: [],
  },
  action: {
    images: ImageProduct[];
    image: ImageProduct;
    id: number;
    type: string;
  }
) => {
  switch (action.type) {
    case SAVE_IMAGES: {
      return { ...state, images: action.images || [] };
    }
    default:
      return state;
  }
};

export { imageProductReducer };

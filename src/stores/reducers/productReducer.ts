import { Products } from "../../constants";
import {
  IPAD_LIST,
  IPHONE_LIST,
  NEW_PRODUCT_LIST,
  PRODUCT_LIST,
} from "../constants";

const productReducer = (
  state: { products: Products[]; iphones: Products[]; ipads: Products[] } = {
    products: [],
    iphones: [],
    ipads: [],
  },
  action: {
    products: Products[];
    iphones: Products[];
    ipads: Products[];
    type: string;
  }
) => {
  switch (action.type) {
    case NEW_PRODUCT_LIST: {
      return { ...state, products: action.products || [] };
    }
    case PRODUCT_LIST: {
      return { ...state, products: action.products || [] };
    }
    case IPHONE_LIST: {
      return { ...state, iphones: action.iphones || [] };
    }
    case IPAD_LIST: {
      return { ...state, ipads: action.ipads || [] };
    }

    default:
      return state;
  }
};

export { productReducer };

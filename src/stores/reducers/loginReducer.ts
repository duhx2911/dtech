import {
  UPDATE_USER,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from "../constants";

const loginReducer = (
  state: any = {},
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return { loading: false, error: action.payload };
    case UPDATE_USER:
      return {
        ...state,
        userInfo: { ...state.userInfo, user: action.payload },
      };
    default:
      return state;
  }
};
export { loginReducer };

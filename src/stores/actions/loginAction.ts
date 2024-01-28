import axios from "axios";
import { AppDispatch, RootState } from "..";
import {
  UPDATE_USER,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from "../constants";
import { ENV_BE } from "../../constants";
import { message } from "antd";

const login =
  (username: string, password: string, onError: any) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch({ type: USER_LOGIN_REQUEST });
      const response = await axios.post(`${ENV_BE}/auth/login`, {
        username: username,
        password: password,
      });
      console.log(response);
      if (response.status === 200) {
        if (response.data.msg === "Đăng nhập thành công.") {
          if (response.data.user.role_id === 0) {
            dispatch({ type: USER_LOGIN_SUCCESS, payload: response.data });

            localStorage.setItem("userInfo", JSON.stringify(response.data));
          } else {
            message.error("Thử lại");
          }
        }
      }
    } catch (error: any) {
      onError(error.response.data);
      const message =
        error.response && error.response.data
          ? error.response.data
          : error.message;
      dispatch({ type: USER_LOGIN_FAIL, payload: message });
    }
  };
const logout = () => (dispatch: AppDispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: USER_LOGOUT });
};
const updateUser =
  (body: any, callback?: any) =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    const res = await axios.post(`${ENV_BE}/auth/update-user`, body);
    if (res.status === 200) {
      if (res.data.status === "success") {
        const response = await axios.get(`${ENV_BE}/user/${body.id}`);
        if (response.status === 200) {
          if (response.data.status === "success") {
            dispatch({
              type: UPDATE_USER,
              payload: response.data.data[0],
            });
            if (callback) {
              callback();
            }
            localStorage.setItem(
              "userInfo",
              JSON.stringify(getState().userLogin.userInfo)
            );
          }
        }
      }
    }
  };

export { login, logout, updateUser };

import axios from "axios";
import { useSelector } from "react-redux";
import { ENV_BE } from "../../../constants";
import { useEffect } from "react";

const Order = () => {
  const dataUser: any = useSelector<any>((state) => state.userLogin.userInfo);
  const getOrder = async (email: string) => {
    const res = await axios.get(`${ENV_BE}/user-order`, {
      params: { email: email },
    });
    console.log(res);
  };
  useEffect(() => {
    if (dataUser && dataUser.user.email) {
      getOrder(dataUser.user.email);
    }
  }, [dataUser, dataUser.user.email]);
  return (
    <div className="order-tab">
      <a href="/">Order</a>
    </div>
  );
};
export default Order;

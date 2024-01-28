import { Result, message } from "antd";
import axios from "axios";
import { useEffect } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { ENV_BE } from "../constants";

declare global {
  interface Window {
    paypal: any;
  }
}
const OrderSuccessPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const updateStatusOrder = async (order_code: string) => {
    const res = await axios.put(`${ENV_BE}/orderbycode/${order_code}`, {
      status: "chờ giao hàng",
    });
  };
  useEffect(() => {
    if (searchParams && searchParams.get("vnp_ResponseCode") === "00") {
      updateStatusOrder(searchParams.get("vnp_TxnRef")!);
    }
  }, [searchParams]);
  return (
    <>
      {(searchParams && searchParams.get("vnp_ResponseCode") === "00") ||
      location.state ? (
        <Result
          status="success"
          title="Đặt hàng thành công"
          subTitle={`Mã đơn hàng của bạn là: ${
            location.state
              ? location.state.order_code
              : searchParams.get("vnp_TxnRef")
          }. Hãy lưu lại để được hỗ trợ nếu gặp vấn đề về đơn hàng!`}
          extra={[
            <button className="primary-btn" onClick={() => navigate("/")}>
              Về trang chủ
            </button>,
          ]}
        />
      ) : (
        <Result
          status="error"
          title="Thanh toán thất bại"
          subTitle={`Mã đơn hàng của bạn là: ${
            location.state
              ? location.state.order_code
              : searchParams.get("vnp_TxnRef")
          }. Hãy lưu lại để được hỗ trợ nếu gặp vấn đề về đơn hàng!`}
          extra={[
            <button className="primary-btn" onClick={() => navigate("/")}>
              Về trang chủ
            </button>,
          ]}
        />
      )}
    </>
  );
};
export default OrderSuccessPage;

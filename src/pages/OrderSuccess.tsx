import React, { useEffect, useState } from "react";
import { Result, message } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { ENV_BE } from "../constants";
declare global {
  interface Window {
    paypal: any;
  }
}
const OrderSuccessPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [payment, setPayment] = useState("");
  const totalCart = location.state.cartItems?.reduce(
    (total: number, crrval: any) => total + parseInt(crrval.price) * crrval.sl,
    0
  );
  useEffect(() => {
    if (location.state.payment === "paypal") {
      setPayment(location.state.payment);
    }
  }, []);
  useEffect(() => {
    if (payment === "paypal") {
      window.paypal
        .Buttons({
          createOrder: (data: any, actions: any, err: any) => {
            return actions.order.create({
              intent: "CAPTURE",
              purchase_units: [
                {
                  description: location.state.orderCode,
                  amount: {
                    currency_code: "USD",
                    value: totalCart,
                  },
                },
              ],
            });
          },
          onApprove: async (data: any, actions: any) => {
            const order = await actions.order.capture();
            if (order.status === "COMPLETED") {
              const updateOrder = await axios.put(
                `${ENV_BE}/order/${location.state.id}`,
                { status: "chờ giao hàng" }
              );
              if (updateOrder.status === 200) {
                if (updateOrder.data.status === "success") {
                  setPayment("");
                  message.success("Thanh toán thành công");
                }
              }
            }
          },
          onError: (err: any) => {
            console.log(err);
          },
        })
        .render("#paypal-button-container");
    }
  }, [payment]);
  return (
    <>
      {payment === "paypal" ? (
        <div className="payment-paypal">
          <div id="paypal-button-container"></div>
        </div>
      ) : null}
      <Result
        status="success"
        title="Đặt hàng thành công"
        subTitle={`Mã đơn hàng của bạn là: ${location.state.orderCode}. Hãy lưu lại để được hỗ trợ nếu gặp vấn đề về đơn hàng!`}
        extra={[
          <button className="primary-btn" onClick={() => navigate("/")}>
            Về trang chủ
          </button>,
        ]}
      />
    </>
  );
};
export default OrderSuccessPage;

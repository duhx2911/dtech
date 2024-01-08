import { Input, Form, message } from "antd";

import BillDetails from "../components/pages/paymentpage/BillDetails";
import YourOrder from "../components/pages/paymentpage/YourOrder";
import { useState } from "react";
import axios from "axios";
import { ENV_BE } from "../constants";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import store from "../stores";
import { removeCart } from "../stores/actions/cartAction";

const PaymentPage = () => {
  const navigate = useNavigate();
  const [feeDetail, setFeeDetail] = useState({
    totalPrice: 0,
    totalPay: 0,
    shippingFee: 0,
    discount: 0,
  });
  const [payment, setPayment] = useState("");
  const cartItems: any = useSelector<any>((state) => state.cart.cartItems);
  const handleSetFeeDetail = (
    totalPrice: number,
    discount: number,
    shippingFee: number,
    totalPay: number
  ) => {
    setFeeDetail({
      totalPrice: totalPrice,
      totalPay: totalPay,
      shippingFee: shippingFee,
      discount: discount,
    });
  };
  const onFinish = async (value: any) => {
    const orderCode = "DTOD" + Date.now();
    if (value.paymentMethod === "paypal" || value.paymentMethod === "vnpay") {
      value = {
        ...value,
        ...feeDetail,
        orderCode: orderCode,
        status: "chờ thanh toán",
      };
    } else {
      value = { ...value, ...feeDetail, orderCode: orderCode };
    }
    const orderRes = await axios.post(`${ENV_BE}/order`, value);
    if (orderRes.status === 200) {
      if (orderRes.data.status === "success") {
        await cartItems.map(async (item: any) => {
          const dataOrderDetail = {
            orderCode: orderCode,
            idOrder: orderRes.data.data.id,
            idProduct: item.id,
            sl: item.sl,
            price: item.sales,
          };
          const orderDetailRes = await axios.post(
            `${ENV_BE}/orderDetail`,
            dataOrderDetail
          );
          if (orderDetailRes.status === 200) {
            if (orderDetailRes.data.status === "success") {
              store.dispatch(removeCart());
            }
          }
        });
        if (value.paymentMethod === "vnpay") {
          const res = await axios.post(`${ENV_BE}/payment/create_payment_url`, {
            amount: feeDetail.totalPay,
            bankCode: "",
            language: "vn",
            orderCode: orderCode,
          });
          window.location = res.data;
        } else {
          navigate("/ket-qua", {
            state: {
              orderCode: orderCode,
            },
          });
        }
      }
    }
  };
  return (
    <div className="section payment-page">
      <Form
        labelCol={{ span: 6 }}
        onFinish={onFinish}
        wrapperCol={{ span: 18 }}
        labelAlign="left"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <BillDetails setPayment={setPayment} payment={payment} />
            </div>
            <div className="col-md-4">
              <YourOrder
                payment={payment}
                handleSetFeeDetail={handleSetFeeDetail}
              />
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
};
export default PaymentPage;

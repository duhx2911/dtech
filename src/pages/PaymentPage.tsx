import { Form } from "antd";

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
    total_price: 0,
    total_pay: 0,
    shipping_fee: 0,
    discount: 0,
  });
  const [payment, setPayment] = useState("");
  const cartItems: any = useSelector<any>((state) => state.cart.cartItems);
  const handleSetFeeDetail = (
    total_price: number,
    discount: number,
    shipping_fee: number,
    total_pay: number
  ) => {
    setFeeDetail({
      total_price: total_price,
      total_pay: total_pay,
      shipping_fee: shipping_fee,
      discount: discount,
    });
  };
  const onFinish = async (value: any) => {
    const order_code = "DTOD" + Date.now();
    if (value.payment_method === "paypal" || value.payment_method === "vnpay") {
      value = {
        ...value,
        ...feeDetail,
        order_code: order_code,
        status: "chờ thanh toán",
      };
    } else {
      value = { ...value, ...feeDetail, order_code: order_code };
    }
    console.log(value);
    const orderRes = await axios.post(`${ENV_BE}/order`, value);
    if (orderRes.status === 200) {
      if (orderRes.data.status === "success") {
        await cartItems.map(async (item: any) => {
          const dataOrderDetail = {
            order_id: orderRes.data.data.id,
            productdetail_id: item.id,
            category_id: item.category_id,
            sl: item.sl,
            price: item.sales,
          };
          const orderDetailRes = await axios.post(
            `${ENV_BE}/orderDetail`,
            dataOrderDetail
          );
          // console.log(orderDetailRes);
          if (orderDetailRes.status === 200) {
            if (orderDetailRes.data.status === "success") {
              store.dispatch(removeCart());
            }
          }
        });
        if (value.payment_method === "vnpay") {
          const res = await axios.post(`${ENV_BE}/payment/create_payment_url`, {
            amount: feeDetail.total_pay,
            bankCode: "",
            language: "vn",
            order_code: order_code,
          });
          window.location = res.data;
        } else {
          navigate("/ket-qua", {
            state: {
              order_code: order_code,
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

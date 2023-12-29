import { Form, Input, Radio } from "antd";

const BillDetails = ({ payment, setPayment }: any) => {
  return (
    <div className="billing-details">
      <div className="section-title">
        <h3 className="title">Thông tin nhận hàng</h3>
      </div>
      <Form.Item
        label="Họ và tên"
        name="fullname"
        rules={[{ required: true, message: "Điền họ tên" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: "Điền email" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Địa chỉ"
        name="address"
        rules={[{ required: true, message: "Điền địa chỉ" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Số điện thoại"
        name="phone"
        rules={[{ required: true, message: "Điền số điện thoại" }]}
      >
        <Input />
      </Form.Item>
      <div className="section-title">
        <h3 className="title">Hình thức thanh toán</h3>
      </div>
      <Form.Item name="paymentMethod" wrapperCol={{ offset: 0, span: 24 }}>
        <Radio.Group
          value={payment}
          onChange={(value) => {
            setPayment(value.target.value);
          }}
          className="payment-radio-group"
        >
          <div className="payment-radio">
            <Radio value="payOnDelivery">Nhận hàng thanh toán</Radio>
          </div>

          <div className="payment-radio">
            <Radio value="paypal">Ví Paypal</Radio>
            <img src="/images/paypal_logo.png" alt="Logo Paypal" />
          </div>
          <div className="payment-radio">
            <Radio value="vnpay">Ví VNPAY</Radio>
            <img src="/images/vnpay_logo.webp" alt="Logo Visa" />
          </div>
        </Radio.Group>
      </Form.Item>
      {/* {payment === "paypal" ? <PaymentPaypalForm /> : null} */}
    </div>
  );
};
export default BillDetails;

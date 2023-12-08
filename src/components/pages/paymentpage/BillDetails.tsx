import { Form, Input, Radio } from "antd";
import { useState } from "react";

const BillDetails = () => {
  const [payment, setPayment] = useState("");
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
        >
          <Radio value="payOnDelivery">Thanh toán khi nhận hàng</Radio>
          <Radio value="eWallet">Thanh toán qua ví điện tử</Radio>
          <Radio value="masterCard">Thanh toán bằng Visa, Master</Radio>
        </Radio.Group>
      </Form.Item>
    </div>
  );
};
export default BillDetails;

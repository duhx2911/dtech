import React from "react";
import { Result } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
const OrderSuccessPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
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
  );
};
export default OrderSuccessPage;

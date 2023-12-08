import { convertPriceToVND } from "../../../constants";

const OrderDetails = ({ totalCart }: any) => {
  return (
    <div className="cart-payment">
      <div className="cart-total">
        <div className="total-info">
          <div className="order-subtotal">
            <span>Tổng cộng:</span>
            <span className="price">{convertPriceToVND.format(totalCart)}</span>
          </div>
          <div className="order-discount">
            <span>Vận chuyển:</span>
            <span className="price">0 VND</span>
          </div>
          <div className="order-total">
            <span>Tạm tính:</span>
            <span className="price">{convertPriceToVND.format(totalCart)}</span>
          </div>
          <div className="vat" style={{ textAlign: "end" }}>
            (Đã bao gồm VAT)
          </div>
        </div>
        <div className="order-button">
          <button className="primary-btn" type="submit">
            Tiến hành đặt hàng
          </button>
        </div>
      </div>
    </div>
  );
};
export default OrderDetails;

import { Form, Input, message } from "antd";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";
import { ENV_BE, convertPriceToVND } from "../../../constants";

const YourOrder = ({ handleSetFeeDetail, payment }: any) => {
  const [totalfee, setTotalFee] = useState(0);
  const [discount, setDiscount] = useState(0);
  const cartItems: any = useSelector<any>((state) => state.cart.cartItems);
  const totalCart = cartItems?.reduce(
    (total: number, crrval: any) => total + parseInt(crrval.sales) * crrval.sl,
    0
  );
  const getVoucher = async () => {
    const code = (document.getElementById("voucherCode") as HTMLInputElement)
      .value;
    if (code) {
      const voucher = await axios.get(`${ENV_BE}/voucher/${code}`);
      if (voucher.data.status === "success") {
        if (voucher.data.data.length) {
          // console.log(">>> data:", voucher.data.data);
          setDiscount(voucher.data.data[0].discount);
        } else {
          message.error("Voucher không hợp lệ");
        }
      }
    }
  };

  useEffect(() => {
    setTotalFee(totalCart - discount);
  }, [discount]);
  useEffect(() => {
    handleSetFeeDetail(totalCart, discount, 0, totalfee);
  }, [totalfee]);
  return (
    <div className="your-order">
      <div className="section-title">
        <h3 className="title">Đơn hàng</h3>
      </div>
      <div className="list-order">
        {cartItems.map((item: any) => {
          return (
            <div className="order-item" key={item.id}>
              <div className="order-image">
                <img src={item.artwork} alt={item.product_name} />
              </div>
              <div className="order-infor">
                <div className="order-name">
                  <span>{item.product_name}</span>
                </div>
                <div className="order-price">
                  {convertPriceToVND.format(item.sales)}{" "}
                  {item.discount_value > 0 ? (
                    <del
                      style={{
                        fontSize: 12,
                        fontWeight: 500,
                        color: "#b6b0b0",
                      }}
                    >
                      {convertPriceToVND.format(item.price)}
                    </del>
                  ) : null}
                </div>
              </div>
              <div className="order-quantity">x{item.sl}</div>
            </div>
          );
        })}
      </div>
      <div className="order-fee">
        <div className="cart-discount">
          <div className="deal">
            <Form.Item name="voucher" wrapperCol={{ offset: 0 }}>
              <Input
                id="voucherCode"
                className="input"
                placeholder="Mã giảm giá"
              />
            </Form.Item>

            <button
              type="button"
              onClick={() => getVoucher()}
              className="primary-btn"
              style={{ height: "40px" }}
            >
              Áp dụng
            </button>
          </div>
        </div>
        <div className="order-total">
          <div className="order-total-info">
            <div className="order-subtotal">
              <span>Tạm tính:</span>
              <span>{convertPriceToVND.format(totalCart)}</span>
            </div>
            <div className="order-discount">
              <span>Giảm giá:</span>
              <span>{convertPriceToVND.format(discount)}</span>
            </div>
            <div className="order-shipping-fee">
              <span>Vận chuyển:</span>
              <span>{convertPriceToVND.format(0)}</span>
            </div>
          </div>
          <div className="order-total-fee">
            <span>Tổng cộng:</span>
            <span>{convertPriceToVND.format(totalfee)}</span>
          </div>
        </div>
      </div>

      <button style={{ width: "100%" }} className="primary-btn" type="submit">
        Đặt hàng
      </button>
    </div>
  );
};
export default YourOrder;

import { useState } from "react";
import store from "../../stores";
import {
  addToCart,
  deleteCart,
  quickAddtoCart,
} from "../../stores/actions/cartAction";
import { Popconfirm } from "antd";
const InputNumber = (props: any) => {
  const record = props.data;
  const [valueinput, setValueInput] = useState(record.sl);
  const increaseValue = () => {
    // console.log(record);
    setValueInput(valueinput + 1);
    store.dispatch(addToCart(record, valueinput + 1));
  };
  const decreaseValue = () => {
    setValueInput(valueinput - 1);
    if (valueinput > 1) {
      store.dispatch(addToCart(record, valueinput - 1));
    } else {
      store.dispatch(deleteCart(record));
    }
  };

  return (
    <div className="cart-quantity-input">
      {valueinput > 1 ? (
        <i
          onClick={() => decreaseValue()}
          className="fa-solid fa-minus input-number-btn"
        ></i>
      ) : (
        <Popconfirm
          title="Xoá sản phẩm"
          description="Bạn có muốn xoá sản phẩm này khỏi giỏ hàng"
          onConfirm={() => decreaseValue()}
          okText="Có"
          cancelText="Không"
        >
          <i className="fa-solid fa-minus input-number-btn"></i>
        </Popconfirm>
      )}

      <input
        type="text"
        id="quantity-value-input"
        value={valueinput}
        onChange={(val) => console.log(val)}
      />
      <i
        onClick={() => increaseValue()}
        className="fa-solid fa-plus input-number-btn"
      ></i>
    </div>
  );
};
export default InputNumber;

import { useState } from "react";
import store from "../../stores";
import { addToCart, deleteCart } from "../../stores/actions/cartAction";
const InputNumber = (props: any) => {
  const record = props.data;
  const [valueinput, setValueInput] = useState(record.sl);
  const increaseValue = () => {
    setValueInput(valueinput + 1);
    store.dispatch(addToCart(record.id, valueinput + 1));
  };
  const decreaseValue = () => {
    setValueInput(valueinput - 1);
    if (valueinput > 1) {
      store.dispatch(addToCart(record.id, valueinput - 1));
    } else {
      console.log("delete");
      store.dispatch(deleteCart(record.id));
    }
  };
  return (
    <div className="cart-quantity-input">
      <i
        onClick={() => decreaseValue()}
        className="fa-solid fa-minus input-number-btn"
      ></i>
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

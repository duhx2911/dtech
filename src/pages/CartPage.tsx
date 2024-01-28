import { Empty, Form } from "antd";
import BillDetails from "../components/pages/paymentpage/BillDetails";
import CartDetail from "../components/pages/cartpage/CartDetail";
import OrderDetails from "../components/pages/cartpage/OrderDetails";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const navgate = useNavigate();
  const cartItems: any = useSelector<any>((state) => state.cart.cartItems);
  // const cartItems = JSON.parse(window.localStorage.getItem("cartItems")!);
  const totalCart = cartItems?.reduce(
    (total: number, crrval: any) => total + parseInt(crrval.sales) * crrval.sl,
    0
  );
  const shippingAdd: any = useSelector<any>((state) => state.cart.shipping);

  const onFinish = () => {
    navgate("/thanh-toan");
  };
  return (
    <div className="section cart-page">
      <div className="container">
        {cartItems && cartItems.length ? (
          <Form
            onFinish={onFinish}
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 18 }}
            labelAlign="left"
          >
            <div className="row">
              <div className="col-md-8">
                <CartDetail cartItems={cartItems} />
                {/* <BillDetails /> */}
              </div>
              <div className="col-md-4">
                <OrderDetails totalCart={totalCart} />
              </div>
            </div>
          </Form>
        ) : (
          <Empty description={"Giỏ hàng trống"} />
        )}
      </div>
    </div>
  );
};
export default CartPage;

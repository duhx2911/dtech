import TopBanner from "./../components/pages/homepage/TopBanner";
import NewProducts from "./../components/pages/homepage/NewProducts";
import Hotdeal from "../components/pages/homepage/Hotdeal";
import ListIphone from "../components/pages/homepage/ListIphone";
import store from "../stores";
import { getIpadList, getIphoneList } from "../stores/actions/productAction";
import { useEffect } from "react";
import ListIpad from "../components/pages/homepage/ListIpad";
import { Button } from "antd";
import axios from "axios";

const HomePage = () => {
  const fetchData = async () => {
    store.dispatch(getIphoneList());
    store.dispatch(getIpadList());
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Button
        onClick={() => {
          axios.post("http://localhost:8888/order/create_payment_url", {
            amount: 120000,
          });
        }}
      >
        Thanh toán
      </Button>
      <TopBanner />
      <NewProducts />
      <Hotdeal />
      <ListIphone />
      <ListIpad />
    </>
  );
};
export default HomePage;

import TopBanner from "./../components/pages/homepage/TopBanner";
import NewProducts from "./../components/pages/homepage/NewProducts";
import Hotdeal from "../components/pages/homepage/Hotdeal";
import ListIphone from "../components/pages/homepage/ListIphone";
import store from "../stores";
import { getIpadList, getIphoneList } from "../stores/actions/productAction";
import { useEffect } from "react";
import ListIpad from "../components/pages/homepage/ListIpad";

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
      <TopBanner />
      <NewProducts />
      <Hotdeal />
      <ListIphone />
      <ListIpad />
    </>
  );
};
export default HomePage;

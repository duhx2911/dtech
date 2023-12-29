import OverView from "../components/pages/productpage/OverView";
import SliderDetails from "../components/pages/productpage/SliderDetails";
import TabNav from "../components/pages/productpage/TabNav";
import RelateProduct from "../components/pages/productpage/RelateProduct";
import { useLocation } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useState, useEffect } from "react";
import store from "../stores";
import { getImageProduct } from "../stores/actions/imgProductAction";
const ProductPage = () => {
  const location = useLocation();

  const { data: dataProduct } = useFetch(`product${location.pathname}`);
  const [data, setData] = useState({});
  useEffect(() => {
    if (dataProduct && dataProduct.length) {
      store.dispatch(getImageProduct(dataProduct[0]));
      setData(dataProduct[0]);
    }
  }, [dataProduct, dataProduct.length]);
  return (
    <div className="product-page">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <SliderDetails />
          </div>
          <div className="col-xl-6">
            <OverView data={data} />
          </div>
        </div>
        <TabNav dataProduct={data} />
        <RelateProduct />
      </div>
    </div>
  );
};
export default ProductPage;

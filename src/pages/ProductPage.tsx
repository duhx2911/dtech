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
  const [dataDetail, setDataDetail] = useState({});
  // useEffect(() => {
  //   if (dataProduct && dataProduct.length) {
  //     store.dispatch(getImageProduct(dataProduct[0]));
  //     setData(dataProduct[0]);
  //   }
  // }, [dataProduct, dataProduct.length]);
  const getImageDetail = (data: any) => {
    if (data) {
      store.dispatch(getImageProduct(data));
      setDataDetail(data);
    }
  };

  return (
    <div className="product-page">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <SliderDetails />
          </div>
          <div className="col-xl-6">
            <OverView
              data={dataDetail}
              productcolor={dataProduct}
              getImageDetail={getImageDetail}
            />
          </div>
        </div>
        <TabNav dataProduct={dataDetail} />
        <RelateProduct />
      </div>
    </div>
  );
};
export default ProductPage;

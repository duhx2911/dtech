import { useSelector } from "react-redux";
import ProductCard from "../../component/ProductCard";
import store from "../../../stores";
import { getNewProduct } from "../../../stores/actions/productAction";
import { useEffect } from "react";
import { Products } from "../../../constants";

const NewProducts = () => {
  const newProduct: any = useSelector<any>(
    (state) => state.productReducer.products
  );

  const fetchData = async () => {
    store.dispatch(getNewProduct());
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title">
              <h3 className="title">Sản phẩm mới</h3>
              <div className="section-nav">
                <a href="/#">Xem tất cả</a>
              </div>
            </div>
          </div>

          <div className="col-md-12">
            <div className="row">
              <div className="products-tabs">
                <div id="tab1" className="tab-pane active">
                  <div className="row">
                    {newProduct.map((item: Products) => {
                      return (
                        <div className="col-xl-3" key={item.id}>
                          <ProductCard item={item} />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewProducts;

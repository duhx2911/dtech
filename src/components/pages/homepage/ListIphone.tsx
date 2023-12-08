import ProductCard from "./../../component/ProductCard";
import { useSelector } from "react-redux";

import { Products } from "../../../constants";
const ListIphone = () => {
  const iPhoneList: any = useSelector<any>(
    (state) => state.productReducer.iphones
  );

  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title">
              <h3 className="title">iPhone</h3>
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
                    {iPhoneList.map((item: Products) => {
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
export default ListIphone;

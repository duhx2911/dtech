import ProductCard from "./../../component/ProductCard";
import { useSelector } from "react-redux";

import { Products } from "../../../constants";
const ListIpad = () => {
  const iPadList: any = useSelector<any>((state) => state.productReducer.ipads);

  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title">
              <h3 className="title">iPad</h3>
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
                    {iPadList.map((item: Products) => {
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
export default ListIpad;

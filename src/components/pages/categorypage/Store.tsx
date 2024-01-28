import { useLocation } from "react-router-dom";
import ProductCard from "./../../component/ProductCard";

import { ENV_BE, Products } from "../../../constants";
import { useEffect, useState } from "react";
import axios from "axios";
const StoreCategory = () => {
  const location = useLocation();
  const [dataProduct, setDataProduct] = useState([]);

  const fetchData = async (path: string) => {
    let res = await axios.get(`${ENV_BE}/productCate${path}`);
    let data = res && res.data.data ? res.data.data : [];
    setDataProduct(data);
  };
  useEffect(() => {
    fetchData(location.pathname);
  }, [location.pathname]);

  return (
    <div id="store">
      <div className="store-filter clearfix">
        <div className="store-sort">
          <label>Sắp xếp:</label>
          <select className="input-select">
            <option value="0">Mặc định</option>
            <option value="1">Giá tăng dần</option>
            <option value="2">Giá giảm dần</option>
          </select>
        </div>
        <ul className="store-grid">
          <li className="active">
            <i className="fa fa-th"></i>
          </li>
          <li>
            <a href="/#">
              <i className="fa fa-th-list"></i>
            </a>
          </li>
        </ul>
      </div>

      <div className="row">
        {dataProduct.map((item: Products) => {
          return (
            <div className="col-xl-3" key={item.id}>
              <ProductCard item={item} />
            </div>
          );
        })}
      </div>

      <div className="store-filter clearfix">
        <ul className="store-pagination">
          <li className="active">1</li>
          <li>
            <a href="/#">2</a>
          </li>
          <li>
            <a href="/#">3</a>
          </li>
          <li>
            <a href="/#">4</a>
          </li>
          <li>
            <a href="/#">
              <i className="fa fa-angle-right"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default StoreCategory;

import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import store from "../stores";
import { getAllProduct } from "../stores/actions/productAction";
import { useSelector } from "react-redux";
import Fuse from "fuse.js";
import ProductCard from "../components/component/ProductCard";
const SearchOptions = {
  shouldSort: true,
  threshold: 0.4,
  location: 0,
  distance: 100,
  matchAllTokens: true,
  includeScore: true,
  maxPatternLength: 32,
  minMatchCharLength: 3,
  keys: ["product_name"],
};

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dataProduct: any = useSelector<any>(
    (state) => state.productReducer.products
  );
  const [searchRes, setSearchRes] = useState<any>();

  const fuse = new Fuse(dataProduct, SearchOptions);
  const fetchdata = () => {
    store.dispatch(getAllProduct());
  };
  useEffect(() => {
    fetchdata();
  }, []);
  useEffect(() => {
    if (dataProduct.length) {
      setSearchRes(
        searchParams.get("key")?.length
          ? fuse.search(searchParams.get("key")!)
          : []
      );
    }
  }, [searchParams]);
  console.log("Search Res: ", searchRes);
  return (
    <div className="search-page">
      <div className="container">
        <div className="search-section" style={{ marginTop: 20 }}>
          <h1 style={{ fontSize: 24, textAlign: "center" }}>Tìm kiếm</h1>
          {searchRes?.length ? (
            <p>
              Tìm thấy <b>{searchRes.length}</b> sản phẩm cho từ khoá{" "}
              <i>"{searchParams.get("key")}"</i>
            </p>
          ) : (
            "Không tìm thấy sản phẩm nào"
          )}
          <div className="row">
            {searchRes &&
              searchRes.map((res: any) => (
                <div className="col-xl-3" key={res.item.id}>
                  <ProductCard item={res.item} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default SearchPage;

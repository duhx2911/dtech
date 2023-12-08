import ProductCard from "./../../component/ProductCard";
const StoreCategory = () => {
  return (
    <div id="store" className="col-md-9">
      <div className="store-filter clearfix">
        <div className="store-sort">
          <label>
            Sort By:
            <select className="input-select">
              <option value="0">Popular</option>
              <option value="1">Position</option>
            </select>
          </label>

          <label>
            Show:
            <select className="input-select">
              <option value="0">20</option>
              <option value="1">50</option>
            </select>
          </label>
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
        {new Array(9).fill(null).map((_, index) => {
          return (
            <div className="col-xl-4" key={index}>
              {/* <ProductCard /> */}
            </div>
          );
        })}
      </div>

      <div className="store-filter clearfix">
        <span className="store-qty">Showing 20-100 products</span>
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

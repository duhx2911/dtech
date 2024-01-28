const Aside = () => {
  return (
    <div id="aside" className="col-md-3">
      <div className="aside">
        <h3 className="aside-title">Categories</h3>
        <div className="checkbox-filter">
          <div className="input-checkbox">
            <input type="checkbox" id="category-1" />
            <label htmlFor="category-1">
              <span></span>
              Laptops
              <small>(120)</small>
            </label>
          </div>

          <div className="input-checkbox">
            <input type="checkbox" id="category-2" />
            <label htmlFor="category-2">
              <span></span>
              Smartphones
              <small>(740)</small>
            </label>
          </div>

          <div className="input-checkbox">
            <input type="checkbox" id="category-3" />
            <label htmlFor="category-3">
              <span></span>
              Cameras
              <small>(1450)</small>
            </label>
          </div>

          <div className="input-checkbox">
            <input type="checkbox" id="category-4" />
            <label htmlFor="category-4">
              <span></span>
              Accessories
              <small>(578)</small>
            </label>
          </div>

          <div className="input-checkbox">
            <input type="checkbox" id="category-5" />
            <label htmlFor="category-5">
              <span></span>
              Laptops
              <small>(120)</small>
            </label>
          </div>

          <div className="input-checkbox">
            <input type="checkbox" id="category-6" />
            <label htmlFor="category-6">
              <span></span>
              Smartphones
              <small>(740)</small>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Aside;

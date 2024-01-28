import ProductCard from "../../component/ProductCard";

const RelateProduct = () => {
  return (
    <div className="section">
      <div className="row">
        <div className="col-md-12">
          <div className="section-title text-center">
            <h3 className="title">Sản phẩm liên quan</h3>
          </div>
          {new Array(4).fill(null).map((_, index) => {
            return (
              <div className="col-md-3" key={index}>
                {/* <ProductCard /> */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default RelateProduct;

import { Products, convertPriceToVND } from "../../constants";

const ProductCard = ({ item }: { item: Products }) => {
  return (
    <div className="product">
      <div className="product-img">
        <a href={`/${item.slug}`}>
          <img src={item.artwork} alt={item.productName} />
        </a>
        <div className="product-label">
          <span className="sale">-30%</span>
          <span className="new">Mới</span>
        </div>
      </div>
      <div className="product-body">
        <h3 className="product-name">
          <a href="/product">{item.productName}</a>
        </h3>
        <h4 className="product-price">
          {convertPriceToVND.format(item.price)}{" "}
          <del className="product-old-price">
            {convertPriceToVND.format(item.listed_price)}
          </del>
        </h4>
        <div className="product-rating">
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
        </div>
        <div className="product-btns">
          <button className="add-to-wishlist">
            <i className="fa-regular fa-heart"></i>
            <span className="tooltipp">yêu thích</span>
          </button>
          <button className="add-to-compare">
            <i className="fa fa-exchange"></i>
            <span className="tooltipp">so sánh</span>
          </button>
          <button className="quick-view">
            <i className="fa fa-eye"></i>
            <span className="tooltipp">xem nhanh</span>
          </button>
        </div>
      </div>
      <div className="add-to-cart">
        <button className="add-to-cart-btn">
          <i className="fa fa-shopping-cart"></i> thêm vào giỏ hàng
        </button>
      </div>
    </div>
  );
};
export default ProductCard;

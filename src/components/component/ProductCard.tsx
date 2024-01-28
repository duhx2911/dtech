import { Products, convertPriceToVND } from "../../constants";
import store from "../../stores";
import { quickAddtoCart } from "../../stores/actions/cartAction";

const ProductCard = ({ item }: { item: Products }) => {
  return (
    <div className="product">
      <div className="product-img">
        <a href={`/${item.slug}`}>
          <img src={item.artwork} alt={item.product_name} />
        </a>
        <div className="product-label">
          {item.discount_value > 0 ? (
            <span className="sale">-{item.discount_value}%</span>
          ) : null}
          {/* <span className="sale">-30%</span> */}
          {/* <span className="new">Mới</span> */}
        </div>
      </div>
      <div className="product-body">
        <h3 className="product-name">
          <a href="/product">{item.product_name}</a>
        </h3>
        <h4 className="product-price">
          {convertPriceToVND.format(item.sales)}{" "}
          {/* <del className="product-old-price">
            {convertPriceToVND.format(item.listed_price)}
          </del> */}
          {item.discount_value > 0 ? (
            <del className="product-old-price">
              {convertPriceToVND.format(item.price)}
            </del>
          ) : null}
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
        <button
          className="add-to-cart-btn"
          onClick={() => {
            store.dispatch(quickAddtoCart(item, 1));
          }}
        >
          <i className="fa fa-shopping-cart"></i> thêm vào giỏ hàng
        </button>
      </div>
    </div>
  );
};
export default ProductCard;

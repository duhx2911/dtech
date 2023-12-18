import { Products, convertPriceToVND } from "../../constants";
import store from "../../stores";
import { addToCart } from "../../stores/actions/cartAction";

const ProductCard = ({ item }: { item: Products }) => {
  // const addToCart = (product: any) => {
  //   let cartItems: any = [];
  //   if (window.localStorage.getItem("cartItems")) {
  //     cartItems = JSON.parse(window.localStorage.getItem("cartItems")!);
  //   }
  //   if (product) {
  //     const recordCart = cartItems.filter(
  //       (record: any) => record.id === product.id
  //     );
  //     // console.log(recordCart);
  //     if (recordCart.length) {
  //       const newList = cartItems.map((record: any) => {
  //         if (record.id === product.id) {
  //           return {
  //             ...product,
  //             sl: record.sl + 1,
  //           };
  //         }
  //         return record;
  //       });
  //       localStorage.setItem("cartItems", JSON.stringify(newList));
  //       // console.log("newList:", newList);
  //     } else {
  //       const cartItem = { ...product, sl: 1 };
  //       const newList = [...cartItems, cartItem];
  //       localStorage.setItem("cartItems", JSON.stringify(newList));
  //       // console.log("newList:", newList);
  //     }
  //   }
  // };
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
        <button
          className="add-to-cart-btn"
          onClick={() => {
            store.dispatch(addToCart(item.id, 1));
          }}
        >
          <i className="fa fa-shopping-cart"></i> thêm vào giỏ hàng
        </button>
      </div>
    </div>
  );
};
export default ProductCard;

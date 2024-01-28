import { NavLink } from "react-router-dom";
import { convertPriceToVND } from "../../../constants";
import { useEffect, useState } from "react";

const OverView = ({ data, productcolor, getImageDetail }: any) => {
  let cartItems: any = [];
  const [selectedColor, setSelectedColor] = useState(null);
  const [dataProduct, setDataProduct] = useState<any>(null);
  useEffect(() => {
    if (productcolor.length) {
      setSelectedColor(productcolor[0].color);
      setDataProduct(productcolor[0]);
    }
  }, [productcolor.length]);
  useEffect(() => {
    getImageDetail(dataProduct);
  }, [dataProduct?.id]);

  const addToCart = (product: any) => {
    if (window.localStorage.getItem("cartItems")) {
      cartItems = JSON.parse(window.localStorage.getItem("cartItems")!);
    }
    if (product) {
      const recordCart = cartItems.filter(
        (record: any) => record.id === product.id
      );
      // console.log(recordCart);
      if (recordCart.length) {
        const newList = cartItems.map((record: any) => {
          if (record.id === product.id) {
            return {
              ...product,
              sl: record.sl + 1,
            };
          }
          return record;
        });
        localStorage.setItem("cartItems", JSON.stringify(newList));
        console.log("newList:", newList);
      } else {
        const cartItem = { ...product, sl: 1 };
        const newList = [...cartItems, cartItem];
        localStorage.setItem("cartItems", JSON.stringify(newList));
        console.log("newList:", newList);
      }
      window.location.assign("http://localhost:3000/gio-hang");
      // Cart.push(product);
      // window.localStorage.setItem("Cart", JSON.stringify(Cart));
    }
  };
  return (
    <div className="">
      <div className="overview">
        <div className="wrapper-info">
          <div className="product-name">
            <h1>{data?.product_name}</h1>
          </div>
          <div className="product-rate d-flex justify-content-between">
            <div className="d-flex align-items-center">
              <div className="product-review d-flex ">
                <i
                  className="fa-solid fa-star"
                  style={{ color: "#b6f42f" }}
                ></i>
                <div className="review-cmt">
                  <a href="/#">4.9</a>
                  <span> | </span>
                </div>
              </div>
              <div className="review-cmt">
                <a href="/#">217 Đã bán</a>
              </div>
            </div>
          </div>
          <div className="delivery">
            <div className="delivery-item">
              <i className="fa-solid fa-store"></i>
              <span>Cửa hàng</span>
            </div>
            <div className="delivery-item">
              <i className="fa-regular fa-circle-check"></i>
              <span>Bảo hành</span>
            </div>
            <div className="delivery-item">
              <i className="fa-solid fa-truck"></i>
              <span>Free ship</span>
            </div>
          </div>
        </div>
        {/* Price */}
        <div className="prices">
          <div className="current-price">
            {convertPriceToVND.format(data?.sales!)}
          </div>

          {data?.discount_value > 0 ? (
            <div className="old-price">
              <del>{convertPriceToVND.format(data?.price!)}</del>
            </div>
          ) : null}
        </div>

        <div className="attributes">
          <label className="text-prompt">Dung lượng</label>
          <div className="storage-capacity">
            <ul>
              <li>
                <NavLink to="/iphone-14-pro-128">128GB</NavLink>
              </li>
              <li>
                <NavLink to="/iphone-14-pro-256">256GB</NavLink>
              </li>
              <li>
                <NavLink to="/iphone-14-pro-512">512GB</NavLink>
              </li>
              <li>
                <NavLink to="/iphone-14-pro-1024">1TB</NavLink>
              </li>
            </ul>
          </div>
          <label className="text-prompt">Màu sắc</label>
          <div className="color-picker">
            <ul>
              {productcolor.length
                ? productcolor.map((item: any) => {
                    return (
                      <li key={item.id}>
                        <label>
                          <input
                            type="radio"
                            name="color"
                            value={item.color}
                            checked={selectedColor === item.color}
                            onChange={() => {
                              setSelectedColor(item.color);
                              setDataProduct(item);
                            }}
                          />
                          <span className={`swatch  btn-${item.color}`}></span>
                        </label>
                      </li>
                    );
                  })
                : null}
            </ul>
          </div>
        </div>
        <div className="short-des">
          <p className="title">
            <i className="fa-solid fa-gift"></i>
            Ưu đãi
          </p>
          <div className="info-promotions">
            <ul>
              <li>
                <strong style={{ fontSize: "14px", color: "red" }}>
                  Chào Tân Sinh Viên (5/7 - 31/7)
                </strong>
                <a href="/#" style={{ fontSize: "14px" }}>
                  {" "}
                  <strong>(chi tiết)</strong>
                </a>
              </li>
              <li style={{ fontSize: "14px" }}>
                <i
                  className="fa-solid fa-circle-check"
                  style={{ color: "#80d150", marginRight: "10px" }}
                ></i>
                Giảm <strong>200.000đ</strong> cho khách hàng là học sinh - sinh
                viên
              </li>
              <li style={{ fontSize: "14px" }}>
                <i
                  className="fa-solid fa-circle-check"
                  style={{ color: "#80d150", marginRight: "10px" }}
                ></i>
                Thi tốt quà to - Đỗ cao giảm khủng đến <strong>500.000đ</strong>
              </li>
            </ul>
          </div>
        </div>

        {/* BTN MUA */}
        <div className="add-to-cart" style={{ marginTop: "20px" }}>
          <button
            onClick={() => addToCart(data)}
            className="primary-btn add-to-cart-btn"
          >
            mua ngay
          </button>
          <div className="pay-last">
            <div className="row">
              <div className="col-6">
                <button className="primary-btn add-to-cart-btn">
                  Mua trả góp 0%
                </button>
              </div>
              <div className="col-6">
                <button className="primary-btn add-to-cart-btn">
                  Trả góp 0% qua thẻ
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="product-policy">
          <div className="prd-policy">
            <ul>
              <li>
                <i
                  className="fa-solid fa-circle-check"
                  style={{ color: "#3c6fd8" }}
                ></i>
                Bộ sản phẩm gồm: Hộp, Sách hướng dẫn, Cây lấy sim, Cáp Lightning
                - Type C
              </li>
              <li>
                <i
                  className="fa-solid fa-circle-check"
                  style={{ color: "#3c6fd8" }}
                ></i>
                Bảo hành chính hãng 1 năm
              </li>
              <li>
                <i
                  className="fa-solid fa-circle-check"
                  style={{ color: "#3c6fd8" }}
                ></i>
                Giao hàng nhanh toàn quốc
              </li>
              <li>
                <i
                  className="fa-solid fa-circle-check"
                  style={{ color: "#3c6fd8" }}
                ></i>
                Gọi đặt mua <a href="tel:1900.6626">1900.6626</a> (7:30 - 22:00)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OverView;

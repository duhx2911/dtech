// import { useEffect } from "react";

import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Header = () => {
  const cartItems: any = useSelector<any>((state) => state.cart.cartItems);
  return (
    <header>
      <div id="header">
        <div className="container">
          {/* row  */}
          <div className="header-container">
            <div className="">
              <div className="header-logo">
                <a href="/" className="logo">
                  <img src="/images/logo.png" alt="" />
                </a>
              </div>
            </div>

            {/* <div className="col-md-6">
              <div className="header-search">
                <form>
                  <select className="input-select">
                    <option value="0">All Categories</option>
                    <option value="1">Category 01</option>
                    <option value="1">Category 02</option>
                  </select>
                  <input className="input" placeholder="Search here" />
                  <button className="search-btn">Search</button>
                </form>
              </div>
            </div> */}
            <div className="">
              <ul className="main-nav nav navbar-nav">
                <li>
                  <NavLink to={"/"}>Trang chủ</NavLink>
                </li>
                <li>
                  <NavLink to={"/iphone"}>iPhone</NavLink>
                </li>
                <li>
                  <NavLink to={"/ipad"}>iPad</NavLink>
                </li>
                <li>
                  <NavLink to={"/macbook"}>Macbook</NavLink>
                </li>
                <li>
                  <NavLink to={"/watch"}>Watch</NavLink>
                </li>
                <li>
                  <NavLink to={"/am-thanh"}>Âm thanh</NavLink>
                </li>
                <li>
                  <NavLink to={"/phu-kien"}>Phụ kiện</NavLink>
                </li>
              </ul>
            </div>
            <div className="">
              <div className="header-ctn">
                <div>
                  <a href="/#">
                    <i className="fa fa-heart"></i>
                    <span>Yêu thích</span>
                    <div className="qty">2</div>
                  </a>
                </div>

                <div className="dropdown">
                  <a className="dropdown-toggle" href="/gio-hang">
                    <i className="fa fa-shopping-cart"></i>
                    <span>Giỏ hàng</span>
                    {cartItems && cartItems.length ? (
                      <div className="qty">{cartItems.length}</div>
                    ) : null}
                  </a>
                </div>
                <div>
                  <a href="/dang-nhap">
                    <i className="fa-solid fa-user"></i>
                    <span>Tài khoản</span>
                  </a>
                </div>

                <div className="menu-toggle">
                  <a href="/#">
                    <i className="fa fa-bars"></i>
                    <span>Menu</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;

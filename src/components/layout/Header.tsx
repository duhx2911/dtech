// import { useEffect } from "react";

import { useSelector } from "react-redux";

const Header = () => {
  // useEffect(() => {
  //   window.addEventListener("scroll", isSticky);
  //   return () => {
  //     window.removeEventListener("scroll", isSticky);
  //   };
  // });
  // const isSticky = () => {
  //   const header = document.getElementById("header");
  //   const scrollTop = window.scrollY;
  //   scrollTop >= 250
  //     ? header!.classList.add("is-sticky")
  //     : header!.classList.remove("is-sticky");
  // };
  const cartItems: any = useSelector<any>((state) => state.cart.cartItems);
  return (
    <header>
      {/* TOP HEADER  */}
      <div id="top-header">
        <div className="container">
          <ul className="header-links pull-left">
            <li>
              <a href="/#">
                <i className="fa fa-phone"></i> +021-95-51-84
              </a>
            </li>
            <li>
              <a href="/#">
                <i className="fa-regular fa-envelope"></i> email@email.com
              </a>
            </li>
            <li>
              <a href="/#">
                <i className="fa fa-map-marker"></i> 175 Tây Sơn
              </a>
            </li>
          </ul>
          <ul className="header-links pull-right">
            <li>
              <a href="/#">
                <i className="fa fa-dollar"></i> VND
              </a>
            </li>
            <li>
              <a href="/dang-nhap">
                <i className="fa-regular fa-user"></i> Tài khoản
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* TOP HEADER  */}

      {/* MAIN HEADER */}
      <div id="header">
        {/* container  */}
        <div className="container">
          {/* row  */}
          <div className="row">
            {/* LOGO */}
            <div className="col-md-3">
              <div className="header-logo">
                <a href="/#" className="logo">
                  <img src="/images/logo.png" alt="" />
                </a>
              </div>
            </div>
            {/* /LOGO */}

            {/* SEARCH BAR */}
            <div className="col-md-6">
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
            </div>
            {/* /SEARCH BAR */}

            {/* ACCOUNT */}
            <div className="col-md-3 clearfix">
              <div className="header-ctn">
                {/* Wishlist */}
                <div>
                  <a href="/#">
                    <i className="fa fa-heart"></i>
                    <span>Your Wishlist</span>
                    <div className="qty">2</div>
                  </a>
                </div>
                {/* /Wishlist */}

                {/* Cart */}
                <div className="dropdown">
                  <a className="dropdown-toggle" href="/gio-hang">
                    <i className="fa fa-shopping-cart"></i>
                    <span>Giỏ hàng</span>
                    {cartItems && cartItems.length ? (
                      <div className="qty">{cartItems.length}</div>
                    ) : null}
                  </a>
                </div>
                {/* /Cart */}

                {/* Menu Toogle */}
                <div className="menu-toggle">
                  <a href="/#">
                    <i className="fa fa-bars"></i>
                    <span>Menu</span>
                  </a>
                </div>
                {/* /Menu Toogle */}
              </div>
            </div>
            {/* /ACCOUNT */}
          </div>
          {/* row */}
        </div>
        {/* container */}
      </div>
      {/* /MAIN HEADER */}
    </header>
  );
};
export default Header;

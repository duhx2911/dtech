// import { useEffect } from "react";

import { Avatar, Dropdown, MenuProps, Input, message } from "antd";
import { useSelector } from "react-redux";
import { NavLink, createSearchParams, useNavigate } from "react-router-dom";
import { ENV_BE } from "../../constants";
import store from "../../stores";
import { logout } from "../../stores/actions/loginAction";
import type { SearchProps } from "antd/es/input/Search";
const { Search } = Input;
const Header = () => {
  const cartItems: any = useSelector<any>((state) => state.cart.cartItems);
  const dataUser: any = useSelector<any>((state) => state.userLogin.userInfo);
  const navigate = useNavigate();
  const onSearch: SearchProps["onSearch"] = (value) => {
    if (value.length < 3) {
      message.error("Nhập tối thiểu 3 ký tự");
    } else {
      const params = { key: value };
      navigate({
        pathname: "/tim-kiem",
        search: `?${createSearchParams(params)}`,
      });
    }
  };
  const itemsDropdown: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <a href="/thong-tin-tai-khoan">
          <i className="fa-solid fa-user"></i> Thông tin tài khoản
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a href="/">
          <i className="fa-solid fa-gear"></i> Cài đặt
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <div
          style={{ fontWeight: 500 }}
          onClick={() => {
            // console.log("đăng xuất");
            store.dispatch(logout());
          }}
        >
          <i className="fa-solid fa-arrow-right-from-bracket"></i> Đăng xuất
        </div>
      ),
    },
  ];
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
            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ marginRight: 15 }}>
                <Search
                  placeholder="Tìm kiếm"
                  allowClear
                  onSearch={onSearch}
                  style={{ width: 150 }}
                />
              </div>
              <div className="header-ctn">
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
                  {dataUser && dataUser?.accessToken ? (
                    <div className="avatar-user">
                      <Dropdown
                        menu={{ items: itemsDropdown }}
                        placement="bottomRight"
                        arrow={{ pointAtCenter: true }}
                      >
                        <Avatar
                          size={24}
                          src={`${ENV_BE}/getPhoto/${dataUser?.user?.avatar}`}
                          style={{ cursor: "pointer" }}
                        />
                      </Dropdown>
                      <p className="user-name">{dataUser?.user?.username}</p>
                    </div>
                  ) : (
                    <a href="/dang-nhap">
                      <i className="fa-solid fa-user"></i>
                      <span>Tài khoản</span>
                    </a>
                  )}
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

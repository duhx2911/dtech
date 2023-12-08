import { NavLink } from "react-router-dom";
const TopNavigation = () => {
  return (
    <nav id="navigation">
      {/* container  */}
      <div className="container">
        {/* responsive-nav */}
        <div id="responsive-nav">
          {/* NAV */}
          <ul className="main-nav nav navbar-nav">
            <li>
              {/* <a href="/">Home</a> */}
              <NavLink to={"/"}>Trang chủ</NavLink>
            </li>
            <li>
              {/* <a href="/">Home</a> */}
              <NavLink to={"/danh-muc"}>Danh mục</NavLink>
            </li>
          </ul>
          {/* /NAV */}
        </div>
        {/* /responsive-nav */}
      </div>
      {/* /container */}
    </nav>
  );
};
export default TopNavigation;

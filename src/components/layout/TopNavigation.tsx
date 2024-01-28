import { NavLink } from "react-router-dom";
const TopNavigation = () => {
  return (
    <nav id="navigation">
      <div className="container">
        <div id="responsive-nav">
          <ul className="main-nav nav navbar-nav">
            <li>
              <NavLink to={"/"}>Trang chủ</NavLink>
            </li>
            <li>
              <NavLink to={"/danh-muc"}>Danh mục</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default TopNavigation;

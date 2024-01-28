import { Tabs } from "antd";
import type { TabsProps } from "antd";
import Profile from "../components/pages/accountpage/Profile";
import Order from "../components/pages/accountpage/Order";
const AccountPage = () => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: (
        <p>
          <i className="account-tab fa-solid fa-user"></i> Thông tin tài khoản
        </p>
      ),
      children: <Profile />,
    },
    {
      key: "2",
      label: (
        <p>
          <i className="account-tab fa-solid fa-cart-shopping"></i> Đơn hàng
        </p>
      ),
      children: <Order />,
    },
    {
      key: "3",
      label: (
        <p>
          <i className="account-tab fa-solid fa-tag"></i> Khuyến mại
        </p>
      ),
      children: "Content of Tab Pane 3",
    },
  ];
  return (
    <div className="account-page">
      <div className="container">
        <Tabs tabPosition="left" items={items} />
      </div>
    </div>
  );
};
export default AccountPage;

import React from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import Review from "./tabpane/Reviews";

const onChange = (key: string) => {
  // console.log(key);
};

const TabNav = ({ dataProduct }: any) => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Mô tả",
      children: "Mô tả sản phẩm",
    },
    {
      key: "2",
      label: "Thông số",
      children: "Thông số kỹ thuật",
    },
    {
      key: "3",
      label: "Đánh giá",
      children: <Review dataProduct={dataProduct} />,
    },
  ];
  return <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
};
export default TabNav;

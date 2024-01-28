import { Image, Popconfirm, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { DeleteOutlined } from "@ant-design/icons";
import InputNumber from "../../component/InputNumber";
import { useState } from "react";
import store from "../../../stores";
import { deleteCart } from "../../../stores/actions/cartAction";
import { convertPriceToVND } from "../../../constants";

interface DataType {
  key: string;
  id: number;
  product_name: string;
  crrPrice: number;
  oldPrice: number;
  cate_id: number;
  artwork: string;
  slug: string;
  quantity: number;
}
const CartDetail = ({ cartItems }: any) => {
  const confirm = (record: any) => {
    store.dispatch(deleteCart(record));
  };
  const cancel = () => {};
  const columns: ColumnsType<DataType> = [
    {
      title: "Hình ảnh",
      key: "imgName",
      align: "center",
      render: (_, record) => (
        <Image style={{ width: "70px" }} src={record.artwork} />
      ),
    },
    {
      title: "Tên sản phẩm",
      dataIndex: "product_name",
      key: "product_name",
      render: (value) => <h3>{value}</h3>,
    },
    {
      title: "Giá bán",
      dataIndex: "sales",
      key: "sales",
      render: (value) => <h3>{convertPriceToVND.format(value)}</h3>,
    },
    {
      title: "Màu",
      dataIndex: "color",
      key: "color",
      render: (value) => <h3>{value}</h3>,
    },
    {
      title: "Số lượng",
      dataIndex: "sl",
      key: "sl",
      render: (_, record) => <InputNumber data={record} />,
    },

    {
      title: "",
      align: "center",
      render: (_, record) => (
        <Popconfirm
          title="Xoá sản phẩm"
          description="Bạn có muốn xóa sản phẩm này khỏi giỏ hàng?"
          onConfirm={() => confirm(record)}
          onCancel={cancel}
          okText="Có"
          cancelText="Hủy"
        >
          <button type="button" className="primary-btn btn-outline btn-square">
            <DeleteOutlined />
          </button>
        </Popconfirm>
      ),
    },
  ];
  return (
    <div className="cart-details">
      <div className="cart-table">
        <Table
          style={{ width: "100%" }}
          columns={columns}
          dataSource={cartItems}
          pagination={false}
          rowKey={"id"}
        />
      </div>
      <div className="cart-option">
        <button className="primary-btn btn-outline">Cập nhật giỏ hàng</button>
        <button className="primary-btn btn-outline">Tiếp tục mua sắm</button>
      </div>
    </div>
  );
};
export default CartDetail;

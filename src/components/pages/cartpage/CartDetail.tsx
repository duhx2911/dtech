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
  productName: string;
  crrPrice: number;
  oldPrice: number;
  cate_id: number;
  artwork: string;
  slug: string;
  quantity: number;
}
const CartDetail = ({ cartItems }: any) => {
  const [product, setProduct] = useState<any>([]);
  const confirm = (id: number) => {
    store.dispatch(deleteCart(id));
  };

  const cancel = () => {};
  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      console.log(selectedRows);
      setProduct(selectedRows);
    },
    getCheckboxProps: (record: DataType) => ({
      disabled: record.productName === "Disabled User", // Column configuration not to be checked
      name: record.productName,
    }),
  };
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
      dataIndex: "productName",
      key: "productName",
      render: (value) => <h3>{value}</h3>,
    },
    {
      title: "Giá bán",
      dataIndex: "sales",
      key: "sales",
      render: (value) => <h3>{convertPriceToVND.format(value)}</h3>,
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
          onConfirm={() => confirm(record.id)}
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
          rowSelection={{
            type: "checkbox",
            ...rowSelection,
          }}
          style={{ width: "100%" }}
          columns={columns}
          dataSource={cartItems}
          pagination={false}
          rowKey={"id"}
        />
      </div>
      <div className=""> Số sản phẩm {product.length}</div>
      <div className="cart-option">
        <button className="primary-btn btn-outline">Cập nhật giỏ hàng</button>
        <button className="primary-btn btn-outline">Tiếp tục mua sắm</button>
      </div>
    </div>
  );
};
export default CartDetail;

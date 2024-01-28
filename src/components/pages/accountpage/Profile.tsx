import {
  Avatar,
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  Row,
  Select,
  Upload,
  UploadFile,
  message,
} from "antd";
import { useSelector } from "react-redux";
import { ENV_BE, dateFormat } from "../../../constants";
import { useEffect, useState } from "react";
import { CameraFilled, EditOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import axios from "axios";
import store from "../../../stores";
import { updateUser } from "../../../stores/actions/loginAction";
const { Option } = Select;
const Profile = () => {
  const dataUser: any = useSelector<any>((state) => state.userLogin.userInfo);
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [formDisabled, setFormtDisabled] = useState<boolean>(true);
  const [form] = Form.useForm();
  // const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) =>
  //   setFileList(newFileList);
  useEffect(() => {
    if (dataUser.user) {
      form.setFieldsValue({
        ...dataUser.user,
        birthday: dataUser.user.birthday
          ? dayjs(dataUser.user.birthday, "YYYY-MM-DD")
          : null,
      });
    }
  }, [dataUser]);
  const customRequest = async (options: any) => {
    const { onError, file } = options;

    try {
      const formData = new FormData();
      formData.append("myFile", file);

      // Gửi request đến API
      const response = await axios.post(`${ENV_BE}/uploadfile`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(response);
      if (response.status === 200) {
        const body = {
          id: dataUser.user.id,
          username: dataUser.user.username,
          avatar: response.data.filename,
        };
        store.dispatch(updateUser(body));
      }
    } catch (error) {
      onError(error);
      message.error(`${file.name} tải lên thất bại.`);
    }
  };
  const onSuccess = () => {
    setFormtDisabled(true);
    message.success("Cập nhật thành công");
  };
  const onFinish = async (value: any) => {
    const body = {
      ...value,
      id: dataUser.user.id,
      birthday: value.birthday ? dateFormat(value.birthday) : null,
    };
    store.dispatch(updateUser(body, onSuccess));
  };
  return (
    <div className="profile-tab">
      <div className="row">
        <div className="col-xl-3">
          <div className="profile-info">
            <div className="profile-image">
              <Avatar
                size={128}
                src={`${ENV_BE}/getPhoto/${dataUser?.user.avatar}`}
              />
              <Upload
                // action={`${ENV_BE}/uploadfile`}
                className="edit-avatar"
                // name="myFile"
                fileList={fileList}
                maxCount={1}
                accept=".png,.jpg,.jpeg,.webp"
                customRequest={customRequest}
              >
                <Avatar
                  size={40}
                  style={{ backgroundColor: "#b4b4b4" }}
                  icon={
                    <CameraFilled style={{ fontSize: 20, color: "black" }} />
                  }
                />
              </Upload>
            </div>
            <p className="profile-username">{dataUser.user.username}</p>
            <p className="profile-fullname">{dataUser.user.fullname}</p>
          </div>
        </div>
        <div className="col-xl-9">
          <div className="profile-form">
            {formDisabled ? (
              <Button
                type="primary"
                htmlType="button"
                onClick={() => setFormtDisabled(!formDisabled)}
              >
                <EditOutlined /> Sửa
              </Button>
            ) : null}

            <Form
              form={form}
              onFinish={onFinish}
              layout="vertical"
              disabled={formDisabled}
            >
              <Row gutter={[24, 0]}>
                <Col span={12}>
                  <Form.Item name="fullname" label="Họ và tên">
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name="username" label="Tên người dùng">
                    <Input disabled />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name="phone" label="Số điện thoại">
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name="gender" label="Giới tính">
                    <Select placeholder="Chọn giới tính">
                      <Option value="man">Nam</Option>
                      <Option value="woman">Nữ</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name="birthday" label="Sinh nhật">
                    <DatePicker
                      disabledDate={(d) => !d || d.isAfter(Date.now())}
                      placeholder="Chọn ngày"
                      style={{ width: "100%" }}
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name="address" label="Địa chỉ">
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Row>
                    <Col span={6}>
                      <Button htmlType="submit" type="primary">
                        Lưu
                      </Button>
                    </Col>
                    <Col span={6}>
                      <Button
                        type="primary"
                        htmlType="button"
                        danger
                        onClick={() => setFormtDisabled(!formDisabled)}
                      >
                        Hủy
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;

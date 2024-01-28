import { Button, Form, Input, message } from "antd";
import store from "../stores";
import { login } from "../stores/actions/loginAction";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const LoginPage = () => {
  const onFinish = (values: any) => {
    store.dispatch(login(values.username, values.password, onError));
  };
  const onError = (mess: string) => {
    message.error(mess);
  };
  const navigate = useNavigate();
  const userLogin: any = useSelector<any>((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo && userInfo.accessToken) {
      navigate("/");
    }
  }, [userInfo]);
  return (
    <div className="login-page">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="login-section">
              <div className="login-header">Đăng nhập</div>
              <div className="login-content">
                <Form
                  name="basic"
                  wrapperCol={{ span: 24 }}
                  style={{ maxWidth: 600 }}
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                  autoComplete="off"
                >
                  <Form.Item
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Nhập email!",
                      },
                    ]}
                  >
                    <Input className="input" placeholder="Email" />
                  </Form.Item>

                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Nhập mật khẩu!",
                      },
                    ]}
                  >
                    <Input.Password className="input" placeholder="Mật khẩu" />
                  </Form.Item>

                  <div style={{ textAlign: "center" }}>
                    <button className="primary-btn">Đăng nhập</button>
                  </div>
                  <div className="form-group to-signup">
                    <p>Bạn chưa có tài khoản?</p>
                    <a href="/dang-ky">Đăng ký ngay</a>
                  </div>
                </Form>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="login-bg">
              <img src="/images/login_bg.jpeg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;

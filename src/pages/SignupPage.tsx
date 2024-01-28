import axios from "axios";
import { ENV_BE } from "../constants";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const navigate = useNavigate();
  const onFinish = async (event: any) => {
    const formData = new FormData(event.currentTarget);
    event.preventDefault();
    const postData = await axios.post(`${ENV_BE}/auth/register`, {
      email: formData.get("email"),
      password: formData.get("password"),
      username: formData.get("username"),
      fullname: formData.get("fullname"),
      role_id: 0,
    });
    if (postData.status === 200) {
      if (postData.data.status === "success") {
        message.success("Đăng ký thành công");
        navigate("/dang-nhap");
      } else {
        message.error(postData.data.mess);
      }
    }
    console.log("Dang ky:", postData);
  };
  return (
    <div className="login-page">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="login-section">
              <div className="login-header">Đăng ký</div>
              <div className="login-content">
                <form id="login-form" onSubmit={onFinish}>
                  <div className="form-group">
                    <input
                      className="input"
                      name="email"
                      type="email"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="input"
                      name="fullname"
                      type="text"
                      placeholder="Họ và tên"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="input"
                      name="username"
                      type="text"
                      placeholder="Tên tài khoản"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      name="password"
                      type="password"
                      className="input"
                      placeholder="Mật khẩu"
                      required
                    />
                  </div>

                  <div className="form-group" style={{ textAlign: "center" }}>
                    <button className="primary-btn">Đăng ký</button>
                  </div>
                  <div className="form-group to-signup">
                    <p>Bạn đã có tài khoản?</p>
                    <a href="/dang-nhap">Đăng nhập ngay</a>
                  </div>
                </form>
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
export default SignupPage;

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="login-content">
              <h1>Đăng nhập</h1>

              <form id="login-form">
                <div className="form-group">
                  <label htmlFor="username">Tên đăng nhập</label>
                  <input
                    className="input"
                    name="username"
                    type="text"
                    placeholder="Điền tên đăng nhập"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Mật khẩu</label>
                  <input
                    name="password"
                    type="password"
                    className="input"
                    placeholder="Điền tên đăng nhập"
                  />
                </div>
                <div className="form-group remember-forgot">
                  <div className="remember-password">
                    <input type="checkbox" name="rememberpass" />
                    <label htmlFor="rememberpass">Nhớ mật khẩu</label>
                  </div>

                  <a href="/#">Quên mật khẩu</a>
                </div>
                <div className="form-group">
                  <button className="primary-btn">Đăng nhập</button>
                </div>
                <div className="form-group">
                  <p>
                    Bạn chưa có tài khoản? <a href="/#">Tạo tài khoản ngay</a>
                  </p>
                </div>
              </form>
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

const Footer = () => {
  return (
    <>
      <footer id="footer">
        {/* top footer  */}
        <div className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-xs-6">
                <div className="footer">
                  <h3 className="footer-title">Về chúng tôi</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut.
                  </p>
                  <ul className="footer-links">
                    <li>
                      <a href="/#">
                        <i className="fa fa-map-marker"></i>175 Tây Sơn
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <i className="fa fa-phone"></i>+84-123456789
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <i className="fa fa-envelope"></i>info@dtech.vn
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-3 col-xs-6">
                <div className="footer">
                  <h3 className="footer-title">Danh mục</h3>
                  <ul className="footer-links">
                    <li>
                      <a href="/iphone">iPhone</a>
                    </li>
                    <li>
                      <a href="/ipad">iPad</a>
                    </li>
                    <li>
                      <a href="/macbook">Macbook</a>
                    </li>
                    <li>
                      <a href="/watch">Watch</a>
                    </li>
                    <li>
                      <a href="/am-thanh">Âm thanh</a>
                    </li>
                    <li>
                      <a href="/phu-kien">Phụ kiện</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="clearfix visible-xs"></div>

              <div className="col-md-3 col-xs-6">
                <div className="footer">
                  <h3 className="footer-title">Thông tin</h3>
                  <ul className="footer-links">
                    <li>
                      <a href="/#">Về chúng tôi</a>
                    </li>
                    <li>
                      <a href="/#">Liên hệ</a>
                    </li>
                    <li>
                      <a href="/#">Chính sách bảo mật</a>
                    </li>

                    <li>
                      <a href="/#">Điều khoản</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-3 col-xs-6">
                <div className="footer">
                  <h3 className="footer-title">Dịch vụ</h3>
                  <ul className="footer-links">
                    <li>
                      <a href="/dang-nhap">Tài khoản</a>
                    </li>
                    <li>
                      <a href="/gio-hang">Giỏ hàng</a>
                    </li>
                    <li>
                      <a href="/yeu-thich">Yêu thích</a>
                    </li>
                    <li>
                      <a href="/#">Trợ giúp</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* /top footer */}
        </div>
        <div id="bottom-footer" className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <ul className="footer-payments">
                  <li>
                    <a href="/#">
                      <i className="fa-brands fa-cc-visa"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <i className="fa-solid fa-credit-card"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <i className="fa-brands fa-cc-paypal"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <i className="fa-brands fa-cc-mastercard"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <i className="fa-brands fa-cc-discover"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <i className="fa-brands fa-cc-amex"></i>
                    </a>
                  </li>
                </ul>
                <span className="copyright">
                  &copy; 2023 Công ty Cổ phần đầu tư công nghệ Dtech
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* /bottom footer  */}
      </footer>
    </>
  );
};
export default Footer;

const Newsletter = () => {
  return (
    <div id="newsletter" className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="newsletter">
              <p>
                Đăng ký nhận <strong>Tin mới</strong>
              </p>
              <form>
                <input
                  className="input"
                  type="email"
                  placeholder="Email của bạn"
                />
                <button className="newsletter-btn">
                  <i className="fa fa-envelope"></i> Đăng ký
                </button>
              </form>
              <ul className="newsletter-follow">
                <li>
                  <a href="/#">
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="/#">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="/#">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="/#">
                    <i className="fa-brands fa-pinterest"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Newsletter;

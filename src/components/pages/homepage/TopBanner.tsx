const TopBanner = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-xs-6">
            <div className="shop">
              <div className="shop-img">
                <img src="/images/iphone.png" alt="" />
              </div>
              <div className="shop-body">
                <h3>
                  iPhone
                  <br />
                </h3>
                <a href="/iphone" className="cta-btn">
                  Mua ngay <i className="fa fa-arrow-circle-right"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-xs-6">
            <div className="shop">
              <div className="shop-img">
                <img src="/images/macbook.png" alt="" />
              </div>
              <div className="shop-body">
                <h3>
                  Macbook
                  <br />
                </h3>
                <a href="/macbook" className="cta-btn">
                  Mua ngay <i className="fa fa-arrow-circle-right"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-xs-6">
            <div className="shop">
              <div className="shop-img">
                <img src="/images/ipad.png" alt="" />
              </div>
              <div className="shop-body">
                <h3>
                  iPad
                  <br />
                </h3>
                <a href="/ipad" className="cta-btn">
                  Mua ngay <i className="fa fa-arrow-circle-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TopBanner;

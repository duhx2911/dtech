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
                  Collection
                </h3>
                <a href="/#" className="cta-btn">
                  Shop now <i className="fa fa-arrow-circle-right"></i>
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
                  Collection
                </h3>
                <a href="/#" className="cta-btn">
                  Shop now <i className="fa fa-arrow-circle-right"></i>
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
                  Collection
                </h3>
                <a href="/#" className="cta-btn">
                  Shop now <i className="fa fa-arrow-circle-right"></i>
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

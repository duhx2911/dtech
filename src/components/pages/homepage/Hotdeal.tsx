const Hotdeal = () => {
  return (
    <div id="hot-deal" className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="hot-deal">
              <ul className="hot-deal-countdown">
                <li>
                  <div>
                    <h3>02</h3>
                    <span>Ngày</span>
                  </div>
                </li>
                <li>
                  <div>
                    <h3>10</h3>
                    <span>Giờ</span>
                  </div>
                </li>
                <li>
                  <div>
                    <h3>34</h3>
                    <span>Phút</span>
                  </div>
                </li>
                <li>
                  <div>
                    <h3>60</h3>
                    <span>Giây</span>
                  </div>
                </li>
              </ul>
              <h2 className="text-uppercase">Ưu đãi hot tuần này</h2>
              <p>Sản phẩm mới giảm giá tới 50%</p>
              <a className="primary-btn cta-btn" href="/#">
                Mua ngay
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hotdeal;

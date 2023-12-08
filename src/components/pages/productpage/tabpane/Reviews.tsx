const Review = () => {
  const handleSubmit = (event: any) => {
    const formData = new FormData(event.currentTarget);
    event.preventDefault();
    console.log(formData.get("comment"));
  };
  return (
    <div id="tab3" className="tab-pane fade in">
      <div className="row">
        <div className="col-xl-3">
          <div id="rating">
            <div className="rating-avg">
              <span>4.5</span>
              <div className="rating-stars">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </div>
            </div>
            <ul className="rating">
              <li>
                <div className="rating-stars">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div className="rating-progress">
                  <div style={{ width: "80%" }}></div>
                </div>
                <span className="sum">3</span>
              </li>
              <li>
                <div className="rating-stars">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                </div>
                <div className="rating-progress">
                  <div style={{ width: "40%" }}></div>
                </div>
                <span className="sum">2</span>
              </li>
              <li>
                <div className="rating-stars">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                </div>
                <div className="rating-progress">
                  <div></div>
                </div>
                <span className="sum">0</span>
              </li>
              <li>
                <div className="rating-stars">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                </div>
                <div className="rating-progress">
                  <div></div>
                </div>
                <span className="sum">0</span>
              </li>
              <li>
                <div className="rating-stars">
                  <i className="fa fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                </div>
                <div className="rating-progress">
                  <div></div>
                </div>
                <span className="sum">0</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-xl-6">
          <div id="reviews">
            <ul className="reviews">
              <li>
                <div className="review-heading">
                  <h5 className="name">John</h5>
                  <p className="date">27 DEC 2018, 8:0 PM</p>
                  <div className="review-rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o empty"></i>
                  </div>
                </div>
                <div className="review-body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                  </p>
                </div>
              </li>
              <li>
                <div className="review-heading">
                  <h5 className="name">John</h5>
                  <p className="date">27 DEC 2018, 8:0 PM</p>
                  <div className="review-rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o empty"></i>
                  </div>
                </div>
                <div className="review-body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                  </p>
                </div>
              </li>
              <li>
                <div className="review-heading">
                  <h5 className="name">John</h5>
                  <p className="date">27 DEC 2018, 8:0 PM</p>
                  <div className="review-rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o empty"></i>
                  </div>
                </div>
                <div className="review-body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                  </p>
                </div>
              </li>
            </ul>
            <ul className="reviews-pagination">
              <li className="active">1</li>
              <li>
                <a href="/#">2</a>
              </li>
              <li>
                <a href="/#">3</a>
              </li>
              <li>
                <a href="/#">4</a>
              </li>
              <li>
                <a href="/#">
                  <i className="fa fa-angle-right"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-xl-3">
          <div id="review-form">
            <form className="review-form" onSubmit={handleSubmit}>
              <input
                type="text"
                className="input"
                name="nameInput"
                placeholder="Tên của bạn"
              />
              <input
                type="email"
                name="emailInput"
                className="input"
                placeholder="Email của bạn"
              />
              <textarea
                name="comment"
                className="input"
                cols={30}
                rows={10}
              ></textarea>
              <div className="input-rating">
                <span>Your Rating: </span>
                <div className="stars">
                  <input id="star5" name="rating" value="5" type="radio" />
                  <label htmlFor="star5"></label>
                  <input id="star4" name="rating" value="4" type="radio" />
                  <label htmlFor="star4"></label>
                  <input id="star3" name="rating" value="3" type="radio" />
                  <label htmlFor="star3"></label>
                  <input id="star2" name="rating" value="2" type="radio" />
                  <label htmlFor="star2"></label>
                  <input id="star1" name="rating" value="1" type="radio" />
                  <label htmlFor="star1"></label>
                </div>
              </div>
              <button className="primary-btn">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Review;

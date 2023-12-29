import { useEffect } from "react";
import store from "../../../../stores";
import { getReview } from "../../../../stores/actions/reviewAction";
import ReviewForm from "./ReviewForm";
import { useSelector } from "react-redux";
import { Reviews, dateFormat } from "../../../../constants";

const Review = ({ dataProduct }: any) => {
  const fetchData = async () => {
    store.dispatch(getReview());
  };
  const reviews: any = useSelector<any>((state) => state.reviewReducer.reviews);
  useEffect(() => {
    fetchData();
  }, []);
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
              {reviews.map((item: Reviews) => {
                return (
                  <li key={item.id}>
                    <div className="review-heading">
                      <h5 className="name">{item.username}</h5>
                      <p className="date">{dateFormat(item.create_at)}</p>
                      <div className="review-rating">
                        {new Array(Number(item.rate))
                          .fill(null)
                          .map((_, index) => {
                            return <i className="fa fa-star" key={index}></i>;
                          })}
                      </div>
                    </div>
                    <div className="review-body">
                      <p>{item.content}</p>
                    </div>
                  </li>
                );
              })}
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
          <ReviewForm dataProduct={dataProduct} />
        </div>
      </div>
    </div>
  );
};
export default Review;

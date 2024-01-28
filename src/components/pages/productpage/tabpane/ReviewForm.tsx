import axios from "axios";
import { useSelector } from "react-redux";
import { ENV_BE } from "../../../../constants";

const ReviewForm = ({ dataProduct }: any) => {
  const dataUser: any = useSelector<any>((state) => state.userLogin.userInfo);

  const handleSubmit = async (event: any) => {
    const formData = new FormData(event.currentTarget);
    event.preventDefault();
    const body = {
      content: formData.get("comment"),
      rate: formData.get("rating"),
      customer_id: dataUser.user.id,
      product_id: dataProduct.id,
    };
    const res = await axios.post(`${ENV_BE}/rating`, body);
    if (res.status === 200) {
      if (res.data.status === "success") {
        event.target.reset();
      }
    }
  };
  return (
    <div
      className={
        dataUser && dataUser.accessToken.length ? "" : "review-form-hidden"
      }
    >
      {dataUser && dataUser.accessToken.length ? null : (
        <a href="/dang-nhap" className="primary-btn review-login">
          Đăng nhập
        </a>
      )}

      <div id="review-form">
        <form className="review-form" onSubmit={handleSubmit}>
          <textarea
            name="comment"
            className="input"
            placeholder="Chi tiết đánh giá"
            cols={30}
            rows={10}
          ></textarea>
          <div className="input-rating">
            <span>Đánh giá: </span>
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
          <button className="primary-btn">Gửi</button>
        </form>
      </div>
    </div>
  );
};
export default ReviewForm;

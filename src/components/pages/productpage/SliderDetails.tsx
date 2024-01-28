import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import { ENV_BE, ImageProduct } from "../../../constants";

const SliderDetails = () => {
  const dataImg: any = useSelector<any>(
    (state) => state.imageProductReducer.images
  );
  const [thumbs, setThumbs] = useState("");
  let settings = {
    dots: false,
    centreMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
  };
  useEffect(() => {
    if (dataImg && dataImg?.length) {
      setThumbs(dataImg[0]?.img_url);
    }
  }, [dataImg]);

  return (
    <>
      <div className="preview">
        <img
          src={thumbs?.length ? `${ENV_BE}/getPhoto/${thumbs}` : ""}
          alt="Ảnh preview"
        />
      </div>
      <div className="my-slick-slider">
        <Slider {...settings}>
          {dataImg.map((image: ImageProduct) => {
            return (
              <div className="thumb-img" key={image.id}>
                <img
                  src={`${ENV_BE}/getPhoto/${image?.img_url}`}
                  onClick={() => setThumbs(`${image?.img_url}`)}
                  alt={image.img_url}
                  style={{ cursor: "pointer" }}
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};
export default SliderDetails;

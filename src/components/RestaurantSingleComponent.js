import React from "react";
import Swiper from "react-id-swiper";
import { ReactTinyLink } from "react-tiny-link";
import "swiper/swiper.scss";
import "./RestaurantSingleComponent.scss";

const RestaurantSingleComponent = () => {
  const params = {
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    loop: true
  };

  return (
    <div className="single-restaurant-container">
      <div className="restaurant-description-wrapper">
        <div className="restaurant-title">음식점</div>
        <div className="restaurant-adderss">주소</div>
      </div>
      <div className="swiper-wrapper">
        <Swiper {...params}>
          <div>
            <ReactTinyLink
              cardSize="small"
              showGraphic={true}
              maxLine={2}
              minLine={1}
              url="https://www.youtube.com/watch?v=eZE6FE868mc"
            />
          </div>
          <div>
            <ReactTinyLink
              cardSize="small"
              showGraphic={true}
              maxLine={2}
              minLine={1}
              url="https://www.youtube.com/watch?v=5jdgPMVoAI8"
            />
          </div>
          <div>
            <ReactTinyLink
              cardSize="small"
              showGraphic={true}
              maxLine={2}
              minLine={1}
              url="https://www.youtube.com/watch?v=J1RVAyoSaVI"
            />
          </div>
          <div>
            <ReactTinyLink
              cardSize="small"
              showGraphic={true}
              maxLine={2}
              minLine={1}
              url="https://www.youtube.com/watch?v=I5fpzGIeLmc"
            />
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default RestaurantSingleComponent;

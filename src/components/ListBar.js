import React from "react";
import Swiper from "react-id-swiper";
import { ReactTinyLink } from "react-tiny-link";
import "swiper/swiper.scss";
import "./ComponentStyles.scss";

const ListBar = props => {
  const { name, geog, roadAddress, reviews } = props;
  const params = {
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true
    },
    spaceBetween: 30,
  };

  return (
    <div className="RestaurantContainer">
      <div className="restaurantDescription">
        <h1 className="restaurantTitle">{name}</h1>
        <h2 className="restaurantAdderss">{roadAddress}</h2>
      </div>
      <Swiper {...params}>
        {reviews ? (
          reviews.map((data, index) => {
            return (
              <div className="LinkContainer">
                <ReactTinyLink
                  width="100%"
                  cardSize="small"
                  showGraphic={true}
                  maxLine={2}
                  minLine={1}
                  url={data.url}
                  proxyUrl={null}
                />
              </div>
            );
          })
        ) : (
          <div></div>
        )}
      </Swiper>
    </div>
  );
};

export default ListBar;

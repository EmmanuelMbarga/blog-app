import React from "react";
import "react-multi-carousel/lib/styles.css";
import { CardList } from "./cardRepa";
import Carousel from "react-multi-carousel";

export const ContainerRepas = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (

      <Carousel
        responsive={responsive} className="z-10">
        <div>
          <CardList />
        </div>
        <div className="">
          <CardList />
        </div>
        <div className="">
          <CardList />
        </div>
        <div className="">
          <CardList />
        </div>
        <div className="">
          <CardList />
        </div>
      </Carousel>

  );
};

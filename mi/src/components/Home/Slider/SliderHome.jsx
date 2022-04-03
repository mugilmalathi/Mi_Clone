import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

export const SliderHome = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <Link to={"/product"}>
          <img
            className="d-block w-100"
            src="https://i01.appmifile.com/webfile/globalimg/0320/TO-B/event/2022-mff-banner-en.jpg"
            alt="First slide"
          />
        </Link>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <Link to={"/product"}>
          <img
            className="d-block w-100"
            src="https://i01.appmifile.com/webfile/globalimg/0320/TO-B/New-Product-Banner/RN-11Pro-Plus5G-en-Banner.jpg"
            alt="Second slide"
          />
        </Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to={"/product"}>
          <img
            className="d-block w-100"
            src="https://i01.appmifile.com/webfile/globalimg/0320/TO-B/New-Product-Banner/Xiaomi-12-Pro-banner-en.jpg"
            alt="Third slide"
          />
        </Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to={"/product"}>
          <img
            className="d-block w-100"
            src="https://i01.appmifile.com/webfile/globalimg/dongxuechun/rn11pro5g.jpg"
            alt="Third slide"
          />
        </Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to={"/product"}>
          <img
            className="d-block w-100"
            src="https://i01.appmifile.com/webfile/globalimg/0320/TO-B/event/youtube-event-banner.jpg"
            alt="Third slide"
          />
        </Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to={"/product"}>
          <img
            className="d-block w-100"
            src="https://i01.appmifile.com/webfile/globalimg/0320/TO-B/New-Product-Banner/mi-11t-pro-banner.jpg"
            alt="Third slide"
          />
        </Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to={"/product"}>
          <img
            className="d-block w-100"
            src="https://i01.appmifile.com/webfile/globalimg/dongxuechun/k9dbannerEn.jpg"
            alt="Third slide"
          />
        </Link>
      </Carousel.Item>
    </Carousel>
  );
};

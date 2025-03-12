import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "./assets/images/img-1.jpg";
import "./App.css";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 16,
  slidesToScroll: 6,
  autoplay: true,
  autoplaySpeed: 3000,
};

const SlickCarousel = () => {
  return (
   
    <Slider {...settings}>
      <div className="items"><h3><img src={img1} alt="food" />Food 1</h3></div>
      <div className="items"><h3><img src={img1} alt="food" />Food 1</h3></div>
      <div className="items"><h3><img src={img1} alt="food" />Food 1</h3></div>
      <div className="items"><h3><img src={img1} alt="food" />Food 1</h3></div>
      <div className="items"><h3><img src={img1} alt="food" />Food 1</h3></div>
      <div className="items"><h3><img src={img1} alt="food" />Food 1</h3></div>
      <div className="items"><h3><img src={img1} alt="food" />Food 1</h3></div>
      <div className="items"><h3><img src={img1} alt="food" />Food 1</h3></div>
      <div className="items"><h3><img src={img1} alt="food" />Food 1</h3></div>
      <div className="items"><h3><img src={img1} alt="food" />Food 1</h3></div>
      <div className="items"><h3><img src={img1} alt="food" />Food 1</h3></div>
      <div className="items"><h3><img src={img1} alt="food" />Food 1</h3></div>
      <div className="items"><h3><img src={img1} alt="food" />Food 1</h3></div>
      <div className="items"><h3><img src={img1} alt="food" />Food 1</h3></div>
      <div className="items"><h3><img src={img1} alt="food" />Food 1</h3></div>
      <div className="items"><h3><img src={img1} alt="food" />Food 1</h3></div>
      <div className="items"><h3><img src={img1} alt="food" />Food 1</h3></div>
      <div className="items"><h3><img src={img1} alt="food" />Food 1</h3></div>
      <div className="items"><h3><img src={img1} alt="food" />Food 1</h3></div>
    </Slider>
  );
};

export default SlickCarousel;
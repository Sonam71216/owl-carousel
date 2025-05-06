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
   <div className="slider">
    <h1>Owl Carousel</h1>
    <Slider {...settings}>
      <div className="items"><h3><img src={img1} alt="food" />Food 1</h3></div>
      <div className="items"><h3><img src={img1} alt="food" />Food 2</h3></div>
      <div className="items"><h3><img src={img1} alt="food" />Food 3</h3></div>
      <div className="items"><h3><img src={img1} alt="food" />Food 4</h3></div>
      <div className="items"><h3><img src={img1} alt="food" />Food 5</h3></div>
      <div className="items"><h3><img src={img1} alt="food" />Food 6</h3></div>
      <div className="items"><h3><img src={img1} alt="food" />Food 7</h3></div>
      <div className="items"><h3><img src={img1} alt="food" />Food 8</h3></div>
      <div className="items"><h3><img src={img1} alt="food" />Food 9</h3></div>
      <div className="items"><h3><img src={img1} alt="food" />Food 10</h3></div>
      <div className="items"><h3><img src={img1} alt="food" />Food 11</h3></div>
      <div className="items"><h3><img src={img1} alt="food" />Food 12</h3></div>
      <div className="items"><h3><img src={img1} alt="food" />Food 13</h3></div>
      <div className="items"><h3><img src={img1} alt="food" />Food 14</h3></div>
      <div className="items"><h3><img src={img1} alt="food" />Food 15</h3></div>
      <div className="items"><h3><img src={img1} alt="food" />Food 16</h3></div>
      <div className="items"><h3><img src={img1} alt="food" />Food 17</h3></div>
      <div className="items"><h3><img src={img1} alt="food" />Food 18</h3></div>
      <div className="items"><h3><img src={img1} alt="food" />Food 19</h3></div>
    </Slider>
    </div>
  );
};

export default SlickCarousel;
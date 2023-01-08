import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../Assist/slider1.webp";
import img2 from "../../Assist/slider2.webp";
import img3 from "../../Assist/slider3.webp";
import img4 from "../../Assist/slider4.webp";
import img5 from "../../Assist/slider5.webp";
import img6 from "../../Assist/slider6.webp";
import img7 from "../../Assist/slider7.webp";
import img8 from "../../Assist/slider8.webp";

const Banner = () => {
  const slider = [img1, img2, img3, img4, img5, img6, img7, img8];
  return (
    <Carousel
      showThumbs={false}
      autoPlay
      infiniteLoop
      className="  my-10 mx-auto"
    >
      {slider?.map((sl, i) => (
        <div className="lg:h-[500px]" key={i}>
          <img loading="lazy" className="h-full" src={sl} alt="" />
        </div>
      ))}
    </Carousel>
  );
};

export default Banner;

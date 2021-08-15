import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import TopSlickTexts from "./TopSlickTexts";

import Image1 from "@/public/images/topslide/1.jpg";
import Image2 from "@/public/images/topslide/2.jpg";
import Image3 from "@/public/images/topslide/3.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TopSlick() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [afterActiveSlide, setAfterActiveSlide] = useState(0);
  const settings = {
    infinite: true,
    autoplay: true,
    fade: true,
    speed: 3000,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current: any, next: any) => setActiveSlide(next),
    afterChange: (current: any) => setAfterActiveSlide(current),
  };
  return (
    <div className="relative">
      <Slider className="bg-yellow-100" {...settings}>
        <div>
          <Image src={Image1} width={1920} height={1440} alt="slider-image" />
        </div>
        <div>
          <Image src={Image2} width={1920} height={1440} alt="slider-image" />
        </div>
        <div>
          <Image src={Image3} width={1920} height={1440} alt="slider-image" />
        </div>
      </Slider>
      <div className="absolute top-0 bottom-0 right-0 left-0 z-10 gradient"></div>
      <TopSlickTexts activeSlide={activeSlide} num={0} text={"Balık"} />
      <TopSlickTexts activeSlide={activeSlide} num={1} text={"Cafe"} />
      <TopSlickTexts activeSlide={activeSlide} num={2} text={"Restorant"} />
    </div>
  );
}

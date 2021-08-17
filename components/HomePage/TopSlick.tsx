import React, { useState } from "react";
import Image from "next/image";
import TopSlickTexts from "./TopSlickTexts";
import Carousel from "react-material-ui-carousel";

import Image1 from "@/public/static/images/topslide/1.jpg";
import Image2 from "@/public/static/images/topslide/2.jpg";
import Image3 from "@/public/static/images/topslide/3.jpg";

export default function TopSlick() {
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <div className="relative">
      <Carousel
        timeout={{ appear: 620, enter: 620, exit: 620 }}
        interval={4000}
        onChange={(index: number, active: number) => {
          setActiveSlide(index);
        }}
      >
        <div>
          <Image src={Image1} width={1920} height={1440} alt="slider-image" />
        </div>
        <div>
          <Image src={Image2} width={1920} height={1440} alt="slider-image" />
        </div>
        <div>
          <Image src={Image3} width={1920} height={1440} alt="slider-image" />
        </div>
      </Carousel>
      <div className="absolute top-0 bottom-0 right-0 left-0 z-10 gradient"></div>
      <TopSlickTexts activeSlide={activeSlide} num={0} text={"Balık"} />
      <TopSlickTexts activeSlide={activeSlide} num={1} text={"Cafe"} />
      <TopSlickTexts activeSlide={activeSlide} num={2} text={"Restorant"} />
    </div>
  );
}

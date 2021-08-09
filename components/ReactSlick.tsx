import React from "react";
import Slider from "react-slick";
import Image from "next/image";

import Image1 from "@/public/images/topslide/1.jpg";
import Image2 from "@/public/images/topslide/2.jpg";
import Image3 from "@/public/images/topslide/3.jpg";

export default function ReactSlick() {
  const settings = {
    infinite: true,
    autoplay: true,
    fade: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider className="overflow-hidden bg-yellow-100" {...settings}>
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
  );
}

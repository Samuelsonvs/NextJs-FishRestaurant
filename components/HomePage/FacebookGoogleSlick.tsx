import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";

import Suggestion1 from "@/public/images/facebookcomments/suggestion1.png";
import Suggestion2 from "@/public/images/facebookcomments/suggestion2.png";
import Suggestion3 from "@/public/images/facebookcomments/suggestion3.png";
import Suggestion4 from "@/public/images/facebookcomments/suggestion4.png";
import MobilSuggestion1 from "@/public/images/facebookcomments/mobilSuggestion1.png";
import MobilSuggestion2 from "@/public/images/facebookcomments/mobilSuggestion2.png";
import MobilSuggestion3 from "@/public/images/facebookcomments/mobilSuggestion3.png";
import MobilSuggestion4 from "@/public/images/facebookcomments/mobilSuggestion4.png";
import GoogleComment1 from "@/public/images/googlecomments/googlecomment_1.png";
import GoogleComment2 from "@/public/images/googlecomments/googlecomment_2.png";
import GoogleComment3 from "@/public/images/googlecomments/googlecomment_3.png";
import GoogleCommentMobil1 from "@/public/images/googlecomments/googlecommentmobil_1.png";
import GoogleCommentMobil2 from "@/public/images/googlecomments/googlecommentmobil_2.png";
import GoogleCommentMobil3 from "@/public/images/googlecomments/googlecommentmobil_3.png";

export default function FacebookSlick() {
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 2,
    arrows: false,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1240,
        settings: {
          infinite: true,
          autoplay: true,
          speed: 1000,
          slidesToShow: 1,
          arrows: false,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="max-w-screen-3xl text-center mt-20">
      <h2 className="font-playfair text-3xl leading-10 md:text-5xl lg:text-6xl">
        Bizi Tercih Ettiğiniz İçin Teşekkürler.
      </h2>
      <div className="mt-10">
        {Array.from(Array(5).keys()).map((num) => {
          return (
            <svg
              key={num}
              className="w-7 h-7 p-1 sm:w-10 sm:h-10 inline-block"
              viewBox="0 -10 511.98685 511"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m510.652344 185.902344c-3.351563-10.367188-12.546875-17.730469-23.425782-18.710938l-147.773437-13.417968-58.433594-136.769532c-4.308593-10.023437-14.121093-16.511718-25.023437-16.511718s-20.714844 6.488281-25.023438 16.535156l-58.433594 136.746094-147.796874 13.417968c-10.859376 1.003906-20.03125 8.34375-23.402344 18.710938-3.371094 10.367187-.257813 21.738281 7.957031 28.90625l111.699219 97.960937-32.9375 145.089844c-2.410156 10.667969 1.730468 21.695313 10.582031 28.09375 4.757813 3.4375 10.324219 5.1875 15.9375 5.1875 4.839844 0 9.640625-1.304687 13.949219-3.882813l127.46875-76.183593 127.421875 76.183593c9.324219 5.609376 21.078125 5.097657 29.910156-1.304687 8.855469-6.417969 12.992187-17.449219 10.582031-28.09375l-32.9375-145.089844 111.699219-97.941406c8.214844-7.1875 11.351563-18.539063 7.980469-28.925781zm0 0"
                fill="#ffc107"
              />
            </svg>
          );
        })}
      </div>
      <div className="block sm:hidden">
        <Slider {...settings} className="mt-10">
          <div className="p-5">
            <Image
              src={MobilSuggestion1}
              alt="resim"
              quality={100}
              width={277}
              height={136}
              priority
            />
          </div>
          <div className="p-5">
            <Image
              src={MobilSuggestion2}
              alt="resim"
              quality={100}
              width={264}
              height={112}
              priority
            />
          </div>
          <div className="p-5">
            <Image
              src={MobilSuggestion3}
              alt="resim"
              quality={100}
              width={307}
              height={178}
              priority
            />
          </div>
          <div className="p-5">
            <Image
              src={MobilSuggestion4}
              alt="resim"
              quality={100}
              width={312}
              height={149}
              priority
            />
          </div>
          <div className="p-5">
            <Image
              src={GoogleCommentMobil1}
              alt="resim"
              quality={100}
              width={346}
              height={185}
              priority
            />
          </div>
          <div className="p-5">
            <Image
              src={GoogleCommentMobil2}
              alt="resim"
              quality={100}
              width={348}
              height={236}
              priority
            />
          </div>
          <div className="p-5">
            <Image
              src={GoogleCommentMobil3}
              alt="resim"
              quality={100}
              width={319}
              height={315}
              priority
            />
          </div>
        </Slider>
      </div>
      <div className="hidden sm:block py-10">
        <Slider {...settings} className="mt-10">
          <div className="p-5">
            <Image
              src={Suggestion1}
              alt="resim"
              quality={100}
              width={526}
              height={92}
              priority
            />
          </div>
          <div className="p-5">
            <Image
              src={Suggestion2}
              alt="resim"
              quality={100}
              width={519}
              height={126}
              placeholder="blur"
            />
          </div>
          <div className="p-5">
            <Image
              src={Suggestion3}
              alt="resim"
              quality={100}
              width={513}
              height={85}
              priority
            />
          </div>
          <div className="p-5">
            <Image
              src={Suggestion4}
              alt="resim"
              quality={100}
              width={492}
              height={84}
              priority
            />
          </div>
          <div className="p-5">
            <Image
              src={GoogleComment1}
              alt="resim"
              quality={100}
              width={455}
              height={251}
              priority
            />
          </div>
          <div className="p-5">
            <Image
              src={GoogleComment2}
              alt="resim"
              quality={100}
              width={502}
              height={266}
              priority
            />
          </div>
          <div className="p-5">
            <Image
              src={GoogleComment3}
              alt="resim"
              quality={100}
              width={499}
              height={170}
              priority
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}

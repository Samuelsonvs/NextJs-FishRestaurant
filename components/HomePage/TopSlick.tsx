import React, { useRef, useState } from "react";
import Image from "next/image";
import TopSlickTexts from "./TopSlickTexts";

import { useSlider } from "@/hooks/useSlider";

const images = [
  "/static/images/topslide/1.jpg",
  "/static/images/topslide/2.jpg",
  "/static/images/topslide/3.jpg",
];

export default function TopSlick() {
  const [opacities, setOpacities] = useState<number[]>([]);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const { mounted, active } = useSlider(sliderRef, {
    slides: images.length,
    loop: true,
    duration: 3000,
    move(s) {
      const new_opacities = s.details().positions.map((slide) => slide.portion);
      setOpacities(new_opacities);
    },
  });
  return (
    <section className="relative">
      <div ref={sliderRef} className="relative h-96 sm:h-120 overflow-hidden">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="w-full h-full absolute top-0"
            style={{ opacity: opacities[idx] }}
          >
            <Image
              src={src}
              layout="fill"
              priority
              objectFit="cover"
              alt="slider-image"
            />
          </div>
        ))}
      </div>
      <div className="absolute top-0 bottom-0 right-0 left-0 z-10 gradient"></div>
      <TopSlickTexts activeSlide={active} num={0} text={"Balık"} />
      <TopSlickTexts activeSlide={active} num={1} text={"Cafe"} />
      <TopSlickTexts activeSlide={active} num={2} text={"Restorant"} />
    </section>
  );
}

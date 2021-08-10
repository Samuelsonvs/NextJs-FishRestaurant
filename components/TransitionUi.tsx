import React from "react";
import { Transition } from "@headlessui/react";

interface TransitionUiElem {
  activeSlide: number;
  num: number;
  text: string;
}

export default function TransitionUi({
  activeSlide,
  num,
  text,
}: TransitionUiElem) {
  return (
    <Transition
      className="absolute text-gray-300 font-playfair text-3xl sx:text-4xl text-opacity-70 text-center top-0 bottom-0 left-0 right-0 z-10"
      show={activeSlide === num ? true : false}
    >
      <Transition.Child
        className="relative top-1/3 sm:text-5xl md:text-6xl lg:text-7xl"
        enter="transition transform duration-700 ease-out"
        enterFrom="opacity-0 rotate-90 scale-50 -translate-y-10"
        enterTo="opacity-100 rotate-0 scale-100 translate-y-0"
        leave="transition transform duration-300 ease-in"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="border-2 border-collapse border-transparent border-opacity-50 border-yellow-200 bg-gray-700 bg-opacity-30 rounded inline px-2">
          {text}
        </div>
      </Transition.Child>
      <Transition.Child
        className="lg:mt-32 mt-10 relative top-1/3 sm:text-5xl md:text-6xl lg:text-7xl"
        enter="transition transform duration-700 ease-out"
        enterFrom="opacity-0 -rotate-90 scale-50 -translate-y-10"
        enterTo="opacity-100 rotate-0 scale-100 translate-y-0"
        leave="transition transform duration-300 ease-in"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="border-2 border-collapse border-transparent border-opacity-50 border-yellow-200 bg-gray-700 bg-opacity-30 rounded inline px-2">
          {text}
        </div>
      </Transition.Child>
    </Transition>
  );
}

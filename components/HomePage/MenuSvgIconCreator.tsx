import React from "react";
import Link from "next/link";
import Image from "next/image";

import { MenuSvgIconsConstants } from "@/interfaces/interface";

export default function MenuSvgIconCreator({
  svg,
  head,
  text,
  aText,
  href,
  alt,
}: MenuSvgIconsConstants) {
  return (
    <div className="flex flex-col items-center mt-10 sm:mt-0 leading-8">
      <Image width={80} height={80} src={svg} alt={alt} />
      <h3 className="mt-5 text-2xl font-playfair">{head}</h3>

      <p className="mt-5 text-center">{text}</p>
      <Link href={href} passHref>
        <a className="button-active-effect mt-5 flex justify-evenly items-center p-3 w-44 border-2 border-yellow-500 text-yellow-500 rounded-full transition duration-150 ease-in-out hover:bg-yellow-500 hover:text-gray-100 fill-yellow hover:fill-gray-1">
          {aText}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 animate-ping stroke-2 fill"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </Link>
    </div>
  );
}

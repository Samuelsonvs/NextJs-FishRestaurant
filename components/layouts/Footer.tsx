import React from "react";
import Image from "next/image";

import FooterIcon from "@/public/images/logo/footericon.png";
import FacebookSvg from "@/public/svg/facebook.svg";
import InstagramSvg from "@/public/svg/instagram.svg";

export default function Footer() {
  return (
    <div className="mt-10 bg-gray-700 text-yellow-50 font-playfair">
      <div className="py-10 hidden sm:flex justify-center">
        <Image src={FooterIcon} alt="footer-icon" width={300} height={115} />
      </div>
      <div className="py-10 flex sm:hidden justify-center">
        <Image src={FooterIcon} alt="footer-icon" width={150} height={58} />
      </div>
      <ul className="flex justify-evenly text-lg sm:text-2xl">
        <li>Anasayfa</li>
        <li>Blog</li>
        <li>Tarifler</li>
        <li>Hakkımızda</li>
      </ul>
      <ul className="p-10 flex justify-center">
        <li className="px-4">
          <a href="https://www.facebook.com">
            <Image
              src={FacebookSvg}
              alt="facebook-icon"
              width={40}
              height={40}
            />
          </a>
        </li>
        <li className="px-4">
          <a href="https://www.facebook.com">
            <Image
              src={InstagramSvg}
              alt="facebook-icon"
              width={40}
              height={40}
            />
          </a>
        </li>
      </ul>
      <ul className="p-2 mt-5 flex flex-col font-serif items-center text-lg smtext-2xl">
        <li>
          <ul className="flex flex-col">
            <li className="p-2 flex justify-center items-center">
              <div className="p-1">Telefon</div>
              <div className="p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-yellow-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"
                  />
                </svg>
              </div>
            </li>
            <li className="p-2">(0462) 721 31 61</li>
          </ul>
        </li>
        <li>
          <ul className="flex flex-col">
            <li className="p-2 flex justify-center items-center">
              <div className="p-1">Adres</div>
              <div className="p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-yellow-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
            </li>
            <li>Kuzguncuk mah, vatan koru 1 sokak 2/A, 61900 Arsin/Trabzon</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

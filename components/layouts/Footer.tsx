import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";

import FooterIcon from "@/public/static/images/logo/catlogo.png";
import FacebookSvg from "@/public/svg/facebook.svg";
import InstagramSvg from "@/public/svg/instagram.svg";

type Inputs = {
  email: string;
};

export default function Footer() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className="mt-10 bg-gradient-to-b from-yellow-50 via-green-50 to-yellow-100 text-gray-500 font-playfair">
      <div className="py-10 flex justify-center">
        <Image src={FooterIcon} alt="footer-icon" width={200} height={203} />
      </div>
      <ul className="flex justify-evenly text-lg sm:text-2xl border-t-2 border-b-2 border-green-400 border-opacity-30 py-4">
        <li>
          <Link passHref href="/">
            <a>Anasayfa</a>
          </Link>
        </li>
        <li>
          <Link passHref href="/">
            <a>Blog</a>
          </Link>
        </li>
        <li>
          <Link passHref href="/">
            <a>Tarifler</a>
          </Link>
        </li>
        <li>
          <Link passHref href="/">
            <a>Hakkımızda</a>
          </Link>
        </li>
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
      <div>
        <h3 className="text-center py-2 text-2xl sm:text-3xl">
          Bizi Takipte Kalın.
        </h3>
        <form
          className="max-w-2xl p-3 mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col sm:flex-row">
            <input
              className="py-3 px-5 w-full rounded text-gray-700 border border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-900 focus:border-transparent"
              type="text"
              placeholder="Email adresinizi girin"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />
            <input
              className="button-active-effect mt-5 sm:mt-0 sm:ml-5 py-3 px-7 rounded bg-yellow-600 text-yellow-50 cursor-pointer"
              value="Takip Et"
              type="submit"
            />
          </div>
          {errors.email && (
            <span className="mt-4 block text-red-500">
              Lütfen email adresinizi doğru girin.
            </span>
          )}
        </form>
      </div>
      <ul className="p-2 mt-5 flex flex-col items-center font-mono text-lg smtext-2xl">
        <li>
          <ul className="flex flex-col">
            <li className="p-2 flex justify-center font-serif font-semibold items-center">
              <div className="p-1">Telefon</div>
              <div className="p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-yellow-600"
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
            <li className="p-2 flex justify-center font-serif font-semibold items-center">
              <div className="p-1">Adres</div>
              <div className="p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-yellow-600"
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

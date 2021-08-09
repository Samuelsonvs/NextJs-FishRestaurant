import React, { Fragment, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Transition } from "@headlessui/react";

import { ThemeController } from "@/interfaces/interface";
import SvgCreator from "@/components/SvgCreator";
import Logo from "@/public/images/logo/orange1.png";

const navList = [
  { name: "Anasayfa", route: "/" },
  { name: "Tarifler", route: "/tarifler" },
  { name: "Blog", route: "/blog" },
  { name: "Hakkımızda", route: "/hakkımızda" },
];

export default function Navbar({ mounted }: ThemeController): JSX.Element {
  const [isShowing, setIsShowing] = useState(false);
  return (
    <header className="sticky top-0 z-20 font-playfair bg-yellow-100 bg-opacity-50 transition ease-in backdrop-filter backdrop-blur-lg backdrop-saturate-150 mx-auto">
      <nav
        className={`bg-white ${
          !isShowing ? " bg-opacity-50" : ""
        } flex sm:items-center justify-center sm:justify-evenly py-2`}
      >
        <div className="hidden sm:block mt-5 sm:mt-0">
          <ul className="flex text-yellow-600">
            <li className="button-active-effect">
              <Link href={navList[0].route} passHref scroll={false}>
                <a className="hover:bg-gray-100 focus:bg-gray-100 px-3 py-2 rounded-md text-2xl font-semibold">
                  {navList[0].name}
                </a>
              </Link>
            </li>
            <li className="button-active-effect">
              <Link href={navList[1].route} passHref scroll={false}>
                <a className="hover:bg-gray-100 focus:bg-gray-100 px-3 py-2 rounded-md text-2xl font-semibold">
                  {navList[1].name}
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <Image src={Logo} width={130} height={61} alt={"Site-logo"} />
        </div>
        <div className="hidden sm:block mt-5 sm:mt-0">
          <ul className="flex text-yellow-600">
            <li className="button-active-effect">
              <Link href={navList[2].route} passHref scroll={false}>
                <a className="hover:bg-gray-100 focus:bg-gray-100 px-3 py-2 rounded-md text-2xl font-semibold">
                  {navList[2].name}
                </a>
              </Link>
            </li>
            <li className="button-active-effect">
              <Link href={navList[3].route} passHref scroll={false}>
                <a className="hover:bg-gray-100  focus:bg-gray-100 px-3 py-2 rounded-md text-2xl font-semibold">
                  {navList[3].name}
                </a>
              </Link>
            </li>
          </ul>
        </div>
        {/* mobile  */}
        <div className="sm:hidden">
          <button
            className="absolute top-2 right-2 z-20"
            aria-label="Mobile Button"
            onClick={() => setIsShowing((isShowing) => !isShowing)}
          >
            {mounted &&
              (isShowing ? (
                <SvgCreator>
                  <path
                    strokeWidth="0"
                    fillRule="evenodd"
                    fill="#797968"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </SvgCreator>
              ) : (
                <SvgCreator>
                  <path
                    strokeWidth="0"
                    fillRule="evenodd"
                    fill="#797968"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </SvgCreator>
              ))}
          </button>
          <Transition
            className="absolute top-0 right-0 left-0 -bottom-10 rounded-md bg-yellow-100"
            show={isShowing}
            enter="transition-opacity duration-150"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <ul className="h-full flex justify-evenly items-center shadow-2xl">
              {navList.map((item) => (
                <li key={item.name}>
                  <Link href={item.route} passHref scroll={false}>
                    <a className="hover:bg-gray-100 focus:bg-gray-100  px-3 py-2 rounded-md text-sm font-medium">
                      {item.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </Transition>
        </div>
        {/* mobile finish  */}
      </nav>
    </header>
  );
}

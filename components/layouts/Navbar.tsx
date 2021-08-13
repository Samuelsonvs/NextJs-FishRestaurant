import React, { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Transition } from "@headlessui/react";

import { ThemeController } from "@/interfaces/interface";
import SvgCreator from "@/components/SvgCreator";
import Logo from "@/public/images/logo/orange2.png";

const navList = [
  { name: "Anasayfa", route: "/" },
  { name: "Tarifler", route: "/tarifler" },
  { name: "Blog", route: "/blog" },
  { name: "Hakkımızda", route: "/hakkımızda" },
];

export default function Navbar({ mounted }: ThemeController): JSX.Element {
  const [isShowing, setIsShowing] = useState(false);
  const [navListColor, setNavListColor] = useState("text-gray-200");

  const [navbarChange, setNavbarChange] = useState(false);

  useEffect(() => {
    const changeNavbar = () => {
      if (window.scrollY >= 100) {
        setNavbarChange(true);
        setNavListColor("text-gray-600");
      } else {
        setNavbarChange(false);
        setNavListColor("text-gray-200");
      }
    };
    window.addEventListener("scroll", changeNavbar);
    return () => removeEventListener("scroll", changeNavbar);
  }, []);
  return (
    <header
      className={`sticky ${
        navbarChange ? "" : "sm:h-20"
      } bg-yellow-50 transform duration-200 top-0 z-20 font-playfair bg-opacity-50 transition ease-in backdrop-filter backdrop-blur-lg backdrop-saturate-150 mx-auto`}
    >
      <nav
        className={`flex flex-row ${
          navbarChange
            ? "sm:justify-between items-center"
            : "sm:justify-evenly sm:flex-col sm:items-center"
        }  justify-center py-2`}
      >
        <div className="hidden sm:block">
          <Image src={Logo} width={300} height={115} alt={"Site-logo"} />
        </div>
        <div className="block sm:hidden">
          <Image src={Logo} width={200} height={77} alt={"Site-logo"} />
        </div>
        <div className="hidden sm:block mt-7 sm:mb-14 w-full">
          <ul className={`flex ${navListColor} justify-evenly`}>
            {navList.map((item, idx) => {
              return (
                <li key={idx} className="button-active-effect">
                  <Link href={item.route} passHref scroll={false}>
                    <a className="hover:bg-gray-100 focus:bg-gray-100 transition ease-in-out duration-200 hover:text-yellow-600 px-3 py-2 rounded-md text-2xl">
                      {item.name}
                    </a>
                  </Link>
                </li>
              );
            })}
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
            className="absolute top-24 right-0 left-0 -bottom-40 rounded-md bg-yellow-50"
            show={isShowing}
            enter="transition-opacity duration-150"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <ul className="h-full flex justify-evenly items-center">
              {navList.map((item) => (
                <li key={item.name}>
                  <Link href={item.route} passHref scroll={false}>
                    <a className="hover:bg-gray-100 focus:bg-gray-100  px-3 py-2 rounded-md text-sm sx:text-lg font-medium">
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

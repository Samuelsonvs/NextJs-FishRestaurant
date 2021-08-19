import { useState } from "react";
import { Tab, Transition } from "@headlessui/react";
import Image from "next/image";

import categories from "@/data/menuDatas.json";
import MenuWindowOpener from "./MenuWindowOpener";
import MenuImage from "@/public/static/images/content/hamsiyePlate.png";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function MenuTab() {
  const [activeTabNum, setActiveTabNum] = useState(0);
  const [lightboxData, setLightboxData] = useState({
    bigImage: "",
    explanation: "",
    title: "",
  });
  const [isOpen, setIsOpen] = useState(false);

  const dialogHandler = (
    bigImage: string,
    explanation: string,
    title: string
  ) => {
    setIsOpen(true);
    setLightboxData({
      bigImage: bigImage,
      explanation: explanation,
      title: title,
    });
  };

  return (
    <>
      <div className="flex flex-col items-center mt-10">
        <div className="flex justify-center">
          <Image
            width={250}
            height={270}
            src={MenuImage}
            alt="hamsiye-tabak"
            priority
          />
        </div>
        <h3 className="py-10 text-4xl text-center font-playfair text-gray-800">
          Menüyü Keşfet
        </h3>
        <Tab.Group
          onChange={(index) => {
            setActiveTabNum(index);
          }}
        >
          <Tab.List className="flex p-1 space-x-1 rounded-xl">
            {Object.keys(categories).map((category) => {
              return (
                <Tab
                  key={category}
                  className={({ selected }) =>
                    classNames(
                      "px-5 py-2 sx:px-8 text-sm sm:text-xl leading-5 font-medium rounded-lg transition ease-out duration-200",
                      "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-yellow-500 ring-yellow-200 ring-opacity-60",
                      selected
                        ? "bg-white text-yellow-500 shadow"
                        : "text-gray-500 hover:text-yellow-500"
                    )
                  }
                >
                  {category}
                </Tab>
              );
            })}
          </Tab.List>
          <Tab.Panels className="mt-2 w-full">
            {Object.values(categories).map((posts, idx) => (
              <Transition
                key={idx}
                show={idx === activeTabNum ? true : false}
                enter="transform transition duration-300 ease-in"
                enterFrom="opacity-0 scale-90"
                enterTo="opacity-100 scale-100"
                leave="transform transition duration-300 ease-out"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-90"
              >
                <Tab.Panel
                  key={idx}
                  static
                  className={classNames(
                    "rounded-xl mt-10 p-3 transition duration-500 ease-in-out",
                    "focus:outline-none"
                  )}
                >
                  <ul className="w-full grid justify-items-center grid-flow-row sm:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post) => (
                      <li
                        key={post.id}
                        className="block pb-10 pt-10 mt-10 w-60 rounded-md hover:bg-coolGray-100"
                      >
                        <div className="border-2 hover:bg-yellow-200 transition duration-300 ease-in-out border-yellow-200 border-opacity-60">
                          <button
                            onClick={() =>
                              dialogHandler(
                                post.bigImage,
                                post.longExplanation,
                                post.title
                              )
                            }
                            className="relative cursor-pointer -mt-20 mx-auto block overflow-hidden rounded-full w-40 h-40"
                          >
                            <Image
                              layout="fill"
                              src={post.thumbImage}
                              alt="images"
                              priority
                            />
                          </button>
                          <h3 className="p-2 mt-3 text-2xl text-center text-gray-800 font-playfair font-semibold leading-5">
                            {post.title}
                          </h3>
                          <ul className="mt-1 p-2 px-5 text-center space-x-1 leading-7">
                            <li>{post.shortExplanation}</li>
                            <li className="mt-5 font-serif font-semibold">
                              {post.price}
                            </li>
                          </ul>
                        </div>
                      </li>
                    ))}
                  </ul>
                </Tab.Panel>
              </Transition>
            ))}
          </Tab.Panels>
        </Tab.Group>
        <MenuWindowOpener
          isOpen={isOpen}
          lightboxData={lightboxData}
          setIsOpen={setIsOpen}
        />
      </div>
    </>
  );
}

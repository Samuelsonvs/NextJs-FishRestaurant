import { useState } from "react";
import { Tab } from "@headlessui/react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";

import MenuImage from "@/public/images/content/hamsiyePlate.png";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function HeadlessUiTab() {
  const [activeTabNum, setActiveTabNum] = useState(0);
  const [categories] = useState({
    Recent: [
      {
        id: 1,
        title: "Wedge Salad",
        content: "Phasellus pulvinar fringilla sapien eu maximus...",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: "2h ago",
        commentCount: 3,
        shareCount: 2,
      },
    ],
    Popular: [
      {
        id: 1,
        title: "Is tech making coffee better or worse?",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title:
          "The most innovative things happening in coffeeThe most innovative things happening in coffee.",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
    ],
    Trending: [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: "4d ago",
        commentCount: 1,
        shareCount: 2,
      },
    ],
  });

  return (
    <div className="flex flex-col items-center mt-10">
      <Tab.Group
        onChange={(index) => {
          setActiveTabNum(index);
        }}
      >
        <Tab.List className="flex p-1 space-x-1 rounded-xl">
          {Object.keys(categories).map((category) => {
            console.log(category);
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
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Transition
              key={idx}
              show={idx === activeTabNum ? true : false}
              enter="transform transition duration-500 ease-in"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transition transform duration-75 ease-out"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Tab.Panel
                static
                className={classNames(
                  "rounded-xl mt-10 p-3 transition duration-500 ease-in-out",
                  "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60"
                )}
              >
                <ul className="flex flex-col sm:flex-row">
                  {posts.map((post) => (
                    <li
                      key={post.id}
                      className="block p-3 rounded-md hover:bg-coolGray-100"
                    >
                      <div className="border border-black">
                        <Link href="/" passHref>
                          <a className="-mt-20 mx-auto block border overflow-hidden rounded-full w-40 h-40">
                            <Image
                              layout="fixed"
                              src={MenuImage}
                              alt="images"
                              width={165}
                              height={165}
                            />
                          </a>
                        </Link>
                        <h3 className="text-sm font-medium leading-5">
                          {post.title}
                        </h3>
                        <ul className="flex mt-1 space-x-1 text-xs font-normal leading-4 text-coolGray-500">
                          <li>{post.date}</li>
                          <li>&middot;</li>
                          <li>{post.commentCount} comments</li>
                          <li>&middot;</li>
                          <li>{post.shareCount} shares</li>
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
    </div>
  );
}

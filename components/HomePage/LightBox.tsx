import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Image from "next/image";

import SvgCreator from "../SvgCreator";
import { LightBoxConstant } from "@/interfaces/interface";
import MenuBigItem1 from "@/public/images/menu/foodbig1.png";

export default function LightBox({
  isOpen,
  setIsOpen,
  lightboxData,
}: LightBoxConstant) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-30 transition duration-200 ease-in bg-opacity-30 bg-gray-700 overflow-y-auto"
        onClose={() => setIsOpen(false)}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-yellow-50 shadow-xl rounded-2xl">
              <div className="relative">
                <div className="absolute top-1 right-0 ">
                  <button
                    type="button"
                    className="button-active-effect"
                    onClick={() => setIsOpen(false)}
                  >
                    <SvgCreator>
                      <path
                        strokeWidth="0"
                        fillRule="evenodd"
                        fill="#797968"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </SvgCreator>
                  </button>
                </div>
                <Dialog.Title
                  as="h3"
                  className="text-2xl font-playfair text-center leading-6 text-gray-600"
                >
                  {lightboxData.title}
                </Dialog.Title>
              </div>
              <div className="mt-10">
                <Image
                  src={lightboxData.bigImage}
                  alt="big-food-image"
                  width={568}
                  height={624}
                />
              </div>
              <div className="mt-5">{lightboxData.explanation}</div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}

import React from "react";
import Image from "next/image";

import WelcomeImage from "@/public/static/images/content/welcome.jpg";

export default function Welcome() {
  return (
    <section className="mt-5 sm:mt-10 p-5 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start">
        <div className="flex-shrink-0">
          <Image
            width={480}
            height={640}
            placeholder="blur"
            src={WelcomeImage}
            alt="welcome-img"
          />
        </div>
        <div className="ml-5 mt-10 md:mt-0 text-gray-800">
          <h3 className="text-4xl text-center font-playfair">
            Hamsiye
            <br />
            Balık Restorant
            <br /> &amp; <br /> Cafe&lsquo;ye <br />{" "}
            <span className="text-yellow-700">Hoşgeldiniz</span>
          </h3>
          <p className="leading-8 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            nulla ipsum, sagittis quis orci vel, bibendum cursus velit. Aenean
            lorem nisi, cursus eu lorem in, feugiat imperdiet neque. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Fusce metus nibh, rhoncus id accumsan ac,
            interdum et mauris. Quisque nunc ipsum, mollis quis pellentesque in,
            dignissim id dolor. Phasellus magna mi, mollis ac dui sit amet,
            consectetur sagittis ipsum.
          </p>
        </div>
      </div>
    </section>
  );
}

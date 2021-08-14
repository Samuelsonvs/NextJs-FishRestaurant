import React from 'react';

import MenuSvgIconCreator from './MenuSvgIconCreator';
import ServingDish from "@/public/svg/ServingDish.svg";
import ChefHat from "@/public/svg/chefHat.svg";

export default function MenuSvgIcon() {
    return (
      <div className="mt-10 p-5 max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-center mt-0 sm:mt-10">
            <MenuSvgIconCreator
              svg={ChefHat}
              head={"Şefin Spesiyali"}
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing ac pellentesque imperdiet"
              }
              aText={"Daha Fazlası"}
              href={"/blog"}
              alt={"şef-şapkası"}
            />
            <MenuSvgIconCreator
              svg={ServingDish}
              head={"Yiyecek & İçecekler"}
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing ac pellentesque imperdiet"
              }
              aText={"Menüyü Keşfet"}
              href={"/blog"}
              alt={"Tepsi"}
            />
          </div>
          </div>
    )
}

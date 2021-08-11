import Image from "next/image";
import Link from "next/link";

import Container from "@/container/Container";
import ReactSlick from "@/components/HomePage/ReactSlick";
import HeadlessUiTab from "@/components/HomePage/HeadlessUiTab";
import Welcome from "@/public/images/content/welcome.png";
import MenuImage from "@/public/images/content/hamsiyePlate.png";
import MenuSvgIconContents from "@/components/HomePage/MenuSvgIconContents";
import ServingDish from "@/public/svg/ServingDish.svg";
import ChefHat from "@/public/svg/chefHat.svg";

export default function Home() {
  return (
    <Container>
      <>
        <ReactSlick />
        <div className="mt-10 p-5 max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center mt-0 sm:mt-10">
            <MenuSvgIconContents
              svg={ChefHat}
              head={"Şefin Spesiyali"}
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing ac pellentesque imperdiet"
              }
              aText={"Daha Fazlası"}
              href={"/blog"}
              alt={"şef-şapkası"}
            />
            <MenuSvgIconContents
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
          <div className="mt-40 flex flex-col md:flex-row justify-center items-center md:items-start">
            <div className="flex-shrink-0">
              <Image width={480} height={640} src={Welcome} alt="welcome-img" />
            </div>
            <div className="ml-5 mt-10 md:mt-0">
              <h3 className="text-4xl text-center font-playfair">
                Hamsiye
                <br />
                Balık Restorant
                <br /> &amp; <br /> Cafe&lsquo;ye <br />{" "}
                <span className="text-yellow-700">Hoşgeldiniz</span>
              </h3>
              <p className="leading-8 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum nulla ipsum, sagittis quis orci vel, bibendum cursus
                velit. Aenean lorem nisi, cursus eu lorem in, feugiat imperdiet
                neque. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos. Fusce metus nibh,
                rhoncus id accumsan ac, interdum et mauris. Quisque nunc ipsum,
                mollis quis pellentesque in, dignissim id dolor. Phasellus magna
                mi, mollis ac dui sit amet, consectetur sagittis ipsum.
              </p>
            </div>
          </div>
          <div className="mt-20">
            <div className="flex justify-center">
              <Image
                width={250}
                height={270}
                src={MenuImage}
                alt="hamsiye-tabak"
              />
            </div>
            <div>
              <h3 className="mt-10 text-4xl text-center font-playfair">
                Menüyü Keşfet
              </h3>
              <HeadlessUiTab />
            </div>
          </div>
        </div>
        <div className="px-7 mx-auto mt-10">
          <div className="leading-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            nulla ipsum, sagittis quis orci vel, bibendum cursus velit. Aenean
            lorem nisi, cursus eu lorem in, feugiat imperdiet neque. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Fusce metus nibh, rhoncus id accumsan ac,
            interdum et mauris. Quisque nunc ipsum, mollis quis pellentesque in,
            dignissim id dolor. Phasellus magna mi, mollis ac dui sit amet,
            consectetur sagittis ipsum. Sed auctor lectus in ex rutrum, quis
            cursus velit pretium. Ut quis dictum erat, quis pellentesque mi.
            Quisque auctor accumsan sapien, tempor pulvinar mi vulputate sit
            amet. Vestibulum a iaculis libero. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Etiam a
            magna ullamcorper ex mattis consectetur. Mauris vel consectetur
            massa. Pellentesque pulvinar ipsum et elementum egestas. Sed
            placerat accumsan blandit.
          </div>
        </div>
      </>
    </Container>
  );
}

{
  /* <div className="flex flex-col sm:flex-row items-center justify-center">
<MenuSvgIcons
  svgHead={ServingDish}
  svgArrow={Arrow}
  head={"Şefin Spesiyali"}
  text={"Lorem ipsum dolor sit amet, consectetur adipiscing ac pellentesque imperdiet"}
  href={"/blog"}
  alt={"alt"}
/>
<MenuSvgIcons
  svgHead={ServingDish}
  svgArrow={Arrow}
  head={"Yiyecek & İçecekler"}
  text={"Lorem ipsum dolor sit amet, consectetur adipiscing ac pellentesque imperdiet"}
  href={"/blog"}
  alt={"Tepsi"}
/>
</div> */
}

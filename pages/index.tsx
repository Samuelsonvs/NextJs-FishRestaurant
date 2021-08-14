import Image from "next/image";

import Container from "@/container/Container";
import ReactSlick from "@/components/HomePage/ReactSlick";
import FacebookGoogleSlick from "@/components/HomePage/FacebookGoogleSlick";
import HeadlessUiTab from "@/components/HomePage/HeadlessUiTab";
import MenuImage from "@/public/images/content/hamsiyePlate.png";
import BgImageBox from "@/components/HomePage/BgImageBox";
import Welcome from "@/components/HomePage/Welcome";
import Gallery from "@/components/HomePage/Gallery";
import BgCatFishEyes from "@/components/HomePage/BgCatFishEyes";
import GoogleMap from "@/components/HomePage/GoogleMap";
import MenuSvgIcon from "@/components/HomePage/MenuSvgIcon";

export default function Home() {
  return (
    <Container>
      <>
        <ReactSlick />
        <MenuSvgIcon/>
        <BgCatFishEyes />
        <Welcome />
        <div className="mt-10 p-5 max-w-5xl mx-auto">
          <div className="mt-20">
            <div className="flex justify-center">
              <Image
                width={250}
                height={270}
                src={MenuImage}
                alt="hamsiye-tabak"
                priority
              />
            </div>
          </div>
        </div>
        <HeadlessUiTab />
        {/* <BgImageBox /> */}
        <FacebookGoogleSlick />
        <Gallery />
        <GoogleMap />
      </>
    </Container>
  );
}

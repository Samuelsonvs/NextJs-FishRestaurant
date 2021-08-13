import { SRLWrapper } from "simple-react-lightbox";
import SimpleReactLightbox from "simple-react-lightbox";
import Image from "next/image";

import Gallery1 from "@/public/images/gallery/gallery_1.jpg";
import Gallery2 from "@/public/images/gallery/gallery_2.jpg";
import Gallery3 from "@/public/images/gallery/gallery_3.jpg";
import Gallery4 from "@/public/images/gallery/gallery_4.jpg";
import Gallery5 from "@/public/images/gallery/gallery_5.jpg";
import Gallery6 from "@/public/images/gallery/gallery_6.jpg";

const thumbImages = [
  Gallery1,
  Gallery2,
  Gallery3,
  Gallery4,
  Gallery5,
  Gallery6,
];

const options = {
  buttons: {
    backgroundColor: "rgba(30,30,36,0.8)",
    iconColor: "rgba(255, 255, 255, 0.8)",
    iconPadding: "10px",
    showAutoplayButton: true,
    showCloseButton: true,
    showDownloadButton: false,
    showFullscreenButton: true,
    showNextButton: true,
    showPrevButton: true,
    showThumbnailsButton: false,
    size: "40px",
  },
};

export default function Galery() {
  return (
    <div className="mt-5 sm:mt-20">
      <SimpleReactLightbox>
        <SRLWrapper options={options}>
          <div className="w-full grid gap-5 justify-items-center grid-flow-col grid-rows-6 sm:grid-rows-3 lg:grid-rows-2">
            {thumbImages.map((src, idx) => {
              return (
                <div key={idx} className="cursor-pointer">
                  <Image
                    className="transform transition duration-300 ease-in-out hover:scale-110"
                    src={src}
                    width={450}
                    height={338}
                    placeholder="blur"
                    alt="Gallery Images"
                  />
                </div>
              );
            })}
          </div>
        </SRLWrapper>
      </SimpleReactLightbox>
    </div>
  );
}

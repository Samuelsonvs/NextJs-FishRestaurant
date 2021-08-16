import { SRLWrapper } from "simple-react-lightbox";
import SimpleReactLightbox from "simple-react-lightbox";
import Image from "next/image";

import GalleryImages from "@/data/GalleryImages.json"

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
            {GalleryImages.map((src, idx) => {
              return (
                <div key={idx} className="cursor-pointer">
                  <Image
                    className="transform transition duration-300 ease-in-out hover:scale-110"
                    src={src.src}
                    width={450}
                    height={338}
                    alt="Gallery Images"
                    placeholder="empty"
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

import Image from "next/image";

import Container from "@/container/Container";
import ReactSlick from "@/components/ReactSlick";
import Welcome from "@/public/images/content/welcome.png";

export default function Home() {
  return (
    <Container>
      <>
        <ReactSlick />
        <div className="mt-10 p-5 flex flex-col md:flex-row justify-center items-center md:items-start max-w-5xl mx-auto">
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
              neque. Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Fusce metus nibh, rhoncus id
              accumsan ac, interdum et mauris. Quisque nunc ipsum, mollis quis
              pellentesque in, dignissim id dolor. Phasellus magna mi, mollis ac
              dui sit amet, consectetur sagittis ipsum.
            </p>
          </div>
        </div>
        <div className="px-7 mx-auto">
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

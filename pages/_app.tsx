import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default MyApp;

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

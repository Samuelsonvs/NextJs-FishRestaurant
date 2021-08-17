import "../styles/globals.css";
import type { AppProps } from "next/app";
import { WidthContextProvider } from "@/context/widthCondition";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WidthContextProvider>
      <Component {...pageProps} />
    </WidthContextProvider>
  );
}
export default MyApp;

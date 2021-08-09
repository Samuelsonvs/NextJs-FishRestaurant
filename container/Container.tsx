import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Navbar from "@/components/layouts/Navbar";
import { ContainerProps } from "@/interfaces/interface";
// import Footer from "@/components/layouts/Footer";

export default function Container({
  children,
  customTitle,
}: ContainerProps): JSX.Element {
  const [mounted, setMounted] = useState(false);

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  const router = useRouter();
  const meta = {
    title: customTitle ? customTitle : "Hamsiye Balik – Balık, Yemek.",
    description: `Restorant, Balık Yemekleri.`,
    image: "",
    type: "website",
    date: "02.02.02",
  };

  return (
    <div className="font-sans">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://msatali.com${router.asPath}`}
        />
        <link rel="canonical" href={`https://msatali.com${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Mert Samet" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <Navbar mounted={mounted} />

      <main className="max-w-screen-3xl mx-auto bg-yellow-100">{children}</main>
      <footer>{/* <Footer /> */}</footer>
    </div>
  );
}

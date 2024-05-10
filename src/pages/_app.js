import "@/styles/globals.css";
import { Montserrat, Space_Grotesk } from "next/font/google";
import Head from "next/head";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

import { Analytics } from "@vercel/analytics/react";

import OgImage from "../../public/OgImage.png";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name=" robots" content=" index, follow"></meta>
        <link rel="canonical" href="http://deveshlashkari.dev/" />
        <meta property="og:title" content="Devesh Lashkari | Portfolio" />
        <meta
          property="og:description"
          content="Hello, Welcome to my portfolio website. Let's connect!!!"
        />
        <meta property="og:image" content={OgImage} />
        <meta property="og:url" content="https://deveshlashkari.dev" />
        <meta property="og:site_name" content="Devesh Lashkari | Portfolio" />
      </Head>
      <main
        className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}
      >
        <Navbar />
        <AnimatePresence mode="wait">
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
        <Footer />
        <Analytics />
      </main>
    </>
  );
}

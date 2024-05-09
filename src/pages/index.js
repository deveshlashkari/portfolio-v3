import Head from "next/head";
import { Inter } from "next/font/google";
import Link from "next/link";

import Layout from "@/components/Layout";
import Image from "next/image";

import ProfilePicture from "../../public/images/profile/developer-pic-1.png";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Devesh Lashkari</title>
        <meta name="description" content="Portfolio - Devesh Lashkari" />
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-center w-full">
            {/* <div className="w-1/2">
              <Image
                src={ProfilePicture}
                alt="deveshlashkari"
                className="w-full h-auto"
              />
            </div> */}
            <div className="flex flex-col items-center self-center">
              <AnimatedText
                text="Devesh Lashkari"
                className=" xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-8 text-2xl font-medium sm:text-center sm:text-xl ">
                Developer | Gamer | Traveller
              </p>
              <div className="flex items-center self-center mt-2 py-15">
                <Link
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base"
                  href="/Devesh_Resume_2024.pdf"
                  target="_blank"
                >
                  Resume
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}

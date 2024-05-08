import React, { useRef, useEffect } from "react";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";

const AnimatedNumbers = ({ value }) => {
  console.log(value);
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latestValue) => {
      if (ref.current && latestValue.toFixed(0) <= value) {
        ref.current.textContent = latestValue.toFixed(0);
      }
    });
  }, [springValue, value]);

  return (
    <>
      <span ref={ref}>{value}</span>
    </>
  );
};

const about = () => {
  return (
    <>
      <Head>
        <title>Devesh | About</title>
        <meta name="description" content="About Devesh Lashkari" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light ">
        <Layout className="pt-16 px-20">
          <AnimatedText
            text="Exploration ignites progress!"
            className="!text-8xl mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-6 flex flex-col items-start justify-start xl:col-span-12">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                About me!
              </h2>
              <p className="font-medium my-5">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aliquid, reiciendis? Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Aliquid, reiciendis? Lorem, ipsum dolor sit
                amet consectetur adipisicing elit. Aliquid, reiciendis? Lorem,
                ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
                reiciendis? Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Aliquid, reiciendis? Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Aliquid, reiciendis?
              </p>
              <p className="font-medium">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aliquid, reiciendis? Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Aliquid, reiciendis? Lorem, ipsum dolor sit
                amet consectetur adipisicing elit. Aliquid, reiciendis? Lorem,
                ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
                reiciendis? Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Aliquid, reiciendis? Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Aliquid, reiciendis? Lorem, ipsum
                dolor sit amet consectetur adipisicing elit. Aliquid,
                reiciendis?
              </p>
              <p className="font-medium">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aliquid, reiciendis? Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Aliquid, reiciendis? Lorem, ipsum dolor sit
                amet consectetur adipisicing elit. Aliquid, reiciendis? Lorem,
                ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
                reiciendis? Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Aliquid, reiciendis? Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Aliquid, reiciendis? Lorem, ipsum
                dolor sit amet consectetur adipisicing elit. Aliquid,
                reiciendis?
              </p>
              <p className="font-medium">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aliquid, reiciendis? Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Aliquid, reiciendis? Lorem, ipsum dolor sit
                amet consectetur adipisicing elit. Aliquid, reiciendis? Lorem,
                ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
                reiciendis? Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Aliquid, reiciendis? Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Aliquid, reiciendis? Lorem, ipsum
                dolor sit amet consectetur adipisicing elit. Aliquid,
                reiciendis?
              </p>
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between xl:flex-row xl:col-span-12 xl:items-center">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold ">
                  <AnimatedNumbers value={10} />+
                </span>{" "}
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75">
                  satisfied clients
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold ">
                  <AnimatedNumbers value={20} />+
                </span>{" "}
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75">
                  projects completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold ">
                  <AnimatedNumbers value={5} />+
                </span>{" "}
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75">
                  years of experience
                </h2>
              </div>
            </div>
          </div>
          <div className="xs:hidden sm:hidden md:hidden">
            <Skills />
          </div>
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;

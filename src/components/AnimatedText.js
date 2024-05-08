import React from "react";
import { animate, motion, stagger } from "framer-motion";

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const singleWord = {
  initial: {
    y: 200,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const AnimatedText = ({ text, className = "" }) => {
  return (
    <>
      <div className="w-full mx-auto py-2 sm:py-0 flex items-center justify-center text-center overflow-hidden ">
        <motion.h1
          className={`inline-block w-full text-dark font-bold capitalize text-9xl dark:text-light ${className}`}
          variants={quote}
          initial={"initial"}
          animate={"animate"}
        >
          {text.split(" ").map((word, index) => (
            <motion.span
              variants={singleWord}
              className="inline-block"
              key={index}
            >
              {word}&nbsp;
            </motion.span>
          ))}
        </motion.h1>
      </div>
    </>
  );
};

export default AnimatedText;

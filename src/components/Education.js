import React, { useRef } from "react";

import { educationDetails } from "@/config/EducationDetails";

import { useScroll, motion } from "framer-motion";
import ListIcon from "./ListIcon";

const Details = ({
  degree,
  university,
  link,
  duration,
  location,
  information,
}) => {
  const liRef = useRef(null);
  return (
    <>
      <li
        ref={liRef}
        className="my-8 first:mt-0 last:mb-0 w-[70%] flex mx-auto flex-col items-center justify-between"
      >
        <ListIcon reference={liRef} />
        <motion.div
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5, type: "tween" }}
        >
          <h3 className="capitalize font-bold text-2xl ">
            {degree}&nbsp;
            <a target="_blank" className="text-primary capitalize" href={link}>
              @{university}
            </a>
          </h3>
          <span className="capitalize font-medium text-dark/75 ">
            {duration} | {location}
          </span>
          <p className="font-medium w-full">{information}</p>
        </motion.div>
      </li>
    </>
  );
};

const Education = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <>
      <div className="my-64 ">
        <h2 className="font-bold text-8xl mb-32 w-full text-center">
          Education
        </h2>
        <div ref={ref} className="w-[75%] mx-auto relative ">
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
          />

          <ul className="w-full flex flex-col items-start justify-between ml-4">
            {educationDetails.map((work, index) => (
              <Details key={index} {...work} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Education;

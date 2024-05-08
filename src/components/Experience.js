import React, { useRef } from "react";

import { workDetails } from "@/config/WorkDetails";

import { useScroll, motion } from "framer-motion";
import ListIcon from "./ListIcon";

const Details = ({ position, organization, link, time, location, work }) => {
  const liRef = useRef(null);
  return (
    <>
      <li
        ref={liRef}
        className="my-8 first:mt-0 last:mb-0 w-[70%] flex mx-auto flex-col items-center justify-between md:w-[80%]  "
      >
        <ListIcon reference={liRef} />
        <motion.div
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5, type: "tween" }}
        >
          <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg  ">
            {position}&nbsp;
            <a
              target="_blank"
              className="text-primary capitalize dark:text-primaryDark"
              href={link}
            >
              @{organization}
            </a>
          </h3>
          <span className="capitalize font-medium text-dark/75 dark:text-light/75  xs:text-sm">
            {time} | {location}
          </span>
          <p className="font-medium w-full md:text-sm">{work}</p>
        </motion.div>
      </li>
    </>
  );
};

const Experience = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <>
      <div className="my-64 ">
        <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
          Experience
        </h2>
        <div
          ref={ref}
          className="w-[75%] mx-auto relative lg:w-[90%] md:w-full "
        >
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
          />

          <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2 ">
            {workDetails.map((work, index) => (
              <Details key={index} {...work} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Experience;

import React from "react";
import { motion } from "framer-motion";
const skillsList = [
  {
    name: "HTML",
    x: "50vw",
    y: "20vw",
  },
  {
    name: "CSS",
    x: "5vw",
    y: "-10vw",
  },
  {
    name: "JavaScript",
    x: "10vw",
    y: "2vw",
  },
  {
    name: "React",
    x: "10vw",
    y: "-20vw",
  },
  {
    name: "RN",
    x: "-20vw",
    y: "5vw",
  },
  {
    name: "MUI",
    x: "15vw",
    y: "-12vw",
  },
  {
    name: "Tailwind",
    x: "30vw",
    y: "2vw",
  },
  {
    name: "OutSystems",
    x: "0vw",
    y: "6vw",
  },
  {
    name: "Node.js",
    x: "-30vw",
    y: "18vw",
  },
  {
    name: "SQL",
    x: "6vw",
    y: "18vw",
  },
  {
    name: "Firebase",
    x: "-60vw",
    y: "20vw",
  },
  {
    name: "TypeScript",
    x: "-15vw",
    y: "-20vw",
  },
];

const RenderSkill = ({ name, x, y }) => {
  return (
    <>
      <motion.div
        className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer "
        whileHover={{ scale: 1.05 }}
        initial={{ x: 0, y: 0 }}
        whileInView={{ x: x, y: y }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        {name}
      </motion.div>
    </>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute "
          whileHover={{ scale: 1.05 }}
        >
          Tech/Tools
        </motion.div>

        {skillsList.map((skill, index) => (
          <RenderSkill key={index} name={skill.name} x={skill.x} y={skill.y} />
        ))}
      </div>
    </>
  );
};

export default Skills;

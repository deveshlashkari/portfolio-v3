import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

import Logo from "./Logo";
import {
  GithubIcon,
  InstagramIcon,
  LinkedInIcon,
  MoonIcon,
  SunIcon,
  TwitterIcon,
} from "./Icons";
import { links } from "../config/Links";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const CustomLinks = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <>
      <Link className={`${className} relative group`} href={href}>
        {title}
        <span
          className={`h-[1px] inline-block  bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
            router.asPath == href ? "w-full" : "w-0"
          }  dark:bg-light`}
        >
          &nbsp;
        </span>
      </Link>
    </>
  );
};

const CustomLinksMobile = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleRouterClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <>
      <button
        className={`${className} relative group text-light dark:text-dark my-2`}
        onClick={handleRouterClick}
      >
        {title}
        <span
          className={`h-[1px] inline-block  bg-light dark:bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
            router.asPath == href ? "w-full" : "w-0"
          }  dark:bg-light`}
        >
          &nbsp;
        </span>
      </button>
    </>
  );
};

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = React.useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  console.log(mode);
  return (
    <>
      <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8 ">
        <button
          className=" flex-col justify-center items-center hidden lg:flex "
          onClick={handleToggle}
        >
          <span
            className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm -translate-y-0.5 ${
              isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
            }`}
          ></span>
          <span
            className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm m-0.5 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm translate-y-0.5 ${
              isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
            }`}
          ></span>
        </button>
        <div className="w-full flex justify-between items-center lg:hidden">
          <nav>
            <CustomLinks href="/" title="Home" className="mr-4" />
            <CustomLinks href="/about" title="About" className="mx-4" />
            <CustomLinks href="/projects" title="Projects" className="mx-4" />
          </nav>

          <nav className="flex items-center justify-center flex-wrap">
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              href={links.twitter}
              target="_blank"
              className="w-8 mx-3"
            >
              <TwitterIcon />
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              href={links.linkedin}
              target="_blank"
              className="w-8 mx-3"
            >
              <LinkedInIcon />
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              href={links.github}
              target="_blank"
              className="w-8 mx-3 "
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              href={links.instagram}
              target="_blank"
              className="w-8 ml-3"
            >
              <InstagramIcon />
            </motion.a>

            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`ml-3 flex items-center justify-center rounded-full p-1 
            ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark "}
            `}
            >
              {mode === "dark" ? (
                <SunIcon className="fill-dark" />
              ) : (
                <MoonIcon className={"fill-dark"} />
              )}
            </button>
          </nav>
        </div>

        {/* Mobile Menu start */}
        {isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="min-w-[70vw] flex flex-col fixed justify-between items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30
        
        bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md shadow-lg p-8 
        
        "
          >
            <nav className="flex items-center flex-col justify-center">
              <CustomLinksMobile
                href="/"
                title="Home"
                className=""
                toggle={handleToggle}
              />
              <CustomLinksMobile
                href="/about"
                title="About"
                className=""
                toggle={handleToggle}
              />
              <CustomLinksMobile
                href="/projects"
                title="Projects"
                className=""
                toggle={handleToggle}
              />
            </nav>

            <nav className="flex items-center justify-center flex-wrap mt-2  ">
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                href={links.twitter}
                target="_blank"
                className="w-8 mx-3 sm:mx-1"
              >
                <TwitterIcon />
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                href={links.linkedin}
                target="_blank"
                className="w-8 mx-3 sm:mx-1"
              >
                <LinkedInIcon />
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                href={links.github}
                target="_blank"
                className="w-8 mx-3 sm:mx-1 bg-light rounded-full dark:bg-dark"
              >
                <GithubIcon />
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                href={links.instagram}
                target="_blank"
                className="w-8 ml-3 sm:ml-1"
              >
                <InstagramIcon />
              </motion.a>

              <button
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
                className={`ml-3 flex items-center justify-center rounded-full p-1 
            ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark "}
            `}
              >
                {mode === "dark" ? (
                  <SunIcon className="fill-dark" />
                ) : (
                  <MoonIcon className={"fill-dark"} />
                )}
              </button>
            </nav>
          </motion.div>
        )}
        {/* Mobile Menu end */}

        <div className="absolute left-[50%] top-2 translate-x-[-50%]">
          <Logo />
        </div>
      </header>
    </>
  );
};

export default Navbar;

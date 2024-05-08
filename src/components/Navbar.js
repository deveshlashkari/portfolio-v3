import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

import Logo from "./Logo";
import { GithubIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from "./Icons";
import links from "../config/Links";

const CustomLinks = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <>
      <Link className={`${className} relative group`} href={href}>
        {title}
        <span
          className={`h-[1px] inline-block  bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
            router.asPath == href ? "w-full" : "w-0"
          }`}
        >
          &nbsp;
        </span>
      </Link>
    </>
  );
};

const Navbar = () => {
  return (
    <>
      <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
        <nav>
          <CustomLinks href="/" title="Home" className="mr-4" />
          <CustomLinks href="/about" title="About" className="mx-4" />
          <CustomLinks href="/projects" title="Projects" className="mx-4" />
          <CustomLinks href="/contact" title="Contact" className="ml-4" />
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
            className="w-8 mx-3"
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
        </nav>
        <div className="absolute left-[50%] top-2 translate-x-[-50%]">
          <Logo />
        </div>
      </header>
    </>
  );
};

export default Navbar;

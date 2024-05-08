import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:border-light sm:text-base  ">
        <Layout className="py-8 flex items-center justify-between dark:text-light lg:flex-col lg:py-6 ">
          <span>&copy; {new Date().getFullYear()}</span>
          <div className="flex items-center lg:py-2">
            Built with{" "}
            <span className="text-primary text-2xl px-1">&#9825;</span> by&nbsp;
            <Link href="/">Devesh</Link>
          </div>
          <Link
            href="mailto:deveshlashkari25@gmail.com"
            target="_blank"
            className="underline underline-offset-2"
          >
            Say Hello!
          </Link>
        </Layout>
      </footer>
    </>
  );
};

export default Footer;

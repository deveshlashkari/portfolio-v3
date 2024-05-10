import React, { useEffect, useState } from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";

import profilePicture from "../../public/images/projects/crypto-screener-cover-image.jpg";
import TransitionEffect from "@/components/TransitionEffect";

const RenderFeaturedProjects = ({
  type,
  title,
  summary,
  image,
  link,
  githublink,
}) => {
  return (
    <>
      <article className="relative w-full rounded-br-2xl flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
        <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem] " />
        <Link
          href={link}
          target="_blank"
          className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full  "
        >
          <Image src={image} alt={title} className="w-full h-auto" />
        </Link>
        <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6 ">
          <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base  ">
            {type}
          </span>
          <Link href={link} className="hover:underline underline-offset-2">
            <h2 className="my-2 w-full text-left text-4xl font-bold  dark:text-light sm:text-sm  ">
              {title}
            </h2>
          </Link>
          <p className="my-2 font-medium text-dark dark:text-light sm:text-sm  ">
            {summary}
          </p>
          <div className="mt-2 flex items-center ">
            <Link className="w-10" target="_blank" href={githublink}>
              <GithubIcon />
            </Link>
            <Link
              className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base "
              target="_blank"
              href={link}
            >
              Visit Project
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

const RenderProjects = ({ type, title, summary, image, link, githublink }) => {
  return (
    <>
      <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark  dark:border-light xs:p-4 xs:w-[90%]">
        <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark  dark:bg-light md:-right-2 md:w-[101%] sm:h-[102%] xs:rounded-[1.5rem]" />

        <div className="w-full flex flex-col items-start justify-between mt-4 ">
          <span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base ">
            {type}
          </span>
          <div className="w-full  max-w-[85%] ">
            <Link
              href={githublink}
              target="_blank"
              className="hover:underline underline-offset-2   "
            >
              <h2 className="my-2 w-full  sm:max-w-full text-left text-3xl font-bold  lg:text-2xl truncate  ">
                {title}
              </h2>
            </Link>
          </div>
          <p className="my-2 font-medium text-dark dark:text-light sm:text-sm  ">
            {summary}
          </p>
          <div className="w-full mt-2 flex items-center ">
            <Link className="w-8 md:w-6" target="_blank" href={githublink}>
              <GithubIcon />{" "}
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

const Projects = () => {
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/deveshlashkari/repos"
        );
        const data = await response.json();
        const filteredRepos = data.filter(
          (repo) => !repo.fork && !repo.private
        );

        setRepos(filteredRepos);
      } catch (err) {
        console.log(err);
      }
    };
    getData();

    return () => {};
  }, []);

  return (
    <>
      <Head>
        <title>Devesh | Projects</title>
        <meta name="description" content="Devesh Lashkari Projects" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            className=" mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
            text={"Vision fuels determination!"}
          />
          <div className="grid grid-cols-12 gap-12 gap-y-16 xs:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            {repos.length != 0 &&
              repos.map((repo) => {
                return (
                  <>
                    <div className="col-span-4 sm:col-span-12  ">
                      <RenderProjects
                        type={repo.language || "Web Development"}
                        title={repo.name}
                        summary={repo.description || "Hobby Project"}
                        githublink={repo.html_url}
                      />
                    </div>
                  </>
                );
              })}
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;

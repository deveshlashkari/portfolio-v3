import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";

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
      <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12">
        <Link
          href={link}
          target="_blank"
          className="w-1/2 cursor-pointer overflow-hidden rounded-lg "
        >
          <Image src={image} alt={title} className="w-full h-auto" />
        </Link>
        <div className="w-1/2 flex flex-col items-start justify-between pl-6 ">
          <span className="text-primary font-medium text-xl ">{type}</span>
          <Link href={link} className="hover:underline underline-offset-2">
            <h2 className="my-2 w-full text-left text-4xl font-bold  ">
              {title}
            </h2>
          </Link>
          <p className="my-2 font-medium text-dark ">{summary}</p>
          <div className="mt-2 flex items-center ">
            <Link className="w-10" target="_blank" href={githublink}>
              <GithubIcon />
            </Link>
            <Link
              className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold "
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
      <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative ">
        <Link
          href={link}
          target="_blank"
          className="w-full cursor-pointer overflow-hidden rounded-lg "
        >
          <Image src={image} alt={title} className="w-full h-auto" />
        </Link>
        <div className="w-full flex flex-col items-start justify-between pl-6 ">
          <span className="text-primary font-medium text-xl ">{type}</span>
          <Link href={link} className="hover:underline underline-offset-2">
            <h2 className="my-2 w-full text-left text-4xl font-bold  ">
              {title}
            </h2>
          </Link>

          <div className="mt-2 flex items-center ">
            <Link className="w-10" target="_blank" href={githublink}>
              <GithubIcon />
            </Link>
            <Link
              className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold "
              target="_blank"
              href={link}
            >
              Visit
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Devesh | Projects</title>
        <meta name="description" content="Devesh Lashkari Projects" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            className=" mb-16"
            text={"Vision fuels determination!"}
          />
          <div className="grid grid-cols-12 gap-24">
            <div className="col-span-12 ">
              <RenderFeaturedProjects
                type="Web Development"
                title="ABORDER"
                summary="A platform for connecting people with similar interests and hobbies."
                image={""}
                link="https://aborder.vercel.app/"
                githublink="https://aborder.vercel.app/"
              />
            </div>
            <div className="col-span-6 ">
              <RenderProjects
                type="Web Development"
                title="ABORDER"
                summary="A platform for connecting people with similar interests and hobbies."
                image={""}
                link="https://aborder.vercel.app/"
                githublink="https://aborder.vercel.app/"
              />
            </div>
            <div className="col-span-6 ">
              <RenderProjects
                type="Web Development"
                title="ABORDER"
                summary="A platform for connecting people with similar interests and hobbies."
                image={""}
                link="https://aborder.vercel.app/"
                githublink="https://aborder.vercel.app/"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;

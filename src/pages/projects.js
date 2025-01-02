import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import realestateimage from "../../public/images/projects/house.jpeg";
import headphoneimage from "../../public/images/projects/blog.jpg";
import netfliximage from "../../public/images/projects/NSymbol.jpg";
import cousreimage from "../../public/images/projects/topcourseimage2.jpg";
import passwordimage from "../../public/images/projects/passwordGenerator.jpg";
import planimage from "../../public/images/projects/planimage.jpeg";
import TransitionEffect from "@/components/TransitionEffect";

const FeaturedProject = ({ type, title, summary, image, link, github }) => {
  return (
    <article className="w-full flex items-center rounded-3xl rounded-br-2xl border border-solid border-dark bg-light dark:bg-dark dark:border-light drop-shadow-2xl shadow-[8px_8px_0_5px_rgba(27,27,27)] dark:shadow-[8px_8px_0_5px_rgba(245,245,245)] sm:shadow-[5px_5px_0_2px_rgba(27,27,27)] sm:dark:shadow-[5px_5px_0_2px_rgba(245,245,245)]  p-10
             lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">    
      <Link
        href={link}
        target="_blank"
        className=" w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <Image
          src={image}
          alt={title}
          className="w-full h-auto hover:scale-105 transition delay-100 ease-linear "
          priority
          sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw"
        />
      </Link>

      <div className=" w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary dark:text-primaryDark font-medium text-2xl xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold sm:text-lg ">{title}</h2>
        </Link>

        <p className="my-2 font-medium text-dark dark:text-light text-start">
          {summary}
        </p>

        <div className="mt-10 flex items-center ">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light dark:bg-light dark:text-dark px-6 p-2 text-lg font-semibold sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, image, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark dark:border-light drop-shadow-2xl shadow-[8px_8px_0_5px_rgba(27,27,27)] dark:shadow-[8px_8px_0_5px_rgba(245,245,245)] sm:shadow-[5px_5px_0_2px_rgba(27,27,27)] sm:dark:shadow-[5px_5px_0_2px_rgba(245,245,245)] bg-light dark:bg-dark p-6
             xs:p-4">
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image
          src={image}
          alt={title}
          className="w-full h-[300px] lg:h-auto hover:scale-105 transition delay-100 ease-linear"
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base ">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">{title}</h2>
        </Link>

        <div className="mt-2 w-full flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="underline underline-offset-2 text-lg font-medium md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />{" "}
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Ankit Kumar | Projects Page</title>
        <meta name="description" content="project description" />
      </Head>
      <TransitionEffect/>
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16 xs:pt-8">
          <AnimatedText
            text={"Code Meets Design!!"}
            className="!text-center !text-8xl lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 xs:gap-x-0  mt-28 xs:mt-8">
            <div className="col-span-12">
              <FeaturedProject
                title={"Real Estate Application"}
                summary={
                  "This is a Real Estate Application that uses Mongodb, Express, React, Nodejs and firebase to store house images for renting and selling. It shows various properties available for sale or rent, with detailed information and images."
                }
                link={"https://real-estate-mern-04ek.onrender.com/"}
                type={"Featured Project"}
                image={realestateimage}
                github={"https://github.com/Ankit-cd/Real-Estate-Mern"}
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title={"HeadPhones Accessory Website"}
                link={"https://wearthepassion.netlify.app/"}
                type={"Website Design"}
                image={headphoneimage}
                github={"https://github.com/Ankit-cd/headphoneaccesory"}
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title={"Top Course Starter"}
                link={"https://topcoursestarter.netlify.app/"}
                type={"Website Design"}
                image={cousreimage}
                github={"https://github.com/Ankit-cd/topcourseproject"}
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                title={"Netflix Clone Application"}
                summary={
                  "This is a Netflix Clone Application that uses Mongodb, Express, React, Nodejs and The Movie Database to show images and videos for the logged in users, this application has authentication and authorization functionality .It shows detailed information and images for the Movies and Tv shows."
                }
                link={"https://netflix-clone-eby2.onrender.com"}
                type={"Featured Project"}
                image={netfliximage}
                github={"https://github.com/Ankit-cd/netflix-clone"}
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title={"Password Generator"}
                link={"https://spontaneous-lebkuchen-bacbc7.netlify.app"}
                type={"Website Design"}
                image={passwordimage}
                github={"https://github.com/Ankit-cd/passwordgenerator"}
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title={"Plan With Love"}
                link={"https://touristplan.netlify.app/"}
                type={"Website Design"}
                image={planimage}
                github={"https://github.com/Ankit-cd/tourismplan"}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;

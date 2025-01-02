import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  PinterestIcon,
  SunIcon,
  TwitterIcon,
} from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block w-0 absolute left-0 -bottom-0.5 bg-dark dark:bg-light
            ${router.asPath === href ? "w-full" : "w-0"}
            group-hover:w-full transition-[width] ease duration-300
            `}
      >
        &nbsp;
      </span>
    </Link>
  );
};


const CustomMobileLink = ({ href, title, className = "",toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };
  return (
    <button href={href} className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
      {title}
      <span
        className={`h-[1px] inline-block w-0 absolute left-0 -bottom-0.5 bg-light dark:bg-dark
            ${router.asPath === href ? "w-full" : "w-0"}
            group-hover:w-full transition-[width] ease duration-300
            `}
      >
        &nbsp;
      </span>
    </button>
  );
};




const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className="w-full h-full px-32 pt-8 pb-5 font-medium flex items-center justify-between
    dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8"
    >
      <button
        onClick={handleClick}
        className="flex-col justify-center items-center hidden lg:flex"
        aria-label="Open Menu"
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      <div className="flex items-center justify-between w-full lg:hidden">
        <nav>
          <CustomLink href={"/"} title={"Home"} className="mr-6" />
          <CustomLink href={"/about"} title={"About"} className="mx-6" />
          <CustomLink href={"/projects"} title={"Projects"} className="ml-6" />
        </nav>

        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            whileHover={{
              y: -2,
            }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mr-3"
            href={"/"}
            target={"_blank"}
          >
            <TwitterIcon />
          </motion.a>
          <motion.a
            whileHover={{
              y: -2,
            }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
            href={"https://github.com/Ankit-cd"}
            target={"_blank"}
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            whileHover={{
              y: -2,
            }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
            href={"/"}
            target={"_blank"}
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            whileHover={{
              y: -2,
            }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3 bg-light rounded-full"
            href={"/"}
            target={"_blank"}
          >
            <PinterestIcon />
          </motion.a>
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 ml-3"
            href={"/"}
            target={"_blank"}
          >
            <DribbbleIcon />
          </motion.a>

          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ml-6 flex items-center justify-center w-6 rounded-full p-1 bg-dark
        ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </div>

      
      {
        isOpen ? (
          <motion.div
          initial={{ scale: 0 ,opacity: 0,x:"-50%",y:"-50%" }}
          animate={{ scale:1,opacity: 1 }}
           className="min-w-[70vw] flex flex-col items-center justify-between top-1/2 left-1/2 fixed -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/75 rounded-lg p-8 backdrop-blur-md py-32">
        <nav className="flex items-center flex-col justify-center">
          <CustomMobileLink href={"/"} title={"Home"} className="" toggle={handleClick}/>
          <CustomMobileLink href={"/about"} title={"About"} className="" toggle={handleClick}/>
          <CustomMobileLink href={"/projects"} title={"Projects"} className="" toggle={handleClick}/>
        </nav>

        <nav className="flex items-center justify-center flex-wrap mt-2">
          <motion.a
            whileHover={{
              y: -2,
            }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mr-3 sm:mx-1"
            href={"/"}
            target={"_blank"}
          >
            <TwitterIcon />
          </motion.a>
          <motion.a
            whileHover={{
              y: -2,
            }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3 sm:mx-1 bg-light rounded-full dark:bg-dark"
            href={"https://github.com/Ankit-cd"}
            target={"_blank"}
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            whileHover={{
              y: -2,
            }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3 sm:mx-1"
            href={"/"}
            target={"_blank"}
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            whileHover={{
              y: -2,
            }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3 sm:mx-1 bg-light rounded-full"
            href={"/"}
            target={"_blank"}
          >
            <PinterestIcon />
          </motion.a>
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 ml-3 sm:mx-1"
            href={"/"}
            target={"_blank"}
          >
            <DribbbleIcon />
          </motion.a>

          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ml-6 sm:mx-2 flex items-center justify-center w-6 rounded-full p-1 bg-dark
        ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </motion.div>       
      ): null
      }

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;

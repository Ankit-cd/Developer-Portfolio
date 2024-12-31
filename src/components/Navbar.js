import Link from "next/link";
import React from "react";
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

const Navbar = () => {
  const [mode,setMode] = useThemeSwitcher();



  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between
    dark:text-light ">
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
          <PinterestIcon/>
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





        <button onClick={()=>setMode(mode==="light" ? "dark":"light")}
        className={`ml-6 flex items-center justify-center w-6 rounded-full p-1 bg-dark
        ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}>
          {
            mode === "dark" ?
            (<SunIcon className={"fill-dark"}/>):(<MoonIcon className={"fill-dark"}/>)
          }

        </button>
      </nav>

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;

import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  PinterestIcon,
  TwitterIcon,
} from "./Icons";
import { motion } from "framer-motion";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block w-0 absolute left-0 -bottom-0.5 bg-dark
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
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
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
          href={"/"}
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
          className="w-6 mx-3"
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
      </nav>

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;

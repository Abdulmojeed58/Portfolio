import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";

const Nav = () => {
  return (
    <div className="flex justify-between items-center flex-col sm:flex-row">
      <h2 className="text-white font-bold text-3xl z-10">abdulmojeed</h2>

      <div className="text-white flex items-center gap-4 mt-4 sm:mr-8 sm:mt-0 z-10">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/Abdulmojeed58"
        >
          <AiFillGithub className="icon" />
        </a>        
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/abdulmojeed-ayoola-aa4b4b237/"
        >
          <CiLinkedin className="icon" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/Mjay_ayo58"
        >
          <FaTwitter className="icon" />
        </a>
      </div>
    </div>
  );
};

export default Nav;

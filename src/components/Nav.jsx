import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { SiFrontendmentor } from "react-icons/si";
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
        <div>
          <SiFrontendmentor className="icon" />
        </div>
        <div>
          <CiLinkedin className="icon" />
        </div>
        <div>
          <FaTwitter className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Nav;

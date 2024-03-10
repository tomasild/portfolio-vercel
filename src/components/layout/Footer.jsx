import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { PiGearFineBold } from "react-icons/pi";

function Footer() {
  return (
    <div className="flex items-center justify-center h-28 bg-white bg-opacity-60 dark:bg-custom_bg1">
      <div className="text-black dark:text-white text-md text-center space-y-4 relative">
        <p className="font-semibold">
          Desarrollado por{" "}
          <span className="text-primary font-bold">tomas.ild</span>
        </p>
        <div className="flex justify-center space-x-4 items-center h-full">
          <a
            href="https://www.linkedin.com/in/tomaslangerduran/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin
              size="32px"
              className="cursor-pointer focus focus:text-primary active:text-primary bg-black text-white dark:bg-white dark:text-black"
            />
          </a>
          <a
            href="https://github.com/tomasild"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithubSquare
              size="32px"
              className="cursor-pointer  focus:text-primary active:text-primary bg-black text-white dark:bg-white dark:text-black"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;

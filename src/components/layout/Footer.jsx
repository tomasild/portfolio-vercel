import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { PiGearFineBold } from "react-icons/pi";

function Footer() {
  return (
    <div className="flex items-center justify-center h-28">
      <div className="text-white text-md text-center space-y-4 relative">
        <p>
          Desarrollado por{" "}
          <span className="text-primary font-semibold">tomas.ild</span>
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
              className="cursor-pointer focus text-white hover:text-primary"
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
              className="cursor-pointer text-white hover:text-primary"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;

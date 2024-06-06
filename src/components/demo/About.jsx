import React from "react";
import Profile from "/profile.webp";
import { Link } from "react-router-dom";
import ThemeToggle from "@/components/demo/ThemeToggle";
import { Button } from "@/components/ui/button";
import { IoNewspaper } from "react-icons/io5";
import { LuFileSymlink } from "react-icons/lu";
import CV from "/cv-tomasild.pdf";
import duck from "../../../public/duck.svg"

const accent =
  "text-primary-foreground bg-primary px-1 mx-1 rounded-md dark:text-primary dark:bg-transparent dark:px-0";

function About() {
  return (
    <article className="w-full">
      <section className="w-full flex-col md:block lg:flex xl:flex px-4 pt-2 lg:pt-3 xl:pt-4">
        <h1 className="text-base sm:text-xl md:text-xl lg:text-xl xl:text-xl 2xl:text-2xl font-bold text-primary"><span className="text-black dark:text-white" >Bienvenido, soy</span> Tomás Langer Durán</h1>
        <p className="text-base sm:text-xl md:text-xl lg:text-xl xl:text-xl 2xl:text-2xl py-4 text-pretty font-thin text-gray-300">
          Desarrollador Frontend de Chile, me especializo en crear proyectos web modernos, accesibles y visualmente atractivos. Me apasiona la tecnología y estoy comprometido con la mejora continua.
          <br /> Presiona abajo si quieres saber más
        </p>
      </section>
      <section className="flex px-4 pb-4 md:mt-0 lg:mt-10 xl:mt-14 space-x-2">
        <a
          href={CV}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full"
        >
          <Button
            variant="secondary"
            className="w-full text-white bg-accent hover:bg-primary text-base"
          >
            <LuFileSymlink className="mr-2 w-5 h-5 font-bold" /> Abrir CV
          </Button>
        </a>
        <Link
          to="/aboutOpen"
          className="w-full"
          aria-label="Saber más sobre mí"
          role="link"
          tabIndex="0"
        >
          <Button
            variant="secondary"
            className="w-full bg-accent text-white hover:bg-primary dark:bg-secondary dark:hover:bg-primary text-base"
          >
            <IoNewspaper className="mr-2" size={20} />
            Más sobre mí
          </Button>
        </Link>
        <div className="flex-1 hidden sm:flex lg:flex md:flex">
          <ThemeToggle />
        </div>
      </section>
    </article>
  );
}

export default About;


{/* <img
          src={Profile}
          alt="Tomás Langer - Desarrollador Web"
          className="rounded-xl w-1/2 h-1/2 md:w-1/3 md:h-1/3 lg:w-14 lg:h-14 xl:w-24 xl:h-24 mb-4 lg:mb-2 mx-auto"
        /> */}
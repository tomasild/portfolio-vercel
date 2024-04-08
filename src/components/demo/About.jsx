import React from "react";
import Profile from "/profile.webp";
import { Link } from "react-router-dom";
import ThemeToggle from "@/components/demo/ThemeToggle";
import { Button } from "@/components/ui/button";
import { IoNewspaper } from "react-icons/io5";
import { LuFileSymlink } from "react-icons/lu";
import CV from "/cv-tomasild.pdf";

function About() {
  return (
    <article className="w-full">
      <header className="w-full md:block lg:block xl:flex p-4 space-x-4">
        <img
          src={Profile}
          alt="Tomás Langer - Desarrollador Web"
          className="rounded-xl w-44 h-44 lg:w-32 lg:h-32 mb-4 mx-auto"
        />
        <div className="flex flex-col">
          <h1 className="text-lg font-semibold">Hola, soy Tomás</h1>
          <p className="text-sm">
            <strong className="text-primary" g>
              Desarrollador web
            </strong>{" "}
            de Valparaíso, Chile, con
            <strong className="text-primary">
              {" "}
              6 meses de experiencia
            </strong>{" "}
            como
            <strong className="text-primary"> Frontend Developer</strong>.
            Especializandome en
            <strong className="text-primary"> accesibilidad</strong> y creación
            de
            <strong className="text-primary">
              {" "}
              experiencias atractivas
            </strong>{" "}
            para proporcionar una excelente
            <strong className="text-primary"> experiencia al usuario</strong>.
            Combino mi gusto por el desarrollo web con un enfoque auténtico y
            significativo.
          </p>
        </div>
      </header>
      <section className="flex px-4 space-x-2">
          <Link
            to="/aboutOpen"
            className="w-full"
            aria-label="Saber más sobre mi"
            role="link"
            tabIndex="0"
          >
            <Button
              variant="secondary"
              className="w-full bg-accent text-white hover:bg-primary dark:bg-secondary dark:hover:bg-primary"
            >
              <IoNewspaper className="mr-2" size={20} />
              Conoce más sobre mí
            </Button>
          </Link>
          <Button
            variant="secondary"
            className="flex w-full text-white bg-accent hover:bg-primary"
          >
            <a
              href={CV}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <LuFileSymlink className="mr-2 w-5 h-5 font-bold" /> Abrir CV
            </a>
          </Button>
        <ThemeToggle />
      </section>
    </article>
  );
}

export default About;

import React from "react";
import Profile from "/profile.jpg";
import { Link } from "react-router-dom";
import ThemeToggle from "@/components/demo/ThemeToggle";
import { Button } from "@/components/ui/button";
function About() {
  return (
    <div className="w-full">
      <div className="w-full lg:flex p-4 lg:space-x-4">
        <img
          src={Profile} // Reemplaza con la ruta de tu imagen
          alt="Tomás Langer"
          className="rounded-xl w-44 h-44 lg:w-32 lg:h-32 mb-4 mx-auto"
        />
        <div className="flex flex-col">
          <h1 className="text-xl font-semibold">
            Hola, soy <span className="font-bold text-primary">Tomás</span>
          </h1>
          <p className="text-sm  font-semibold dark:font-normal">
            Desarrollador web de Valparaíso, Chile, con 6 meses de experiencia
            en Frontend. Especializado en accesibilidad y creación de
            experiencias atractivas para proporcionar una excelente experiencia
            al usuario. Fusiono mi pasión por el desarrollo web con un enfoque
            auténtico y significativo.
          </p>
        </div>
      </div>
      <div className="flex w-full space-x-2 p-4">
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
            Saber más sobre mi
          </Button>
        </Link>
        <ThemeToggle />
      </div>
    </div>
  );
}

export default About;

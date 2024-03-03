import React from "react";
import Profile from "/profile.jpg";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="text-white w-full">
      <div className="flex flex-col items-center justify-center p-4 pb-0">
        <img
          src={Profile} // Reemplaza con la ruta de tu imagen
          alt="Tomás Langer"
          className="rounded-xl w-36 h-auto lg:w-28 mb-4"
        />
        <h1 className="text-2xl font-semibold">Hola, soy Tomás Langer</h1>
        <p className="text-md text-gray-300">
          Desarrollador web de Valparaíso, Chile. Tengo 6 meses de experiencia
          como Frontend Developer, actualmente especializandome en accesibilidad
          e interesado en el desarrollo mobile y Three.js.
          <Link
            to="/aboutOpen"
            className="cursor-pointer hover:underline font-bold ml-2 text-primary"
            aria-label="Saber más sobre mi" // Añadir un aria-label para describir el propósito del enlace
            role="link" // Asegurar que se identifica como un enlace para tecnologías de asistencia
            tabIndex="0" // Hacer el elemento enfocable mediante el teclado
          >
            Saber más
          </Link>
        </p>
      </div>
    </div>
  );
}

export default About;

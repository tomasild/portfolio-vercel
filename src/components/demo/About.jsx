import React from "react";
import Profile from "/profile.jpg";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center justify-center p-4 pb-0 w-full">
        <img
          src={Profile} // Reemplaza con la ruta de tu imagen
          alt="Tomás Langer"
          className="rounded-xl w-36 h-auto lg:w-28 mb-4"
        />
        <h1 className="text-2xl font-semibold">Hola, soy <span className="font-bold text-primary">Tomás</span></h1>
        <p className="text-sm leading-relaxed">
          Desarrollador web de Valparaíso, Chile. Tengo 6 meses de experiencia
          como Frontend Developer, actualmente especializandome en accesibilidad
          e interesado en el desarrollo mobile y Three.js.
          <Link
            to="/aboutOpen"
            className="cursor-pointer hover:underline font-bold text-primary pl-2"
            aria-label="Saber más sobre mi"
            role="link" 
            tabIndex="0" 
          >
            Saber más sobre mi
          </Link>
        </p>
        </div>
      </div>
  );
}

export default About;

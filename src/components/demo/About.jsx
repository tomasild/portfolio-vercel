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
        <h1 className="text-2xl font-semibold">Hola, soy <span className="font-bold text-primary">Tomás Langer</span></h1>
        <p className="text-md text-gray-300">
          Desarrollador web de Valparaíso, Chile. Tengo 6 meses de experiencia
          como Frontend Developer, actualmente especializandome en accesibilidad
          e interesado en el desarrollo mobile y Three.js.
        </p>
        <div className="self-start w-full"> {/* Ajusta el padding según necesites */}
          <Link
            to="/aboutOpen"
            className="cursor-pointer hover:underline font-bold text-primary"
            aria-label="Saber más sobre mi"
            role="link" 
            tabIndex="0" 
          >
            Saber más
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;

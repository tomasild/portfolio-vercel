import React from "react";
import {
  FaRocket,
  FaTerminal,
  FaCubes,
  FaDesktop,
  FaBook,
} from "react-icons/fa";

const FormacionItem = ({ icon, title, description, details }) => (
  <div className="flex relative pb-6 ">
    <div
      className="flex-shrink-0 w-10 h-10 rounded-md bg-primary inline-flex items-center justify-center text-white text-xl relative"
      aria-hidden="true"
    >
      {icon}
    </div>
    <div className="flex-grow pl-4">
      <h2 className="font-medium text-md mb-1 tracking-wider">{title}</h2>
      <p className="leading-relaxed text-sm ">{description}</p>
      <span className="text-sm">{details}</span>
    </div>
  </div>
);

const Formacion = () => {
  return (
    <section aria-labelledby="formacionTitulo" className="pt-4">
      <h2
        id="formacionTitulo"
        className="text-lg text-white text-center justify-center pb-4 font-semibold"
      >
        Formación
      </h2>
      <div className="px-4">
        <div className="w-full">
          <FormacionItem
            icon={<FaRocket />}
            title="Ingeniería en Marketing"
            description="Instituto profesional DuocUC"
            details="Titulado el año 2017 con distinción"
          />
          <FormacionItem
            icon={<FaTerminal />}
            title="Fullstack Developer"
            description="Certificado del programa One de Oracle Next Education en conjunto con Alura Latam"
            details="14-02-2023"
          />
          <FormacionItem
            icon={<FaDesktop />}
            title="Frontend"
            description="Formandome en la utilizacion de herramientas fundamentales, como empaquetadores, design systems, testing, manejo correcto de APIs, optimización del rendimiento, etc."
            details="Platzi, @fazt, @midudev (En formación)"
          />
          <FormacionItem
            icon={<FaBook />}
            title="Inglés"
            description="Actualmente con clases particulares y complementando con herramientas y apps de aprendizaje."
          />
        </div>
      </div>
    </section>
  );
};

export default Formacion;

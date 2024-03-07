import React from "react";
import {
  FaRocket,
  FaTerminal,
  FaDesktop,
  FaBook,
} from "react-icons/fa";

const FormacionItem = ({ icon, title, description, details }) => (
  <div className="flex relative pt-4 w-full mx-auto ">
    <div
      className="flex-shrink-0 w-8 h-8 lg:w-10 lg:h-10 rounded-md bg-primary inline-flex items-center justify-center text-white text-md lg:text-xl relative"
      aria-hidden="true"
    >
      {icon}
    </div>
    <div className="flex-grow pl-4">
      <h2 className="mb-2 tracking-wider">{title}</h2>
      <p className="font-semibold dark:font-normal text-sm">{description}</p>
      <span className="text-primary leading-loose font-bold dark:font-semibold text-sm">{details}</span>
    </div>
  </div>
);

const Formacion = () => {
  return (
    <section aria-labelledby="formacionTitulo" className="p-4">
      <h2
        id="formacionTitulo"
        className="text-center pb-4 font-semibold"
      >
        Formación
      </h2>
      <div className="space-y-4 lg:space-y-5 divide-y divide-black dark:divide-gray-400">
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
    </section>
  );
};

export default Formacion;

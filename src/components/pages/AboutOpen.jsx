import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { TiArrowBack } from "react-icons/ti";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { FaRegLaughBeam } from "react-icons/fa";
import { LuFileSymlink } from "react-icons/lu";
import {
  GiMountains,
  GiTechnoHeart,
  GiCoffeeBeans,
  GiDogBowl,
  GiBookmark,
} from "react-icons/gi";
import CV from "/cv-tomasild.pdf";

function AboutOpen() {
  const navigate = useNavigate();

  const badges = [
    { icon: <GiCoffeeBeans />, title: "Entusiasta del café de especialidad" },
    { icon: <GiTechnoHeart />, title: "Apasionado de la tecnología" },
    { icon: <GiDogBowl />, title: "Amante de los perros" },
    { icon: <GiBookmark />, title: "Autodidacta en constante aprendizaje" },
    { icon: <GiMountains />, title: "Disfruto de la naturaleza y el trekking" },
    { icon: <FaRegLaughBeam />, title: "Alegre y motivado" },
  ];

  return (
    <main className="text-gray-300 w-full md:w-1/2 lg:w-1/3 flex flex-col mx-auto h-auto lg:h-[calc(100vh-2rem)] scrollbar-hide lg:overflow-auto lg:scrollbar-default pb-12 bg-background rounded-md my-0 lg:my-4 dark:bg-custom_bg1 dark:hover:bg-custom_bg2">
      <Button
        variant="secondary"
        onClick={() => navigate(-1)}
        aria-label="Volver atrás"
        className="fixed top-0 left-0 m-4 z-50 text-white bg-accent border border-white border-opacity-40 hover:border-none hover:bg-primary transition-all duration-300"
      >
        <TiArrowBack className="text-md md:text-lg lg:text-xl" />
      </Button>
      <div className="flex flex-col items-center justify-center p-4 pb-0 tracking-wider text-pretty ">
        <h1 className="text-black dark:text-white text-[2rem] font-semibold mt-14">
          ¡Hola!, soy{" "}
          <span className="font-bold text-primary">Tomás Langer</span>
        </h1>
        <p className="text-[1rem]  md:text-[1.5rem] text-black dark:text-gray-300 font-light py-4 ">
          Soy desarrollador web con un gran interés general por la tecnología e
          innovación. Comence mi camino en el desarrollo web porque me gusta
          mucho la idea de transformar ideas en proyectos reales o productos.
        </p>
        <p className="text-[1rem]  md:text-[1.5rem] text-black dark:text-gray-300 font-light py-4">
          Antes de sumergirme en el código, estuve inmerso en el área de
          marketing y ventas por más de tres años. Allí aprendí bastante sobre
          como trabajar en equipo, centrarme en como mejorar la experiencia y
          satisfacer las necesidades de los usuarios, resolver conflictos,
          priorizar tareas, entre otras habilidades.
        </p>
        <p className="text-[1rem]  md:text-[1.5rem] text-black dark:text-gray-300 font-light py-4 scroll-reveal">
          Cuando no estoy frente a una pantalla, probablemente me encontrarás
          disfrutando de la naturaleza, saliendo con amistades y asistiendo a
          eventos tecnológicos, charlas, entre otros, para estar siempre al
          tanto de las últimas novedades, tendencias e innovaciones tecnológicas que estan
          constantemente cambiando nuestro entorno y como nos relaionamos con el
          mismo.
        </p>
        <div className="text-white flex flex-wrap justify-center gap-5 py-4 w-full mx-auto scroll-reveal">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="text-center w-20 md:w-24 lg:w-32 text-3xl lg:text-4xl flex justify-start flex-col items-center mx-auto font-medium dark:font-normal text-black dark:text-white"
            >
              {badge.icon}
              <div className="text-xs  sm:text-sm md:text-sm lg:text-lg xl:text-lg 2xl:text-lg pt-2">
                {badge.title}
              </div>
            </div>
          ))}
        </div>
        <p className="text-base sm:text-xl md:text-xl lg:text-xl xl:text-xl 2xl:text-2xl text-black dark:text-gray-300 font-light py-4 scroll-reveal">
          En pocas palabras, me gusta complementar mi trabajo en desarrollo web con
          mis conocimientos en Marketing e intereses personales. Busco constantemente aprender y mejorar,
          suelo mantener un ambiente relajado y divertido tanto en lo profesional
          como en lo personal.
        </p>
      </div>
      <div className="flex space-x-4 p-4 text-white pt-12 animate-fadeIn">
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

        <div className="flex justify-evenly w-[40%] items-center">
          <a
            href="https://www.linkedin.com/in/tomaslangerduran/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin
              size="32px"
              className="cursor-pointer bg-accent hover:text-accent hover:bg-white dark:text-white dark:hover:text-accent"
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
              className="cursor-pointer bg-accent hover:text-accent hover:bg-white dark:text-white dark:hover:text-accent"
            />
          </a>
        </div>
      </div>
    </main>
  );
}

export default AboutOpen;

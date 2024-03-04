import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { TiArrowBack } from "react-icons/ti";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import Profile from "/profile.jpg";
import { FaRegLaughBeam } from "react-icons/fa";
import {
  GiMountains,
  GiTechnoHeart,
  GiCoffeeBeans,
  GiDogBowl,
  GiBookmark,
} from "react-icons/gi";

function AboutOpen() {
  const navigate = useNavigate();

  const badges = [
    { icon: <GiCoffeeBeans />, title: "Amante del café" },
    { icon: <GiTechnoHeart />, title: "Apasionado de la tecnología" },
    { icon: <GiDogBowl />, title: "Amante de los perros" },
    { icon: <GiBookmark />, title: "Entusiasta del aprendizaje" },
    { icon: <GiMountains />, title: "Disfruto de la naturaleza" },
    { icon: <FaRegLaughBeam />, title: "Siempre alegre" },
  ];

  return (
    <main className="text-gray-300 w-full md:w-1/2 lg:w-1/3 flex flex-col mx-auto h-auto lg:h-[calc(100vh-2rem)] scrollbar-hide lg:overflow-auto lg:scrollbar-default pb-12 bg-custom_bg bg-opacity-40 hover:bg-opacity-90 lg:border border-white border-opacity-30 hover:border-opacity-70 transition duration-500 ease-in-out rounded-md my-0 lg:my-4">
      <Button
        onClick={() => navigate(-1)}
        aria-label="Volver atrás"
        className="absolute top-0 left-0 m-4 bg-secondary  z-50"
      >
        <TiArrowBack className="text-xl" />
      </Button>
      <div className="flex flex-col items-center justify-center p-4 pb-0 tracking-wider text-pretty">
        <img
          src={Profile}
          alt="Tomás Langer posando"
          className="rounded-xl w-36 h-auto lg:w-28 mb-4"
        />
        <h1 className="text-white text-2xl font-semibold">¡Hola!, soy <span className="font-bold text-primary">Tomás Langer</span></h1>
        <p className="text-md text-gray-300 py-4">
          Soy desarrollador web con un gran interés general por la tecnología e
          innovación . Me metí en el desarrollo web porque me gusta mucho la
          idea de convertir los conceptos e ideas en proyectos reales,
          especialmente cuando se trata de hacer sitios web accesibles,
          optimizados y con animaciones atractivas.
        </p>
        <p className="text-md text-gray-300 py-4 scroll-scale">
          Antes de sumergirme en el código, estuve inmerso en el área el
          marketing y ventas por más de tres años. Allí aprendí un montón sobre
          trabajar en equipo, proporcionar una excelente experiencia y
          satisfacer las necesidades de los usuarios, resolver conflictos,
          priorizar tareas, entre otras cosas, lo que me viene de maravilla
          ahora que soy desarrollador.
        </p>
        <p className="text-md text-gray-300 py-4 scroll-scale">
          Cuando no estoy frente al ordenador, probablemente me encontrarás
          disfrutando de la naturaleza, saliendo con amistades y asistiendo a
          eventos tecnológicos, charlas, etc para estar siempre al tanto de las
          últimas novedades e innovaciones del área.
        </p>
        <div className="text-white flex flex-wrap justify-center gap-5 py-4 w-full mx-auto scroll-reveal scroll-scale">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="text-center w-20 md:w-24 lg:w-32 text-3xl lg:text-4xl flex justify-start flex-col items-center mx-auto"
            >
              {badge.icon}
              <div className="text-xs pt-2">{badge.title}</div>
            </div>
          ))}
        </div>
        <p className="text-md text-gray-300 py-4 scroll-reveal">
          En pocas palabras, me gusta combinar mi trabajo en desarrollo web con
          mis intereses personales. Busco constantemente aprender y mejorar,
          manteniendo un ambiente relajado y divertido tanto en lo profesional
          como en lo personal.
        </p>
      </div>
      <div className="flex space-x-4 p-4 text-white pt-12 scroll-reveal">
        <Button className="flex w-full">Abrir CV</Button>
        <div className="flex justify-evenly w-full items-center">
          <a
            href="https://www.linkedin.com/in/tomaslangerduran/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size="32px" className="cursor-pointer text-gray-300 hover:text-white"/>
          </a>
          <a
            href="https://github.com/tomasild"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithubSquare size="32px" className="cursor-pointer text-gray-300 hover:text-white"/>
          </a>
        </div>
      </div>
    </main>
  );
}

export default AboutOpen;

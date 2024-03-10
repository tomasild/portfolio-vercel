import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { TiArrowBack } from "react-icons/ti";
import { LuCode2, LuExternalLink } from "react-icons/lu";
import { getProjectDataByTitle } from "../../data/projects";

function ProjectsOpen() {
  const navigate = useNavigate();
  const { projectTitle } = useParams();
  const projectData = getProjectDataByTitle(projectTitle);
  const [imageIndex, setImageIndex] = useState(0); // Índice de la imagen actual

  if (!projectData) {
    return <div>Proyecto no encontrado</div>;
  }

  const images = [projectData.imagen, projectData.imagen2, projectData.imagen3];

  const handleImageChange = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <main className="w-full md:w-1/2 lg:w-1/3 block mx-auto h-auto lg:h-[calc(100vh-2rem)] scrollbar-hide lg:overflow-auto lg:scrollbar-default bg-background rounded-md my-0 lg:my-4 dark:bg-custom_bg1 dark:hover:bg-custom_bg2">
      <Button
        variant="secondary"
        onClick={() => navigate(-1)}
        aria-label="Volver atrás"
        className="fixed top-0 left-0 m-4 z-50 text-white bg-accent border border-white border-opacity-40 hover:border-none hover:bg-primary "
      >
        <TiArrowBack className="text-md md:text-lg lg:text-xl" />
      </Button>
      <div className="block h-auto items-center justify-center p-4 pb-0 tracking-wider text-pretty">
        <div className="w-full h-auto mb-4 aspect-w-16 aspect-h-9 tracking-wider text-pretty">
        <h1 className="text-black dark:text-white text-2xl font-semibold text-center">
          {projectData.title}
        </h1>
          <img
            src={images[imageIndex]}
            alt={`Imagen ${imageIndex + 1}`}
            className="w-full h-full object-contain cursor-pointer aspect-video mt-4"
            onClick={handleImageChange}
          />
          <div className="flex justify-center mt-2">
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                className={`w-4 mx-2 h-4 bg-accent rounded-full cursor-pointer ${
                  index === imageIndex ? "bg-primary" : ""
                }`}
                onClick={() => setImageIndex(index)}
              />
            ))}
          </div>
        </div>
        <p className="text-sm font-medium dark:font-normal text-black dark:text-white py-2">
          {projectData.descripcion1}
        </p>
        <p className="text-sm font-medium dark:font-normal text-black dark:text-white py-2">
          {projectData.descripcion2}
        </p>
        <p className="text-sm font-medium dark:font-normal text-black dark:text-white py-2">
          {projectData.descripcion3}
        </p>
        <img
          className="w-[60%] h-auto mx-auto py-2"
          src={projectData.imagen_mobile}
          alt="vista de la app en un dispositivo movil"
        />
        <p className="text-sm font-medium dark:font-normal text-black dark:text-white py-2">
          {projectData.descripcion4}
        </p>
        <p className="text-sm font-medium dark:font-normal text-black dark:text-white py-2">
          {projectData.descripcion5}
        </p>
        <div className="flex flex-wrap justify-start gap-2 py-4">
          {projectData.etiquetas.map((etiqueta, index) => (
            <Badge
              variant="outline"
              key={index}
              className="border-2 border-black dark:border-white dark:border"
            >
              {etiqueta}
            </Badge>
          ))}
        </div>
        <div className="flex space-x-4 py-4 px-0 w-full">
          {projectData.codigoURL && (
            <Button
              onClick={() => window.open(projectData.codigoURL, "_blank")}
              className="flex w-full justify-center text-white  bg-accent hover:bg-primary"
              variant="secondary"
            >
              <LuCode2 className="mr-2 w-4 h-4 font-bold" />
              Código
            </Button>
          )}
          {projectData.demoURL && (
            <Button
              onClick={() => window.open(projectData.demoURL, "_blank")}
              className="flex w-full justify-center text-white  bg-accent hover:bg-primary "
              variant="secondary"
            >
              <LuExternalLink className="mr-2 w-4 h-4 font-bold" /> Deploy
            </Button>
          )}
        </div>
      </div>
    </main>
  );
}

export default ProjectsOpen;
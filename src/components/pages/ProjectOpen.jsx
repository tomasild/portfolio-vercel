import React from "react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { TiArrowBack } from "react-icons/ti";
import { useNavigate, useParams } from "react-router-dom";
import { getProjectDataByTitle } from "../../data/projects";

function ProjectsOpen() {
  const navigate = useNavigate();
  const { projectTitle } = useParams(); // Obtener el título del proyecto de la URL
  const projectData = getProjectDataByTitle(projectTitle); // Cargar datos del proyecto basado en el título

  if (!projectData) {
    return <div>Proyecto no encontrado</div>; // Manejar el caso de proyecto no encontrado
  }

  return (
    <main className="text-gray-300 w-full md:w-1/2 lg:w-1/3 block mx-auto h-auto lg:h-[calc(100vh-2rem)] scrollbar-hide lg:overflow-auto lg:scrollbar-default bg-custom_bg bg-opacity-40 hover:bg-opacity-90 lg:border border-white border-opacity-30 hover:border-opacity-70 transition duration-500 ease-in-out rounded-md my-0 lg:my-4">
      <Button
        onClick={() => navigate(-1)}
        aria-label="Volver atrás"
        className="absolute top-0 left-0 m-4 bg-secondary z-50"
      >
        <TiArrowBack className="text-xl" />
      </Button>
      <div className="flex flex-col items-center justify-center p-4 pb-0 tracking-wider text-pretty">
        <img
          src={projectData.imagen}
          alt={projectData.titulo}
          className="w-full h-full object-cover mb-4 aspect-video"
        />
        <h1 className="text-white text-2xl font-semibold">
          {projectData.titulo}
        </h1>
        <p className="text-md text-gray-300 py-4">{projectData.descripcion1}</p>
        <p className="text-md text-gray-300 py-4">{projectData.descripcion2}</p>
        <div className="flex flex-wrap justify-start gap-2 py-4">
          {projectData.etiquetas.map((etiqueta, index) => (
            <Badge
              key={index}
              variant="primary"
              className="px-4 py-1 rounded-md"
            >
              {etiqueta}
            </Badge>
          ))}
        </div>
        <div className="flex space-x-4 p-4 w-full">
          {projectData.codigoURL && (
            <Button
              onClick={() => window.open(projectData.codigoURL, "_blank")}
              className="flex w-full justify-center"
            >
              Código
            </Button>
          )}
          {projectData.demoURL && (
            <Button
              onClick={() => window.open(projectData.demoURL, "_blank")}
              className="flex w-full justify-center"
            >
              Demo
            </Button>
          )}
        </div>
      </div>
    </main>
  );
}

export default ProjectsOpen;

import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { TiArrowBack } from "react-icons/ti";
import { getProjectDataByTitle } from "../../data/projects";

function ProjectsOpen() {
  const navigate = useNavigate();
  const { projectTitle } = useParams(); // Obtener el título del proyecto de la URL
  const projectData = getProjectDataByTitle(projectTitle); // Cargar datos del proyecto basado en el título
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVideoVisible(true);
        }
      },
      { threshold: 0.5 } // Trigger cuando el 50% del video esté visible
    );

    const videoElement = document.querySelector("#videoElement");
    if (videoElement) observer.observe(videoElement);

    return () => {
      if (videoElement) observer.unobserve(videoElement);
    };
  }, []);

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
      <div className="block h-auto items-center justify-center p-4 pb-0 tracking-wider text-pretty">
        {/* Carga diferida del video con miniatura */}
        <div id="videoElement" className="w-full h-full mb-4 aspect-video tracking-wider text-pretty">
          {isVideoVisible ? (
            <video
              /* controls */
              playsInline
              autoPlay
              muted
              loop
              poster={projectData.imagen} // Usar la imagen como poster antes de que el video cargue
              className="w-full h-full object-cover"
            >
              <source src={projectData.videoURL} type="video/mp4" />
              Tu navegador no soporta el elemento <code>video</code>.
            </video>
          ) : (
            // Miniatura del video
            <img
              src={projectData.imagen}
              alt={`Miniatura de ${projectData.titulo}`}
              className="w-full h-full object-cover"
            />
          )}
        </div>
        <h1 className="text-white text-2xl font-semibold">
          {projectData.title}
        </h1>
        <p className="text-md text-gray-300 py-4">{projectData.descripcion1}</p>
        <p className="text-md text-gray-300 py-4">{projectData.descripcion2}</p>
        <div className="flex flex-wrap justify-start gap-2 py-4">
          {projectData.etiquetas.map((etiqueta, index) => (
            <Badge
              key={index}
              className="px-4 py-2 bg-primary text-white font-semibold  "
            >
              {etiqueta}
            </Badge>
          ))}
        </div>
        <div className="flex space-x-4 py-4 px-0 w-full">
          {projectData.codigoURL && (
            <Button
              onClick={() => window.open(projectData.codigoURL, "_blank")}
              className="flex w-full justify-center hover:bg-primary"
              variant="secondary"
            >
              Código
            </Button>
          )}
          {projectData.demoURL && (
            <Button
              onClick={() => window.open(projectData.demoURL, "_blank")}
              className="flex w-full justify-center hover:bg-primary"
              variant="secondary"
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

import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { TiArrowBack } from "react-icons/ti";
import { LuCode2, LuExternalLink } from "react-icons/lu";
import { getProjectDataByTitle } from "@/data/projects";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

function ProjectsOpen() {
  const navigate = useNavigate();
  const { projectTitle } = useParams();
  const projectData = getProjectDataByTitle(projectTitle);

  if (!projectData) {
    return <div>Proyecto no encontrado</div>;
  }

  const images = [
    { original: projectData.imagen, thumbnail: projectData.imagen },
    { original: projectData.imagen2, thumbnail: projectData.imagen2 },
    { original: projectData.imagen3, thumbnail: projectData.imagen3 },
  ];

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
      <article className="block h-auto items-center justify-center p-4 pb-0 tracking-wider text-pretty">
        <h1 className="text-black dark:text-white text-[2rem] font-semibold text-center mb-4">
          {projectData.title}
        </h1>
        <div className="w-full h-auto aspect-w-16 aspect-h-9 tracking-wider text-pretty">
          <ImageGallery
            items={images}
            showThumbnails={false}
            showPlayButton={true}
            showFullscreenButton={true}
            showBullets={true}
            showNav={false}
            autoPlay={true}
            slideInterval={3000}
            slideDuration={400}
          />
        </div>
        <section className="py-2">
          {[
            projectData.descripcion1,
            projectData.descripcion2,
            projectData.descripcion3,
          ].map((descripcion, index) => (
            <p
              key={index}
              className="text-[1rem]  text-black dark:text-gray-300 py-2"
            >
              {descripcion}
            </p>
          ))}
        </section>
        {projectData.imagen_mobile && (
          <img
            className="w-[60%] h-auto mx-auto py-2"
            src={projectData.imagen_mobile}
            alt="vista de la app en un dispositivo móvil"
          />
        )}
        <section className="py-2">
          {[projectData.descripcion4, projectData.descripcion5].map(
            (descripcion, index) => (
              <p
                key={index}
                className="text-[1rem]  text-black dark:text-gray-300 py-2"
              >
                {descripcion}
              </p>
            )
          )}
        </section>
        <div className="flex flex-wrap justify-start gap-2 py-4">
          {projectData.etiquetas.map((etiqueta, index) => (
            <Badge
              variant="destructive"
              key={index}
              className="border-2 border-black dark:border-white dark:border text-[1rem] "
            >
              {etiqueta}
            </Badge>
          ))}
        </div>
        <div className="flex space-x-4 py-4 px-0 w-full">
          {projectData.codigoURL && (
            <Button
              onClick={() => window.open(projectData.codigoURL, "_blank")}
              className="flex w-full justify-center text-white text-base bg-accent hover:bg-primary"
              variant="secondary"
            >
              <LuCode2 className="mr-2 w-4 h-4 font-bold" />
              Código
            </Button>
          )}
          {projectData.demoURL && (
            <Button
              onClick={() => window.open(projectData.demoURL, "_blank")}
              className="flex w-full justify-center text-white text-base bg-accent hover:bg-primary "
              variant="secondary"
            >
              <LuExternalLink className="mr-2 w-4 h-4 font-bold" /> Deploy
            </Button>
          )}
        </div>
      </article>
    </main>
  );
}

export default ProjectsOpen;

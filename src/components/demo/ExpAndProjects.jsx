import React from "react";
import { CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useNavigate } from "react-router-dom";
import { projectsData } from "@/data/projects";

export function ExpAndProjects() {
  const navigate = useNavigate();

  const handleProjectClick = (title) => {
    navigate(`/projectOpen/${title}`);
  };

  return (
    <Carousel
      className="w-auto max-w-[70%] md:max-w-[70%] lg:max-w-[70%] xl:w-full p-4"
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <h2 className="text-center font-semibold text-lg pb-4">Experiencia</h2>
      <CarouselContent>
        {projectsData.map((project, index) => (
          <CarouselItem
            key={index}
            onClick={() => handleProjectClick(project.title)}
            className="cursor-pointer"
          >
            <div className="overflow-hidden">
              <CardContent
                className={`relative aspect-square ${project.bgClass} bg-cover bg-center flex justify-center items-center rounded-lg border`}
              >
                {/* Agregar la lógica para mostrar la imagen del proyecto */}
                <img src={project.imagen} alt={project.title} />
              </CardContent>
              <div className="mt-2">
                <h3 className="font-bold text-center tracking-wide">
                  {project.title}
                </h3>
                <p className="text-sm text-center">{project.subtitle}</p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bg-secondary hover:bg-primary rounded-md hover:text-background dark:hover:text-white" />
      <CarouselNext className="bg-secondary hover:bg-primary rounded-md hover:text-background dark:hover:text-white" />
    </Carousel>
  );
}

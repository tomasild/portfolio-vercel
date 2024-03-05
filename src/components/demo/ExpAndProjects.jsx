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

export function ExpAndProjects() {
  // Tus proyectos
  const navigate = useNavigate(); // Hook para navegar

  const handleProjectClick = (title) => {
    navigate(`/projectOpen/${title}`); // Navegar a ProjectOpen con el título del proyecto
  };

  const projects = [
    {
      title: "Groovelist",
      subtitle: "Streaming de Música",
      bgClass: "bg-groovelist",
    },
    { title: "Angin", 
      subtitle: "Destiladora de gin", 
      bgClass: "bg-angin" },
    {
      title: "Proesthetic Fit",
      subtitle: "Clínica estética integral",
      bgClass: "bg-proesthetic-fit",
    },
    {
      title: "Empresa de Efectos Especiales",
      subtitle: "Efectos visuales y prácticos",
      bgClass: "bg-fx",
    },
    {
      title: "Otro Proyecto",
      subtitle: "Descripción del proyecto",
      bgClass: "bg-otro-proyecto",
    },
  ];

  return (
    <Carousel
      className="w-auto max-w-[70%] md:max-w-[70%] lg:max-w-[80%] xl:w-auto"
      opts={{
        align: "start",
        loop: true,
      }}
      
    >
      <h2 className="text-center pb-4 text-lg font-semibold">
        Experiencia y proyectos
      </h2>
      <CarouselContent>
        {projects.map((project, index) => (
          <CarouselItem
            key={index}
            onClick={() => handleProjectClick(project.title)}
            className="cursor-pointer"
          >
            <div className="overflow-hidden">
              {/* Apply background class and aspect ratio directly to CardContent, with rounded corners */}
              <CardContent
                className={`relative aspect-square ${project.bgClass} bg-cover bg-center flex justify-center items-center rounded-md`}
              >
                {/* Overlay with title and subtitle, ensuring it respects the card's rounded corners */}
                <div className="absolute inset-0 flex flex-col justify-center items-center p-4 bg-black bg-opacity-40 rounded-lg">
                  <h5 className="text-xl font-semibold text-white text-center">
                    {project.title}
                  </h5>
                  <p className="text-md text-white mt-2 text-center">
                    {project.subtitle}
                  </p>
                </div>
              </CardContent>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bg-secondary hover:bg-primary rounded-md" />
      <CarouselNext className="bg-secondary hover:bg-primary rounded-md" />
    </Carousel>
  );
}

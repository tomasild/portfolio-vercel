import React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function ExpAndProjects() {
  const projects = [
    {
      title: "Groovelist",
      subtitle: "Streaming de Música",
      bgClass: "bg-groovelist",
    },
    { title: "Angin", subtitle: "Destiladora de gin", bgClass: "bg-angin" },
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
      className="w-auto container md:max-w-lg lg:w-full"
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <h2 className="text-center pb-4 text-lg font-semibold">Experiencia y proyectos</h2>
      <CarouselContent className=" w-auto">
        {projects.map((project, index) => (
          <CarouselItem key={index}>
            <div className="overflow-hidden">
              {/* Apply background class and aspect ratio directly to CardContent, with rounded corners */}
              <CardContent
                className={`relative aspect-video ${project.bgClass} bg-contain bg-center flex justify-center items-center rounded-lg`}
              >
                {/* Overlay with title and subtitle, ensuring it respects the card's rounded corners */}
                <div className="absolute inset-0 flex flex-col justify-center items-center p-4 bg-black bg-opacity-40 rounded-lg">
                  <h5 className="text-lg text-white font-bold text-center">
                    {project.title}
                  </h5>
                  <p className="text-sm text-white mt-2 text-center">
                    {project.subtitle}
                  </p>
                </div>
              </CardContent>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="ml-8" />
      <CarouselNext className="mr-8"/>
    </Carousel>
  );
}

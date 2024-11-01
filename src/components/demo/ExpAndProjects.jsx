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
import { AiFillInfoCircle } from "react-icons/ai";

export function ExpAndProjects() {
  const navigate = useNavigate();

  const handleProjectClick = (title) => {
    navigate(`/projectOpen/${title}`);
  };

  return (
    <div className="flex flex-col w-full h-full pt-2">
      <h2 className="text-center font-semibold text-base sm:text-xl md:text-xl lg:text-xl xl:text-xl 2xl:text-2xl">
        Experiencia y proyectos
      </h2>
      <Carousel
        className="w-[70%] lg:w-[80%] mx-auto"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {projectsData.map((project, index) => (
            <CarouselItem
              key={index}
              onClick={() => handleProjectClick(project.title)}
              className="cursor-pointer"
            >
              <div className="overflow-hidden">
                <div className="pt-1 flex items-center justify-center space-x-2">
                  <h3 className="text-base sm:text-xl md:text-xl lg:text-xl xl:text-xl 2xl:text-2xl font-semibold text-center tracking-wide hover:text-primary">
                    {project.title}
                  </h3>
                  <AiFillInfoCircle className="text-primary animate-pulse" />
                </div>
                <p className="text-base text-center">
                  {project.subtitle}
                </p>
                <CardContent
                  className={`relative aspect-square sm:aspect-video lg:aspect-video xl:aspect-video ${project.bgClass} bg-cover bg-center flex justify-center items-center rounded-lg my-4`}
                ></CardContent>
                <p className="text-base text-pretty font-semibold dark:font-normal dark:text-gray-200 text-black pb-4">
                  {project.preview}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-secondary hover:bg-primary rounded-md hover:text-background dark:hover:text-white " />
        <CarouselNext className="bg-secondary hover:bg-primary rounded-md hover:text-background dark:hover:text-white " />
      </Carousel>
    </div>
  );
}

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
import { AiFillInfoCircle } from 'react-icons/ai';

export function ExpAndProjects() {
  const navigate = useNavigate();

  const handleProjectClick = (title) => {
    navigate(`/projectOpen/${title}`);
  };

  return (
    <Carousel
      className="w-auto max-w-[70%] md:max-w-[70%] lg:max-w-[100%] xl:max-w-[80%] p-4"
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <h2 className="text-center font-semibold text-lg pb-2">Experiencia</h2>
      <CarouselContent>
        {projectsData.map((project, index) => (
          <CarouselItem
            key={index}
            onClick={() => handleProjectClick(project.title)}
            className="cursor-pointer"
          >
            <div className="overflow-hidden">
              <CardContent
                className={`relative aspect-square sm:aspect-video lg:aspect-video xl:aspect-video ${project.bgClass} bg-cover bg-center flex justify-center items-center rounded-lg `}
              >
              </CardContent>
              <div className="pt-1 flex items-center justify-center space-x-2">
                <h3 className="text-md font-semibold text-center tracking-wide hover:text-primary">
                  {project.title}
                </h3>
                <AiFillInfoCircle className="text-primary animate-pulse" />
              </div>
              <p className="text-sm text-center">{project.subtitle}</p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bg-secondary hover:bg-primary rounded-md hover:text-background dark:hover:text-white lg:-left-6 xl:-left-12 -left-8" />
      <CarouselNext className="bg-secondary hover:bg-primary rounded-md hover:text-background dark:hover:text-white lg:-right-6 xl:-right-12 -right-8" />
    </Carousel>
  );
}

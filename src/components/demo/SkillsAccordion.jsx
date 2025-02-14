import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { skillsData } from "@/data/skills";

export function SkillsAccordion() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full z-50"
      defaultValue="item-1" // Esto establece el primer item como abierto por defecto
    >
      <h2 className="text-center text-[1.6rem] font-semibold">Habilidades</h2>

      {skillsData.map((skill, index) => {
        return (
          <AccordionItem
            className="border-b border-black dark:border-b-gray-400"
            key={index}
            value={`item-${index + 1}`}
          >
            <AccordionTrigger className="tracking-wider text-[1.2rem] font-semibold ">
              {skill.title}
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col items-left">
                {/* Etiquetas de habilidades actuales */}
                {skill.content.length > 0 && (
                  <div>
                    <ul className="flex flex-wrap gap-2 justify-start">
                      {skill.content.map((item, idx) => (
                        <li key={idx}>
                          <Badge
                            variant="destructive"
                            className="bg-primary tracking-wide text-[1rem]"
                          >
                            {item}
                          </Badge>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {/* Footer */}
                {skill.footer && (
                  <p className="mt-4 text-[1rem] font-semibold text-gray-300">
                    {skill.footer}
                  </p>
                )}
                {/* Lista "Proximos pasos", solo si actual no está vacío */}
                {skill.actual.length > 0 && (
                  <div>
                    <ul className="flex flex-wrap gap-2 justify-start my-2">
                      {skill.actual.map((item, idx) => (
                        <li key={idx}>
                          <Badge
                            variant="outline"
                            className="bg-secondary tracking-wide border-2 border-black dark:border-white dark:border dark:font-bold text-[1rem] "
                          >
                            {item}
                          </Badge>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { IoLogoReact, IoServer, IoPeople, IoBuild } from "react-icons/io5";
import { skillsData } from "@/data/skills";


export function SkillsAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full z-50">
      <h2 className="text-center text-lg font-semibold">Skills</h2>

      {skillsData.map((skill, index) => (
        <AccordionItem
          className="border-b border-black dark:border-b-gray-400"
          key={index}
          value={`item-${index + 1}`}
        >
          <AccordionTrigger className="tracking-wider">
            {skill.title}
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col items-left">
              {/* Icono */}
              <div className="my-2">{skill.icon}</div>
              {/* Descripción */}
              {skill.description && <p className="my-2">{skill.description}</p>}
              {/* Etiquetas de habilidades actuales */}
              {skill.content.length > 0 && (
                <div>
                  <ul className="flex flex-wrap gap-2 justify-start">
                    {skill.content.map((item, idx) => (
                      <li key={idx}>
                        <Badge
                          variant="destructive"
                          className="bg-primary tracking-wide"
                        >
                          {item}
                        </Badge>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {/* Footer */}
              {skill.footer && <p className="mt-4">{skill.footer}</p>}
              {/* Lista "En formación", solo si actual no está vacío */}
              {skill.actual.length > 0 && (
                <div>
                  <ul className="flex flex-wrap gap-2 justify-start my-2">
                    {skill.actual.map((item, idx) => (
                      <li key={idx}>
                        <Badge
                          variant="outline"
                          className="bg-secondary tracking-wide border-2 border-black dark:border-white dark:border dark:font-bold"
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
      ))}
    </Accordion>
  );
}

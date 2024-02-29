import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  import { Badge } from "@/components/ui/badge";
  import { IoLogoReact, IoServer, IoPeople, IoBuild } from "react-icons/io5";
  
  export function SkillsAccordion() {
    // Datos de las habilidades para integrar en el acordeón
    const skillsData = [
      {
        icon: <IoLogoReact size={40} className="" aria-label="Frontend Skills" role="img" />,
        title: "Frontend",
        description: "Habilidades relacionadas con el desarrollo de la interfaz de usuario",
        content: ["HTML", "CSS", "JavaScript", "React", "Tailwind", "Shadcn"],
        footer: "Actualmente aprendiendo"
      },
      {
        icon: <IoServer size={40} className="" aria-label="Backend Skills" role="img" />,
        title: "Backend",
        description: "Habilidades relacionadas con el desarrollo del servidor",
        content: ["Node.js", "Express", "MongoDB", "SQL"],
        footer: "Actualmente aprendiendo"
      },
      {
        icon: <IoPeople size={40} className="" aria-label="Soft Skills" role="img" />,
        title: "Soft Skills",
        description: "Habilidades interpersonales y de comunicación",
        content: ["Trabajo en equipo", "Comunicación efectiva", "Resolución de problemas"],
        footer: "Más información sobre Soft Skills"
      },
      {
        icon: <IoBuild size={40} className="" aria-label="Other Skills" role="img" />,
        title: "Other Skills",
        description: "Otras habilidades relevantes",
        content: ["Git", "a11y", "WCAG", "Postman", "Wordpress", "WooCommerce"],
        footer: "Actualmente aprendiendo"
      }
    ];
  
    return (
      <Accordion type="single" collapsible className="w-full">
      <h2 className="text-center text-lg font-semibold">Skills</h2>

        {skillsData.map((skill, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionTrigger>{skill.title}</AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col items-center">
                {/* Icono */}
                <div className="my-2">{skill.icon}</div>
                {/* Descripción */}
                <p className="my-2">{skill.description}</p>
                {/* Etiquetas */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {skill.content.map((item, idx) => (
                    <Badge key={idx} variant="destructive">{item}</Badge>
                  ))}
                </div>
                {/* Footer */}
                <p className="mt-4">{skill.footer}</p>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    );
  }
  
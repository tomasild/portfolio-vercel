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
      icon: (
        <IoLogoReact
          size={40}
          className=""
          aria-label="Frontend Skills"
          role="img"
        />
      ),
      title: "Frontend",
      description:
        "Habilidades relacionadas con el desarrollo de la interfaz de usuario",
      content: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React.js",
        "Tailwind",
        "Shadcn",
      ],
      footer: "Enfocado en aprender",
      actual: ["Next.js", "React Native", "Three.js"],
    },
    {
      icon: (
        <IoServer
          size={40}
          className=""
          aria-label="Backend Skills"
          role="img"
        />
      ),
      title: "Backend",
      description: "",
      content: [],
      footer: "En formación",
      actual: ["Node.js", "Express", "PostgreSQL"],
    },
    {
      icon: (
        <IoPeople size={40} className="" aria-label="Soft Skills" role="img" />
      ),
      title: "Soft Skills",
      description: "Habilidades interpersonales y de comunicación",
      content: [
        "Trabajo en equipo",
        "Comunicación efectiva",
        "Resolución de problemas",
        "Creativo",
        "Responsable",
        "Proactivo",
        "Puntual",
        "Servicio al cliente",
      ],
      footer: "",
      actual: [],
    },
    {
      icon: (
        <IoBuild size={40} className="" aria-label="Other Skills" role="img" />
      ),
      title: "Other Skills",
      description: "Otras habilidades relevantes",
      content: [
        "Git",
        "a11y",
        "WCAG",
        "VPAT",
        "Postman",
        "Wordpress",
        "WooCommerce",
      ],
      footer: "Planeando aprender",
      actual: ["Integraciones de IA", "Cloud", "Blockchain"],
    },
  ];

  return (
    <Accordion type="single" collapsible className="w-full z-50">
      <h2 className="text-center text-lg font-semibold">Skills</h2>

      {skillsData.map((skill, index) => (
        <AccordionItem className="border-b border-b-gray-400" key={index} value={`item-${index + 1}`}>
          <AccordionTrigger className="tracking-wider">{skill.title}</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col items-left">
              {/* Icono */}
              <div className="my-2">{skill.icon}</div>
              {/* Descripción */}
              {skill.description && <p className="my-2">{skill.description}</p>}
              {/* Etiquetas de habilidades actuales */}
              {skill.content.length > 0 && (
                <div><ul className="flex flex-wrap gap-2 justify-start">
                {skill.content.map((item, idx) => (
                  <li key={idx}>
                    <Badge variant="destructive" className="bg-primary">
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
                        <Badge variant="secondary" className="bg-secondary">
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

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
        "Axios",
        "React.js",
        "Redux toolkit",
        "Tailwind CSS",
        "Shadcn",
        "Bootstrap",
        "Animaciones"
      ],
      footer: "Enfocado en aprender",
      actual: ["Next.js", "React Native", "Three.js", "GSAP"],
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
      footer: "Desarrollando proyectos para aprender",
      actual: ["Node.js", "Express", "PostgreSQL"],
    },
    {
      icon: (
        <IoBuild size={40} className="" aria-label="Other Skills" role="img" />
      ),
      title: "Otras habilidades",
      description: "Otras habilidades relevantes",
      content: [
        "Git",
        "a11y (Accesibilidad)",
        "WCAG",
        "VPAT",
        "Postman",
        "Wordpress",
        "WooCommerce",
      ],
      footer: "Planeando aprender",
      actual: ["Integraciones de IA", "AWS", "Azure", "Web3"],
    },
    {
      icon: (
        <IoPeople size={40} className="" aria-label="Soft Skills" role="img" />
      ),
      title: "Habilidades blandas",
      description: "Habilidades interpersonales y de comunicación",
      content: [
        "Trabajo en equipo",
        "Comunicación efectiva",
        "Propositivo",
        "Resolución de problemas",
        "Creativo",
        "Responsable",
        "Proactivo",
        "Puntual",
        "Centrado en el usuario",
        "Atención personalizada",
      ],
      footer: "",
      actual: [],
    },
  ];

  return (
    <Accordion type="single" collapsible className="w-full z-50">
      <h2 className="text-center text-lg font-semibold">Skills</h2>

      {skillsData.map((skill, index) => (
        <AccordionItem className="border-b border-black dark:border-b-gray-400" key={index} value={`item-${index + 1}`}>
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
                    <Badge variant="destructive" className="bg-primary tracking-wide">
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
                        <Badge variant="outline" className="bg-secondary tracking-wide border-2 border-black dark:border-white dark:border dark:font-bold">
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

// skillsData.js
import { IoLogoReact, IoServer, IoPeople, IoBuild } from "react-icons/io5";

export const skillsData = [
  {
    icon: <IoLogoReact size={40} className="" aria-label="Frontend Skills" role="img" />,
    title: "Frontend",
    description: "Habilidades relacionadas con el desarrollo de la interfaz de usuario",
    content: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind", "Shadcn"],
    footer: "Enfocado en aprender",
    actual: ["Next.js", "React Native", "Three.js"],
  },
  {
    icon: <IoServer size={40} className="" aria-label="Backend Skills" role="img" />,
    title: "Backend",
    description: "",
    content: [],
    footer: "En formación",
    actual: ["Node.js", "Express", "PostgreSQL"],
  },
  {
    icon: <IoPeople size={40} className="" aria-label="Soft Skills" role="img" />,
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
    icon: <IoBuild size={40} className="" aria-label="Other Skills" role="img" />,
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

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  
import { Badge } from "@/components/ui/badge"
import { IoLogoReact, IoServer, IoPeople, IoBuild } from "react-icons/io5";

function SkillsCards() {
  // Modificación de la definición de la información para cada card
  // Ahora "content" es un array
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

  // Renderizado de cada card utilizando map
  return (
    <div className="flex flex-col md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 gap-4">
      {skillsData.map((skill, index) => (
        <Card className="h-auto" key={index}>
          <div className="mt-4 ml-6">{skill.icon}</div>
          <CardHeader>
            <CardTitle>{skill.title}</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Aquí se renderizan los Badges iterando sobre el array "content" */}
            <div className="flex flex-wrap gap-2">
              {skill.content.map((item, idx) => (
                <Badge key={idx} variant="destructive">{item}</Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <p>{skill.footer}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export default SkillsCards;

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { Badge } from "@/components/ui/badge";
  import Clinica from "../../../public/clinica.jpg"
  import Angin from "../../../public/angin.png"
  
  function Projects() {
    // Reemplazar con los datos reales de los proyectos
    const projects = [
      {
        title: "Angin",
        description: "Landing page para marca de gin emergente en el mercado chileno",
        technologies: ["Wordpress", "HTML", "CSS", "a11y"],
        imageUrl: Angin,
        imageAlt: "Primera impresion de la landing page de angin",
      },
      {
        title: "Proesthetic Fit",
        description: "Landing page para clinica estética integral",
        technologies: ["HTML", "JavaScript", "CSS"],
        imageUrl: Clinica,
        imageAlt: "Primera impresion de la landing page de proesthetic fit",
      },
      // Añadir más proyectos según sea necesario
    ];
  
    return (
      <section aria-labelledby="projects-heading" className="space-y-4 w-full p-4">
        <h2 id="projects-heading">Proyectos Destacados</h2>
        {projects.map((project, index) => (
          <article key={index} aria-labelledby={`project-title-${index}`}>
            <Card>
              <CardHeader>
                <img className="rounded-md aspect-video object-contain" src={project.imageUrl} alt={project.imageAlt} />
                <CardTitle className="text-2xl" id={`project-title-${index}`}>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-md text-slate-400">{project.description}</p>
              </CardContent>
              <CardFooter>
                <ul className="flex space-x-2" aria-label="Tecnologías utilizadas">
                  {project.technologies.map((tech, techIndex) => (
                    <li key={techIndex}>
                      <Badge className="text-md">{tech}</Badge>
                    </li>
                  ))}
                </ul>
              </CardFooter>
            </Card>
          </article>
        ))}
      </section>
    );
  }
  
  export default Projects;
  
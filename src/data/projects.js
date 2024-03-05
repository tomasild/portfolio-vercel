// Archivo: /src/data/projects.js

export const projectsData = [
  {
    title: "Groovelist",
    subtitle: "Streaming de Música",
    imagen: "/noche.jpg",
    bgClass: "bg-groovelist",
    descripcion1:
      "Groovelist es una plataforma de streaming de música que permite a los usuarios explorar, descubrir y disfrutar de una amplia variedad de géneros musicales de todo el mundo.",
    descripcion2:
      "La plataforma ofrece características personalizadas para mejorar la experiencia de escucha, incluyendo listas de reproducción personalizadas, estaciones de radio y recomendaciones basadas en las preferencias musicales.",
    etiquetas: ["React", "HTML", "CSS", "Tailwind CSS", "Atomic Design", "Auth", "API REST", "JSON"],
    codigoURL: "https://github.com/groovelist",
    demoURL: "https://groovelist.com",
  },
  {
    title: "Angin",
    subtitle: "Destiladora de gin",
    imagen: "/angin.png",
    bgClass: "bg-angin",
    descripcion1:
      "Angin es una destiladora de gin artesanal que combina técnicas tradicionales con un enfoque moderno para crear sabores únicos.",
    descripcion2:
      "Nuestro gin es el resultado de la destilación cuidadosa de botánicos seleccionados, ofreciendo una experiencia de sabor excepcional para los aficionados al gin.",
    etiquetas: ["WordPress", "CSS", "HTML", "a11y"],
    codigoURL: "https://github.com/angin",
    demoURL: "https://angin.com",
  },
  {
    title: "Proesthetic Fit",
    subtitle: "Clínica estética integral",
    imagen: "/clinica.jpg",
    bgClass: "bg-proesthetic-fit",
    descripcion1:
      "Proesthetic Fit es una clínica estética integral que ofrece una gama de servicios para promover el bienestar y la belleza, utilizando las tecnologías más avanzadas.",
    descripcion2:
      "Nuestros servicios incluyen tratamientos faciales, corporales, estéticos y de recuperación, diseñados para satisfacer las necesidades individuales de nuestros clientes.",
    etiquetas: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    codigoURL: "https://github.com/proestheticfit",
    demoURL: "https://proestheticfit.com",
  },
  /* {
    title: "Empresa de Efectos Especiales",
    subtitle: "Descripción del proyecto",
    imagen: "/noche.jpg",
    bgClass: "bg-fx",
    descripcion1:
      "Empresa líder en la creación de efectos visuales y prácticos para la industria del cine y la televisión, ofreciendo soluciones creativas para llevar las ideas a la realidad.",
    descripcion2:
      "Nuestro equipo combina talento artístico con tecnología de punta para producir efectos especiales de alta calidad que cautivan al público.",
    etiquetas: ["Next.js", "React.js", "HTML", "CSS", "JavaScript", "Tailwind CSS", "Shadcn"],
    codigoURL: "https://github.com/efectosespeciales",
    demoURL: "https://efectosespeciales.com",
  }, */
];

export const getProjectDataByTitle = (title) => {
  const project = projectsData.find((project) => project.title === title);
  return project;
};

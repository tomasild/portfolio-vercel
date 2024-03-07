// Archivo: /src/data/projects.js

export const projectsData = [
  {
    title: "Groovelist",
    subtitle: "Streaming de Música",
    imagen: "/noche.jpg",
    bgClass: "bg-groovelist",
    descripcion1:
      "Mi experiencia en Groovelist fue fundamental para potenciar una plataforma que va más allá del simple streaming de música, centrándose en el licensing musical. Durante mi tiempo en el equipo, tuve el honor de liderar la migración del frontend, contribuyendo significativamente al éxito continuo de la plataforma.",
    descripcion2:
      "Inicié mi labor con un análisis detallado de la aplicación existente, desarrollada en PHP, identificando sus componentes y funcionalidades clave. Este proceso estratégico me llevó a implementar el Atomic Design, facilitando la migración a React y asegurando una arquitectura más robusta y eficiente.",
    descripcion3:
      "Durante mi contribución a Groovelist, utilice mis habilidades en el desarrollo de la interfaz de usuario y la implementación de tecnologías clave, como React, Atomic Design, y Tailwind CSS, para lograr una plataforma visualmente atractiva y funcional. Estas decisiones estratégicas no solo mejoraron la estética de la plataforma, sino que también contribuyeron a su usabilidad y accesibilidad",
    descripcion4:
      "Además, mi enfoque en la gestión eficiente del estado con Redux Toolkit, la implementación segura de autenticación mediante Amazon Cognito, y la integración fluida de servicios backend a través de Axios, resultaron elementos cruciales para el éxito continuo de Groovelist.",
    descripcion5:
      "Este proyecto fue un hito clave en mi carrera al liderar la migración del frontend en Groovelist. Aprendí y exploré nuevas tecnologías sobre la marcha, destacando mi capacidad para enfrentar desafíos tecnológicos. Esta experiencia fortaleció mi conjunto de habilidades y reafirmó mi compromiso con el crecimiento profesional",
    etiquetas: [
      "React",
      "Redux toolkit",
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS",
      "Atomic Design",
      "API REST",
      "JSON",
      "Axios",
    ],
    codigoURL:
      "https://github.com/GrooveList/frontend-groovelist-react/tree/tomas-dev",
    demoURL: "",
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
    codigoURL: "",
    demoURL: "https://angin.cl/",
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
    codigoURL: "https://github.com/tomasild/clinica_estetica",
    demoURL: "https://tomasild.github.io/clinica_estetica/",
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

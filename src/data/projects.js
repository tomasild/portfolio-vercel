// Archivo: /src/data/projects.js

export const projectsData = [
  {
    title: "Groovelist",
    subtitle: "Streaming de Música",
    imagen: "/groovelist.png",
    imagen2: "/groovelist2.png",
    imagen3: "/groovelist3.png",
    imagen_mobile: "/groovelist-mobile.png",
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
    imagen2: "/angin2.png",
    imagen3: "/angin3.png",
    imagen_mobile: "/angin-mobile.png",
    bgClass: "bg-angin",
    descripcion1:
      "Mi contribución en Angin se enfocó en el desarrollo web, iniciando la implementación de WordPress solicitado por el cliente para destacar la destiladora de gin artesanal. Utilicé WordPress, CSS y HTML para mejorar la presencia en línea y proporcionar una experiencia accesible.",
    descripcion2:
      "Me involucré activamente en la optimización del sitio web, asegurando que la información sobre la destilación  se presentara de manera atractiva. La implementación de prácticas de accesibilidad (a11y) fue clave para garantizar la inclusión de todos los visitantes del sitio que es de suma importancia para el cliente.",
    descripcion4:
      "Actualmente, la página se encuentra inmersa en un emocionante proceso de mejora sustancial y evaluación para una posible migración hacia tecnologías más avanzadas, buscando un rendimiento aún más óptimo. Nuestra prioridad es crear una página completamente accesible, implementando prácticas avanzadas de accesibilidad (a11y) para asegurar que la destiladora de gin artesanal sea disfrutada por todos los visitantes. Estamos comprometidos no solo con la estética y la accesibilidad, sino también con la eficiencia del sitio, garantizando una experiencia excepcional en términos de velocidad y funcionalidad.",
    etiquetas: ["WordPress", "CSS", "HTML", "a11y"],
    codigoURL: "",
    demoURL: "https://angin.cl/",
  },
  {
    title: "Proesthetic Fit",
    subtitle: "Clínica estética integral",
    imagen: "/clinica.jpg",
    imagen2: "/clinica2.png",
    imagen3: "/clinica3.png",
    imagen_mobile: "/clinica-mobile.png",
    bgClass: "bg-proesthetic-fit",
    descripcion1:
      "En mi rol en Proesthetic Fit, me centré en el desarrollo web para fortalecer la presencia en línea de la clínica estética integral. Utilicé HTML, CSS y JavaScript, junto con Bootstrap, para crear un sitio web interactivo y visualmente atractivo.",
    descripcion2:
      "Participé en la implementación de características clave, desde tratamientos faciales hasta servicios de recuperación, asegurando una presentación efectiva de la variedad de servicios ofrecidos. La atención a los detalles en el desarrollo garantizó una experiencia fluida para los usuarios.",
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

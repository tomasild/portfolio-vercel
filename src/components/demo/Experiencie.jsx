import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Experiencie() {
  return (
    <Accordion type="single" collapsible className="w-full p-4">
      <h3 className="text-md font-medium">Experiencia</h3>
      <AccordionItem value="item-1">
        <AccordionTrigger>
          Trainee Frontend Developer en Groovelist
        </AccordionTrigger>
        <AccordionContent className="text-pretty text-slate-400 font-medium">
          He colaborado de manera excelente con el equipo de backend para
          alcanzar las metas del área, garantizando entregas en los plazos
          establecidos. Me enfoco continuamente en optimizar la experiencia del
          usuario a través de mejoras en la UI y funcionalidades. Tuve que
          analizar la aplicación existente desarrollada en PHP para identificar
          sus componentes y funcionalidades clave, lo que me llevó a optar por
          el Atomic Design para la migración a React. He implementado Redux
          Toolkit para una gestión del estado más eficiente y estructurada. He
          utilizado Amazon Cognito para la autenticación y la gestión de las
          identidades de los usuarios. Estoy encargado del consumo de APIs
          mediante Axios, lo que permite una integración de los servicios
          desarrollados por el equipo de backend. He utilizado Tailwind CSS para
          lograr un diseño sencillo y visualmente atractivo, lo que mejora aún
          más la experiencia del usuario.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Freelance</AccordionTrigger>
        <AccordionContent className="text-pretty text-slate-400 font-medium">
          He desarrollado landing pages para una clinica estetica y una
          destileria de gin
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Actualidad</AccordionTrigger>
        <AccordionContent className="text-pretty text-slate-400 font-medium">
          Desarrollo de aplicacion web de flashcards para estudio y aplicacion
          web para visualizacion de modelos 3d para un laboratorio
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

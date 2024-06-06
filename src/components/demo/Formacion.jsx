import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FaDesktop, FaTerminal, FaBook, FaRocket } from "react-icons/fa";

const formacionData = [
  {
    icon: <FaDesktop />,
    title: "Frontend",
    description: "Me especializo en el desarrollo frontend, donde adquiero habilidades esenciales como el uso de empaquetadores, design systems, testing, accesibilidad, optimización, entre otros. Tengo interés en tecnologias como Three.js y microfrontends",
    details: "En curso: Cursos en Platzi, @FaztCode y @midudev",
    year: "En curso",
  },
  {
    icon: <FaTerminal />,
    title: "Fullstack Developer",
    description: "Certificado del programa One de Alura Latam | Oracle Next Education",
    details: "Período: 2022-2023",
    year: "2022-2023",
  },
  {
    icon: <FaBook />,
    title: "Inglés",
    description: "Actualmente mejorando mi nivel de inglés (B1) mediante clases particulares y aplicaciones especializadas",
    details: "En curso: A partir de Enero del 2024",
    year: "En curso",
  },
  {
    icon: <FaRocket />,
    title: "Ing. en Marketing",
    description: "Titulado con distinciones del Instituto profesional DuocUC",
    details: "Período: 2012-2017",
    year: "2012-2017",
  },
];

export function Formacion() {
  return (
    <section className="">
      <h2 className="text-base sm:text-xl md:text-xl lg:text-xl xl:text-xl 2xl:text-2xl leading-relaxed font-semibold text-center mb-4">Formación</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-primary font-bold text-base sm:text-xl md:text-xl lg:text-xl xl:text-xl 2xl:text-2xl dark:text-white">Nombre</TableHead>
            <TableHead className="text-primary font-bold text-base sm:text-xl md:text-xl lg:text-xl xl:text-xl 2xl:text-2xl dark:text-white">Descripción</TableHead>
            <TableHead  className="text-primary font-bold text-base sm:text-xl md:text-xl lg:text-xl xl:text-xl 2xl:text-2xl dark:text-white text-right">Año</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {formacionData.map((item, index) => (
            <TableRow key={index} className="border-gray-400 border-opacity-70">
              <TableCell style={{ verticalAlign: 'top' }} className="font-semibold py-4 text-base sm:text-xl md:text-xl lg:text-xl xl:text-xl 2xl:text-2xl">{item.title}</TableCell>
              <TableCell style={{ verticalAlign: 'top' }} className="text-base sm:text-xl md:text-xl lg:text-xl xl:text-xl 2xl:text-2xl leading-relaxed font-thin w-[90%] lg:w-auto xl:w-auto text-pretty py-4">{item.description}</TableCell>
              <TableCell style={{ verticalAlign: 'top', textAlign: 'right' }} className="w-[20%] text-base sm:text-xl md:text-xl lg:text-xl xl:text-xl 2xl:text-2xl leading-relaxed py-4">
                {item.year || "-"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}

export default Formacion;

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
    description: "Me especializo en el desarrollo frontend, donde adquiero habilidades esenciales como el uso de empaquetadores, design systems, testing, accesibilidad, entre otros. Actualmente, estoy cursando programas educativos en Platzi, @FaztCode y @midudev.",
    details: "En curso: Cursos en Platzi, @FaztCode y @midudev",
    year: "En curso: 2023",
  },
  {
    icon: <FaBook />,
    title: "Inglés",
    description: "Actualmente perfeccionando mi inglés a través de clases particulares y complementando mi desarrollo con herramientas de estudio y aplicaciones especializadas",
    details: "En curso: A partir de Enero del 2024",
    year: "En curso: 2023",
  },
  {
    icon: <FaTerminal />,
    title: "Fullstack Developer",
    description: "Certificado del programa One de Alura Latam | Oracle Next Education",
    details: "Período: 2022-2023",
    year: "2022-2023",
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
    <section className="p-4">
      <h2 className="text-lg leading-relaxed font-semibold text-center pb-4">Formación</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nombre</TableHead>
            <TableHead>Descripción</TableHead>
            <TableHead className="text-right">Año</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {formacionData.map((item, index) => (
            <TableRow key={index} className="border-gray-400">
              
              <TableCell style={{ verticalAlign: 'top' }} className="font-bold dark:font-semibold">{item.title}</TableCell>
              <TableCell style={{ verticalAlign: 'top' }} className="text-sm leading-relaxed font-semibold dark:font-normal w-[90%] lg:w-auto xl:w-auto text-pretty text-sm">{item.description}</TableCell>
              <TableCell style={{ verticalAlign: 'top', textAlign: 'right' }} className="w-[20%] text-sm leading-relaxed font-semibold dark:font-normal">
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

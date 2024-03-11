import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import useNews from "@/hooks/useNews";

const News = () => {
  const { news, currentIndex, showNewsByIndex } = useNews();
  const [errorMessage, setErrorMessage] = useState(null);

  const showNextNews = () => {
    showNewsByIndex((currentIndex + 1) % news.length);
  };

  const showPrevNews = () => {
    const newIndex = (currentIndex - 1 + news.length) % news.length;
    showNewsByIndex(newIndex);
  };

  useEffect(() => {
    const checkRequestLimit = async () => {
      // Hacer una solicitud para verificar el límite de solicitudes
      const response = await fetch("URL_PARA_VERIFICAR_LIMITE", {
        headers: {
          "X-Api-Key": "TU_API_KEY", // Reemplaza con tu clave de API
        },
      });

      if (!response.ok) {
        setErrorMessage("Se ha superado el límite de solicitudes hoy.");
      }
    };

    checkRequestLimit();
  }, []); // Se ejecuta solo una vez al montar el componente

  return (
    <section className="p-4 block">
      <h2 className="text-lg font-semibold text-center">Noticias Tech</h2>
      {errorMessage && (
        <div className="mb-4 font-semibold dark:font-normal">{errorMessage}</div>
      )}
      {news.length > 0 && (
        <div className="flex flex-col justify-between h-full">
          <div className="flex mb-4">
            <blockquote className="font-semibold dark:font-normal h-auto">
              {news[currentIndex].title}
              <a
                href={news[currentIndex].url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary leading-relaxed hover:underline ml-2"
                title={news[currentIndex].title}
              >
                Ver noticia
              </a>
            </blockquote>
          </div>
        </div>
      )}
      <div className="flex space-x-2">
        <Button
          className="py-4 bg-accent text-white hover:bg-primary dark:bg-secondary dark:hover:bg-primary w-full flex items-center justify-center"
          variant="secondary"
          onClick={showPrevNews}
          aria-label="Mostrar noticia anterior"
        >
          <LuArrowLeft className="text-lg mr-2" />
          Noticia Anterior
        </Button>
        <Button
          className="py-4 bg-accent text-white hover:bg-primary dark:bg-secondary dark:hover:bg-primary w-full flex items-center justify-center"
          variant="secondary"
          onClick={showNextNews}
          aria-label="Mostrar noticia siguiente"
        >
          Noticia Siguiente
          <LuArrowRight className="text-lg ml-2" />
        </Button>
      </div>
    </section>
  );
};

export default News;

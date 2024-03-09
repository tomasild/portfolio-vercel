import { useState, useEffect } from "react";
import { fetchNews } from "@/services/newsApi";

const useNews = () => {
  // Estado para almacenar las noticias
  const [news, setNews] = useState([]);
  // Estado para rastrear el índice actual de la noticia que se muestra
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Función asincrónica para obtener y actualizar las noticias
    const fetchData = async () => {
      // Obtener noticias almacenadas en caché
      const storedNews = getCachedNews();
      // Obtener la última actualización
      const { lastUpdate } = getLastUpdate();
      // Obtener la fecha y hora actual
      const now = new Date();

      if (storedNews && lastUpdate) {
        const lastUpdateDate = new Date(Number(lastUpdate));

        // Verificar si las noticias necesitan actualizarse en función de si es el mismo día o no
        if (!isSameDay(now, lastUpdateDate)) {

          // Obtener nuevas noticias desde la API
          const newsData = await fetchNews();

          // Actualizar el estado de las noticias, caché y la marca de tiempo de la última actualización
          setNews(newsData);
          setCachedNews(newsData);
          setLastUpdate(now.getTime());
        } else {
          // Utilizar noticias almacenadas en caché si no es necesario actualizar
          setNews(storedNews);
        }
      } else {
        // Obtener nuevas noticias desde la API si no hay noticias almacenadas en caché
        const newsData = await fetchNews();

        // Actualizar el estado de las noticias, caché y la marca de tiempo de la última actualización
        setNews(newsData);
        setCachedNews(newsData);
        setLastUpdate(now.getTime());
      }
    };

    // Funciones de utilidad para manejar la caché y la marca de tiempo de la última actualización
    const getCachedNews = () => JSON.parse(localStorage.getItem("cachedNews")) || [];

    const setCachedNews = (data) => {
      localStorage.setItem("cachedNews", JSON.stringify(data));
    };

    const getLastUpdate = () => {
      return localStorage.getItem("lastUpdate") || null;
    };

    const setLastUpdate = (timestamp) => {
      localStorage.setItem("lastUpdate", timestamp);
    };

    // Función para verificar si dos fechas son del mismo día
    const isSameDay = (date1, date2) => {
      return (
        date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate()
      );
    };

    // Llamar a la función fetchData al montar el componente
    fetchData();
  }, []); // La dependencia vacía asegura que useEffect se ejecute solo al montar el componente

  // Función para avanzar o retroceder en el index de las noticias
  const showNewsByIndex = (index) => {
    setCurrentIndex(index);
  };

  // Devolver el estado actual de las noticias y la función para mostrar la siguiente noticia
  return { news, currentIndex, showNewsByIndex };
};

// Exportar el hook personalizado
export default useNews;

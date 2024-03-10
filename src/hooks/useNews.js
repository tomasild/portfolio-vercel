// hooks/useNews.js

import { useState, useEffect } from "react";
import { fetchNews } from "../../api/fetchNews";

const useNews = () => {
  const [news, setNews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedNews = getCachedNews();

        if (storedNews.length > 0) {
          setNews(storedNews);
        } else {
          const newsData = await fetchNews();
          setNews(newsData);
          setCachedNews(newsData);
        }
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    const getCachedNews = () =>
      JSON.parse(sessionStorage.getItem("cachedNews")) || [];

    const setCachedNews = (data) => {
      sessionStorage.setItem("cachedNews", JSON.stringify(data));
    };

    fetchData();
  }, []);

  const showNewsByIndex = (index) => {
    setCurrentIndex(index);
  };

  return { news, currentIndex, showNewsByIndex };
};

export default useNews;

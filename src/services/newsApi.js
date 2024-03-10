import axios from "axios";

const API_KEY = import.meta.env.VITE_NEWS_API;

const fetchNews = async () => {
  try {
    const response = await axios.get(`${API_KEY}`);
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};

export { fetchNews };

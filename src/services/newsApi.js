import axios from "axios";

const API_KEY =  import.meta.env.VITE_NEWS

const fetchNews = async () => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=ar&category=technology&apiKey=${API_KEY}`
    );
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};

export { fetchNews };

import axios from "axios";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

const fetchNews = async () => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${API_KEY}`,
      { mode: 'no-cors' }
    );
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};

export { fetchNews };


/* import axios from "axios";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

const fetchNews = async () => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&category=technology`,
      {
        headers: {
          'X-Api-Key': API_KEY,
        },
      }
    );
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};

export { fetchNews };
 */
import axios from "axios";

/* const API_KEY = "f2b8804ca23e402081c6d4eb42465a47"; */
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

    if (response.status === 200) {
      return response.data.articles;
    } else {
      console.error(`Error fetching news. Status: ${response.status}, Message: ${response.data.message}`);
      return [];
    }
  } catch (error) {
    console.error("Error fetching news:", error.message);
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
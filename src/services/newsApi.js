const API_KEY = import.meta.env.NEWS_API;
const NEWS_API_URL = `https://newsapi.org/v2/top-headlines?country=ar&category=technology`;

const fetchNews = async () => {
  try {
    const response = await fetch(NEWS_API_URL, {
      headers: {
        'X-Api-Key': API_KEY,
      },
    });

    if (response.ok) {
      const data = await response.json();
      return data.articles;
    } else {
      const errorData = await response.json();
      console.error(`Error fetching news. Status: ${response.status}, Message: ${errorData.message}`);
      return [];
    }
  } catch (error) {
    console.error("Error fetching news:", error.message);
    return [];
  }
};

export { fetchNews };

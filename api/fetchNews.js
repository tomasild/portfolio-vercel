// api/fetchNews.js

const NEWS_API = "f2b8804ca23e402081c6d4eb42465a47";
const NEWS_API_URL = `https://newsapi.org/v2/top-headlines?country=us&category=technology`;

const fetchNews = async () => {
  try {
    const response = await fetch(NEWS_API_URL, {
      headers: {
        "X-Api-Key": NEWS_API,
      },
    });

    if (response.ok) {
      const data = await response.json();
      return data.articles;
    } else {
      const errorData = await response.json();
      console.error(
        `Error fetching news. Status: ${response.status}, Message: ${errorData.message}`
      );
      return [];
    }
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};

export { fetchNews };

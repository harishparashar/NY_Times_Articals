import axios from "axios";
const API_URL = "https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json";
const API_KEY = process.env.REACT_APP_NYTIMES_API_KEY;

export const fetchArticles = async () => {
  try {
    const response = await axios.get(`${API_URL}?api-key=${API_KEY}`);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching articles:", error);
    return [];
  }
};

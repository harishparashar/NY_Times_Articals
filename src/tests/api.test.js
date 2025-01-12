import axios from "axios";
import { fetchArticles } from "../services/api";

jest.mock("axios"); // Mock axios
const API_URL = "https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json";
const API_KEY = process.env.REACT_APP_NYTIMES_API_KEY;
describe("fetchArticles", () => {
  const mockData = {
    data: {
      results: [
        { id: 1, title: "Article 1", abstract: "Abstract 1", url: "https://example.com/1" },
        { id: 2, title: "Article 2", abstract: "Abstract 2", url: "https://example.com/2" },
      ],
    },
  };

  it("should fetch articles successfully", async () => {
    // Mock axios.get to resolve with mockData
    axios.get.mockResolvedValueOnce(mockData);

    const articles = await fetchArticles();

    // Assertions
    expect(axios.get).toHaveBeenCalledWith(`${API_URL}?api-key=${API_KEY}`);
    expect(articles).toEqual(mockData.data.results);
  });

  it("should return an empty array on error", async () => {
    // Mock axios.get to reject with an error
    axios.get.mockRejectedValueOnce(new Error("Network Error"));

    const articles = await fetchArticles();

    // Assertions
    expect(axios.get).toHaveBeenCalledWith(`${API_URL}?api-key=${API_KEY}`);
    expect(articles).toEqual([]);
  });
});

import axios from "axios";

const BASE_URL = "http://localhost:8080/"; // Replace with your API base URL

export const fetchNews = async (keyword,interval, unit) => {
  const response = await axios.get(`${BASE_URL}api/news/newsGroupNewsByInterval?keyword=${keyword}&interval=${interval}&unit=${unit}`
  );
  return response.data;
};

export const groupNews = async (keyword, interval, unit) => {
    const response = await axios.get(`${BASE_URL}api/news/newsGroupNewsByInterval=${keyword}&interval=${interval}&unit=${unit}`
    );
    return response.data;
  };
  

export const toggleMode = async (mode) => {
  await axios.post(`/api/news/toggle-mode?mode=${mode}`);
};
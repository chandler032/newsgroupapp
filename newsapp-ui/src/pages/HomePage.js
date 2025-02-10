import React, { useState, useEffect } from "react";
import NewsList from "../components/NewsList";
import ToggleSwitch from "../components/ToggleSwitch";
import { fetchNews, toggleMode } from "../utils/api";
import { FilterComponent } from "../components/filterComponent";

const HomePage = () => {
  const [articles, setArticles] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [interval, setInterval] = useState("");
  const [unit,setUnit] = useState("");
  const [mode, setMode] = useState("online");

  const handleSearch = async () => {
    const data = await fetchNews(keyword,interval, unit);
    setArticles(data);
  };

  const handleToggle = async () => {
    const newMode = mode === "online" ? "offline" : "online";
    await toggleMode(newMode);
    setMode(newMode);
  };


  const onFilterChange = async (data) => {
console.log(data);
setInterval(data.interval);
setUnit(data.unit);
  };

  return (
    <div className="p-4">
      <ToggleSwitch mode={mode} toggleMode={handleToggle} />
      <FilterComponent onFilterChange = {onFilterChange}/>
      <div className="mt-4">
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search news..."
          className="p-2 border rounded-md w-full"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white p-2 rounded-md mt-2 w-full"
        >
          Search
        </button>
      </div>
      <NewsList data={articles} />
    </div>
  );
};

export default HomePage;

import React, { useState } from "react";
import ReactDOM from "react-dom/client"
import ToggleSwitch from "./src/components/ToggleSwitch";
import HomePage from "./src/pages/HomePage";


function App() {
  const [mode, setMode] = useState("offline");
  const [loading, setLoading] = useState(false); // Add loading state

  const toggleMode = () => {
    setLoading(true); // Show loading when toggling
    const newMode = mode === "online" ? "offline" : "online";
    setMode(newMode);
    fetch(`/api/news/toggle-mode?mode=${newMode}`, { method: "POST" })
      .then((response) => {
        if (!response.ok) {
          console.error("Failed to update mode on the server");
        }
        setLoading(false); // Hide loading
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  };

  if (loading) return <p>Loading...</p>; // Show loading fallback

  return (
    <div className="App">
      <h1>News1 App</h1>
      {/* <ToggleSwitch mode={mode} toggleMode={toggleMode} /> */}
      <HomePage />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)

export default App;

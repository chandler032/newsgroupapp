import React, { useState } from "react";
import axios from "axios"; // For making API calls

const ToggleSwitch = () => {
  const [isToggled, setIsToggled] = useState('online');

  // Function to handle toggle and API call
  const handleToggle = async () => {
    const newState =isToggled==='online'?'offline':'online';
    setIsToggled(newState);

    try {
      // Replace with your API endpoint
      const response = await axios.post(`http://localhost:8080/api/news/toggle-mode?mode=${isToggled}`, {
        isToggled: newState,
      });
      console.log("API Response:", response.data);
    } catch (error) {
      console.error("API Error:", error);
      // Revert toggle state if API call fails
      setIsToggled(!newState);
    }
  };

  return (
    <div>
      <button
        onClick={handleToggle}
        style={{
          padding: "10px 20px",
          backgroundColor: isToggled==='online' ? "green" : "gray",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        {isToggled==='online'? "ONLINE" : "OFFLINE"}
      </button>
    </div>
  );
};

export default ToggleSwitch;
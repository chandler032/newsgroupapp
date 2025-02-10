import { useState } from "react";

const FilterComponent = ({ onFilterChange }) => {
    const [unit, setUnit] = useState('HOURS');
    const [interval, setInterval] = useState(12);
  
    onFilterChange({ unit, interval });
    const handleUnitApply = (e) => {
      setUnit(e.target.value);
      onFilterChange({ unit, interval });
    };
    const handleIntervalApply = (e) => {
      setInterval(e.target.value);
      onFilterChange({ unit, interval });
    };
  
    return (
      <div className="flex items-center space-x-4 p-4">
        <select value={unit} onChange={(e)=>handleUnitApply(e)}>
          
            <option value="YEARS">Years</option>
            <option value="MONTHS">Months</option>
            <option value="WEEKS">Weeks</option>
            <option value="DAYS">Days</option>
            <option value="HOURS">Hours</option>
        
        </select>
  
        <input
          type="number"
          value={interval}
          onChange={(e) => handleIntervalApply(e)}
          className="w-24"
        />
  
  
      </div>
    );
  };
  
  export {FilterComponent };
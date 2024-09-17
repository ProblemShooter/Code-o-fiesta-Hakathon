import React, { useState } from 'react';

const equipmentList = [
  'Tractor',
  'Plough',
  'Harvester',
  'Seeder',
  'Sprayer',
  'Combine',
  'Baler',
  'Cultivator',
  'Disc Harrow',
  'Planter',
];

const Card = () => {
  const [equipmentName, setEquipmentName] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleEquipmentInputChange = (e) => {
    const value = e.target.value;
    setEquipmentName(value);

    // Filter the equipment list based on the input value
    if (value.length > 0) {
      const filteredSuggestions = equipmentList.filter((equipment) =>
        equipment.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setEquipmentName(suggestion);
    setSuggestions([]);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-96">
        <h2 className="text-xl font-semibold mb-4 text-gray-700 text-center">Search Equipment</h2>
        
        <div className="mb-4 relative">
          <label className="block text-gray-600 text-sm mb-2" htmlFor="equipmentName">
            Equipment Name
          </label>
          <input
            id="equipmentName"
            type="text"
            value={equipmentName}
            onChange={handleEquipmentInputChange}
            placeholder="Equipment name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {suggestions.length > 0 && (
            <ul className="absolute bg-white border border-gray-300 rounded-md mt-1 w-full max-h-40 overflow-y-auto z-10">
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-600 text-sm mb-2" htmlFor="pickupLocation">
            Pickup Location
          </label>
          <input
            id="pickupLocation"
            type="text"
            placeholder="Pickup location"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 text-sm mb-2" htmlFor="pickupDate">
            Pickup Date
          </label>
          <input
            id="pickupDate"
            type="date"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 text-sm mb-2" htmlFor="pickupTime">
            Time of Pickup
          </label>
          <input
            id="pickupTime"
            type="time"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="text-center">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

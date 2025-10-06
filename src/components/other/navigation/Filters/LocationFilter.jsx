"use client";

import { useState } from "react";

const LocationFilter = ({
  countries,
  provinces,
  cities,
  neighborhoods,
  locationFilter,
  setLocationFilter,
}) => {
  const [suggestions, setSuggestions] = useState([]);

  const availableLocations = [
    ...countries.map((country) => ({ ...country, type: "País" })),
    ...provinces.map((province) => ({ ...province, type: "Provincia" })),
    ...cities.map((city) => ({ ...city, type: "Ciudad" })),
    ...neighborhoods.map((n) => ({ ...n, type: "Barrio" })),
  ];

  const handleInputChange = (e) => {
    const value = e.target.value;
    setLocationFilter(value);
    const filtered = availableLocations.filter((loc) =>
      loc.name.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(value.length > 0 ? filtered : []);
  };

  const handleSuggestionClick = (name) => {
    setLocationFilter(name);
    setSuggestions([]);
  };

  const noMatches =
    locationFilter &&
    locationFilter.length > 0 &&
    suggestions.length === 0 &&
    !availableLocations.some(
      (loc) => loc.name.toLowerCase() === locationFilter.toLowerCase()
    );

  return (
    <div className="my-1">
      <p className="flex justify-between items-center">
        Ubicación:{" "}
        <span
          className={`${
            locationFilter ? "text-gray-500" : "text-red-500"
          } text-sm`}
        >
          Obligatiorio*
        </span>
      </p>
      <div className="relative w-full">
        <input
          type="text"
          value={locationFilter}
          onChange={handleInputChange}
          placeholder="Ingrese una Ciudad o Barrio"
          className="w-full py-2 border-2 border-secondary rounded-lg px-2"
        />

        {(suggestions.length > 0 || noMatches) && (
          <ul className="absolute z-50 w-full bg-white border border-gray-300 mt-1 rounded-md max-h-48 overflow-y-auto shadow-md">
            {suggestions.map((loc) => (
              <li
                key={loc.id}
                onClick={() => handleSuggestionClick(loc.name)}
                className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm flex justify-between"
              >
                <span>{loc.name}</span>
                <span className="text-gray-400 italic">{loc.type}</span>
              </li>
            ))}

            {noMatches && (
              <li className="px-3 py-2 text-sm text-gray-500 italic">
                No tenemos propiedades disponibles en{" "}
                <span className="font-medium">"{locationFilter}"</span>
              </li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default LocationFilter;

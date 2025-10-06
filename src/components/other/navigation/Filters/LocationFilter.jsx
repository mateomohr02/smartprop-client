"use client";

import { useState } from "react";
import { normalizeText } from "@/utils/normalizeText"

const LocationFilter = ({
  countries,
  provinces,
  cities,
  neighborhoods,
  locationFilter,          
  setLocationFilter,        
  setLocationTypeFilter,
  displayLocation,
  setDisplayLocation
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
    setDisplayLocation(value);
    const normalizedValue = normalizeText(value);
    const filtered = availableLocations.filter((loc) =>
      normalizeText(loc.name).includes(normalizedValue)
    );
    setSuggestions(value.length > 0 ? filtered : []);
  };

  const handleSuggestionClick = (loc) => {
    setDisplayLocation(loc.name);              // mostramos el nombre
    setLocationFilter(loc.slug);            // guardamos el slug
    setLocationTypeFilter(loc.type);        // guardamos el tipo
    setSuggestions([]);                     // cerramos el listado
  };

  const noMatches =
    displayLocation &&
    displayLocation.length > 0 &&
    suggestions.length === 0 &&
    !availableLocations.some(
      (loc) => normalizeText(loc.name) === normalizeText(displayLocation)
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
          Obligatorio*
        </span>
      </p>
      <div className="relative w-full">
        <input
          type="text"
          value={displayLocation}
          onChange={handleInputChange}
          placeholder="Ingrese una Ciudad o Barrio"
          className="w-full py-2 border-2 border-secondary rounded-lg px-2"
        />

        {(suggestions.length > 0 || noMatches) && (
          <ul className="absolute z-50 w-full bg-white border border-gray-300 mt-1 rounded-md max-h-48 overflow-y-auto shadow-md">
            {suggestions.map((loc) => (
              <li
                key={loc.id}
                onClick={() => handleSuggestionClick(loc)}
                className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm flex justify-between"
              >
                <span>{loc.name}</span>
                <span className="text-gray-400 italic">{loc.type}</span>
              </li>
            ))}

            {noMatches && (
              <li className="px-3 py-2 text-sm text-gray-500 italic">
                No tenemos propiedades disponibles en{" "}
                <span className="font-medium">"{displayLocation}"</span>
              </li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default LocationFilter;

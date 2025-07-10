'use client'

import { use, useState, useEffect } from "react"

const LocationSearch = ({ filtersPromise, location, setLocation }) => {
  const filters = use(filtersPromise)

  const [suggestions, setSuggestions] = useState([])

  // Unificamos ciudades y barrios en un solo array con tipo
  const availableLocations = [
    ...filters.cities.map(city => ({ ...city, type: "Ciudad" })),
    ...filters.neighborhoods.map(n => ({ ...n, type: "Barrio" }))
  ]

  const handleInputChange = (e) => {
    const value = e.target.value
    setLocation(value)

    const filtered = availableLocations.filter(loc =>
      loc.name.toLowerCase().includes(value.toLowerCase())
    )

    setSuggestions(value.length > 0 ? filtered : [])
  }

  const handleSuggestionClick = (name) => {
    setLocation(name)
    setSuggestions([])
  }

  // Nuevo: sólo mostrar el mensaje si el texto no coincide exactamente con ningún lugar
  const noMatches =
    location.length > 0 &&
    suggestions.length === 0 &&
    !availableLocations.some((loc) => loc.name.toLowerCase() === location.toLowerCase())

  return (
    <div className="relative w-full">
      <input
        type="text"
        value={location}
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
              <span className="font-medium">"{location}"</span>
            </li>
          )}
        </ul>
      )}
    </div>
  )
}

export default LocationSearch

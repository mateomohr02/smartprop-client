"use client";
import React from "react";

const GaragesFilter = ({ garages, setGarages }) => {
  const options = [1, 2, 3, 4, 5];

  return (
    <div className="flex flex-col w-full">
      <p className="my-1 text-center">Garages:</p>
      <div className="flex items-center gap-4 my-1 w-full justify-evenly">
        {options.map((num) => (
          <label
            key={num}
            className={`flex items-center cursor-pointer text-gray-700 text-sm select-none ${
              garages === num ? "font-bold text-black" : ""
            }`}
          >
            <input
              type="radio"
              name="garages"
              value={num}
              checked={garages === num}
              onChange={() => setGarages(num)}
              className="hidden"
            />
            <span
              className={`w-4 h-4 mr-1 rounded-full border-2 flex items-center justify-center transition-colors duration-200 ${
                garages === num
                  ? "border-black bg-black"
                  : "border-gray-400"
              }`}
            >
              {garages === num && (
                <span className="w-2 h-2 bg-white rounded-full"></span>
              )}
            </span>
            +{num}
          </label>
        ))}
      </div>
    </div>
  );
};

export default GaragesFilter;

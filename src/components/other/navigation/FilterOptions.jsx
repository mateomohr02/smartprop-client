"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import OperationFilter from "./Filters/OperationFilter";
import PropertyTypeFilter from "./Filters/PropertyTypeFilter";

import PriceRangeFilter from "./Filters/PriceRangeFilter";
import ExpensesRangeFilter from "./Filters/ExpensesRangeFilter";

import RoomsFilter from "./Filters/RoomsFilter";
import BedroomsFilter from "./Filters/BedroomsFilter";

import BathroomsFilter from "./Filters/BathroomsFilter";
import GaragesFilter from "./Filters/GaragesFilter";

import RoomTypesFilter from "./Filters/RoomTypesFilter";

import ComoditiesFilter from "./Filters/ComoditiesFilter";

import CharacteristicsFilter from "./Filters/CharacteristicsFilter";

const FilterOptions = ({ options, setShowFilters }) => {
  const [operation, setOperation] = useState(null);
  const [propertyType, setPropertyType] = useState(null);
  const [priceRange, setPriceRange] = useState([null, null]);
  const [priceFIAT, setPriceFIAT] = useState("ARS");
  const [expensesRange, setExpensesRange] = useState([null, null]);
  const [expensesFIAT, setExpensesFIAT] = useState("ARS");
  const [rooms, setRooms] = useState([null, null]);
  const [bedrooms, setBedrooms] = useState([null, null]);
  const [bathrooms, setBathrooms] = useState(0);
  const [garages, setGarages] = useState(0);
  const [roomTypes, setRoomTypes] = useState([]);
  const [comodities, setComodities] = useState([]);
  const [characteristics, setCharacteristics] = useState([]);
  const [services, setServices] = useState([]);

  return (
    <AnimatePresence>
      <motion.div
        className="flex flex-col p-2 gap-2 bg-contrast"
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="flex gap-2">
          <OperationFilter operation={operation} setOperation={setOperation} />
          <PropertyTypeFilter
            options={options}
            propertyType={propertyType}
            setPropertyType={setPropertyType}
          />
        </div>
        <div className="flex gap-2">
          <PriceRangeFilter
            priceRange={priceRange}
            priceFIAT={priceFIAT}
            setPriceFIAT={setPriceFIAT}
            setPriceRange={setPriceRange}
          />
          <ExpensesRangeFilter
            expensesRange={expensesRange}
            setExpensesRange={setExpensesRange}
            expensesFIAT={expensesFIAT}
            setExpensesFIAT={setExpensesFIAT}
          />
        </div>
        <div className="flex gap-2">
          <RoomsFilter rooms={rooms} setRooms={setRooms} />
          <BedroomsFilter bedrooms={bedrooms} setBedrooms={setBedrooms} />
        </div>

        <BathroomsFilter bathrooms={bathrooms} setBathrooms={setBathrooms} />
        <GaragesFilter garages={garages} setGarages={setGarages} />

        <RoomTypesFilter
          options={options.availableRooms}
          roomTypes={roomTypes}
          setRoomTypes={setRoomTypes}
        />
        <ComoditiesFilter
          options={options.availableComodities}
          comodities={comodities}
          setComodities={setComodities}
        />
        <CharacteristicsFilter
          options={options.availableCharacteristics}
          characteristics={characteristics}
          setCharacteristics={setCharacteristics}
        />
        {/* <ServicesFilter options={options.services} /> */}

        <button onClick={() => setShowFilters(false)}>Ocultar Filtros</button>
      </motion.div>
    </AnimatePresence>
  );
};

export default FilterOptions;

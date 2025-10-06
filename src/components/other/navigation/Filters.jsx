"use client";

import { use } from "react";
import FilterOptions from "./FilterOptions";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Filters = ({ filtersPromise, showFilters, setShowFilters }) => {
  const filters = use(filtersPromise);

  const [locationFilter, setLocationFilter] = useState(null);
  const [locationTypeFilter, setLocationTypeFilter] = useState(null);
  const [displayLocation, setDisplayLocation] = useState("");
  const [operation, setOperation] = useState(null);
  const [propertyType, setPropertyType] = useState(null);
  const [priceRange, setPriceRange] = useState([null, null]);
  const [priceFIAT, setPriceFIAT] = useState(null);
  const [expensesRange, setExpensesRange] = useState([null, null]);
  const [expensesFIAT, setExpensesFIAT] = useState(null);
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
      {showFilters ? (
        <motion.div layout>
          <FilterOptions
            options={filters}
            setShowFilters={setShowFilters}
            locationFilter={locationFilter}
            locationTypeFilter={locationTypeFilter}
            displayLocation={displayLocation}
            setDisplayLocation={setDisplayLocation}
            setLocationFilter={setLocationFilter}
            setLocationTypeFilter={setLocationTypeFilter}
            operation={operation}
            setOperation={setOperation}
            propertyType={propertyType}
            setPropertyType={setPropertyType}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            priceFIAT={priceFIAT}
            setPriceFIAT={setPriceFIAT}
            expensesRange={expensesRange}
            setExpensesRange={setExpensesRange}
            expensesFIAT={expensesFIAT}
            setExpensesFIAT={setExpensesFIAT}
            rooms={rooms}
            setRooms={setRooms}
            bedrooms={bedrooms}
            setBedrooms={setBedrooms}
            bathrooms={bathrooms}
            setBathrooms={setBathrooms}
            garages={garages}
            setGarages={setGarages}
            roomTypes={roomTypes}
            setRoomTypes={setRoomTypes}
            comodities={comodities}
            setComodities={setComodities}
            characteristics={characteristics}
            setCharacteristics={setCharacteristics}
            services={services}
            setServices={setServices}
          />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default Filters;

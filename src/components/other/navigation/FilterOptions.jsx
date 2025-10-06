"use client";

import { motion, AnimatePresence } from "framer-motion";

import LocationFilter from "./Filters/LocationFilter";

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

import SendResetButtons from "./Filters/SendResetButtons";

const FilterOptions = ({
  options,
  setShowFilters,
  locationFilter,
  setLocationFilter,
  locationTypeFilter,
  setLocationTypeFilter,
  displayLocation,
  setDisplayLocation,
  operation,
  setOperation,
  propertyType,
  setPropertyType,
  priceRange,
  setPriceRange,
  priceFIAT,
  setPriceFIAT,
  expensesRange,
  setExpensesRange,
  expensesFIAT,
  setExpensesFIAT,
  rooms,
  setRooms,
  bedrooms,
  setBedrooms,
  bathrooms,
  setBathrooms,
  garages,
  setGarages,
  roomTypes,
  setRoomTypes,
  comodities,
  setComodities,
  characteristics,
  setCharacteristics,
  services,
  setServices,
}) => {
  const resetFilters = () => {
    setLocationFilter(null);
    setLocationTypeFilter(null);
    setDisplayLocation("");
    setOperation(null);
    setPropertyType(null);
    setPriceRange([null, null]);
    setPriceFIAT(null);
    setExpensesRange([null, null]);
    setExpensesFIAT(null);
    setRooms([null, null]);
    setBedrooms([null, null]);
    setBathrooms(0);
    setGarages(0);
    setRoomTypes([]);
    setComodities([]);
    setCharacteristics([]);
    setServices([]);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="flex flex-col p-2 gap-2 bg-contrast"
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <LocationFilter
          countries={options.countries}
          provinces={options.provinces}
          cities={options.cities}
          neighborhoods={options.neighborhoods}
          locationFilter={locationFilter}
          setLocationFilter={setLocationFilter}
          setLocationTypeFilter={setLocationTypeFilter}
          displayLocation={displayLocation}
          setDisplayLocation={setDisplayLocation}
        />

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
        <SendResetButtons
          filters={{
            locationFilter,
            locationTypeFilter,
            operation,
            propertyType,
            priceRange,
            priceFIAT,
            expensesRange,
            expensesFIAT,
            rooms,
            bedrooms,
            bathrooms,
            garages,
            roomTypes,
            comodities,
            characteristics,
            services,
          }}
          setShowFilters={setShowFilters}
          resetFilters={resetFilters}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default FilterOptions;

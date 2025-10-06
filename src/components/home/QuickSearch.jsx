'use client'

import { useState } from "react"
import Operation from "./Operation"
import SearchButton from "./SearchButton"
import PropertyTypeSelector from "./PropertyTypeSelector"
import LocationSearch from "./LocationSearch"

const QuickSearch = ( { filtersPromise } ) => {
    const [operation, setOperation] = useState(null);
    const [propertyType, setPropertyType] = useState(null);
    const [location, setLocation] = useState("");
    const [locationType, setLocationType] = useState(null);
    const [locationSlug, setLocationSlug] = useState("");

  return (
    <div className="relative w-[90%] md:w-[40%] mx-auto p-2 bg-contrast rounded-lg flex flex-col gap-2 -translate-y-1/2 z-30">
    <Operation operation={operation} setOperation={setOperation} filtersPromise={filtersPromise}/>
    <PropertyTypeSelector propertyType={propertyType} setPropertyType={setPropertyType} filtersPromise={filtersPromise}/>
    <LocationSearch location={location} setLocation={setLocation} locationSlug={locationSlug} setLocationSlug={setLocationSlug} locationType={locationType} setLocationType={setLocationType} filtersPromise={filtersPromise}/>
    <SearchButton location={location} locationSlug={locationSlug} operation={operation} locationType={locationType} propertyType={propertyType} />
    </div>
  )
}

export default QuickSearch
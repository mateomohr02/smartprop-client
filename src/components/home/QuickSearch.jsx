'use client'

import { useState } from "react"
import Operation from "./Operation"
import SearchButton from "./SearchButton"
import PropertyTypeSelector from "./PropertyTypeSelector"
import LocationSearch from "./LocationSearch"


const QuickSearch = ( { filtersPromise } ) => {
    const [operation, setOperation] = useState(null);
    const [propertyType, setPropertyType] = useState(null);
    const [location, setLocation] = useState('');
    
  return (
    <div className="relative w-[340px] mx-auto p-2 bg-contrast rounded-lg flex flex-col gap-2 -translate-y-1/2 z-30">
    <Operation operation={operation} setOperation={setOperation} filtersPromise={filtersPromise}/>
    <PropertyTypeSelector propertyType={propertyType} setPropertyType={setPropertyType} filtersPromise={filtersPromise}/>
    <LocationSearch location={location} setLocation={setLocation} filtersPromise={filtersPromise}/>
    <SearchButton/>
    </div>
  )
}

export default QuickSearch
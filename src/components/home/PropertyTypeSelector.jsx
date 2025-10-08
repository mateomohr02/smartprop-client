'use client'

import { use } from "react"

import { ChevronDown } from "lucide-react"

const PropertyTypeSelector = ({ filtersPromise, propertyType, setPropertyType }) => {

  const { availablePropertyTypes } = use(filtersPromise);

  console.log(availablePropertyTypes, 'availablePropertyTypes');
  

  return (  
    <div className="relative w-full">
      <select
        name="propertyType"
        defaultValue={propertyType === null ? 'Seleccione el Tipo de Propiedad' : propertyType}
        className="appearance-none w-full py-2 border-2 border-secondary rounded-lg px-3 pr-10 bg-white text-gray-700"
        onChange={(e) => setPropertyType(e.target.value)}
      > 
        <option value="Seleccione el Tipo de Propiedad" disabled>Seleccione el Tipo de Propiedad</option>
        {availablePropertyTypes.map(p => {
          return <option key={p.slug} value={p.slug} >{p.name}</option>
        })}
      </select>

      <ChevronDown
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-secondary pointer-events-none"
        size={18}
      />
    </div>
  )
}

export default PropertyTypeSelector

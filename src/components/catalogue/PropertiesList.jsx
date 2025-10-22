"use client";

import { use } from "react";

import PropertyCard from "./PropertyCard";


const PropertiesList = ({ propertiesPromise }) => {
  const properties = use(propertiesPromise);

  return (
    <div className="flex justify-center flex-col gap-6 items-center py-6 ">
      {properties.map((p) => {
        return(
        <PropertyCard key={p.id} linkTo={`/propiedades/${p.slug}`} property={p}/>
      )})}
    </div>
  );
};

export default PropertiesList;

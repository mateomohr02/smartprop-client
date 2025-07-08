"use client";

import { use, useState } from "react";
import FilterOptions from "./FilterOptions";

const Filters = ({ filtersPromise }) => {
  const [show, setShow] = useState(false);

  const filters = use(filtersPromise);

  console.log(filters, "FILTER COMPONENT");

  return (
    <div>
      {show ? (
        <>
          <FilterOptions options={filters} />
          <button onClick={() => setShow(false)} >Ocultar Filtros</button>
        </>
      ) : (
        <button onClick={() => setShow(true)}>Mostrar Filtros</button>
      )}
    </div>
  );
};

export default Filters;

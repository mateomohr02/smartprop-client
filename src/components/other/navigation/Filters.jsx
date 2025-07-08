"use client";

import { use } from "react";
import FilterOptions from "./FilterOptions";

const Filters = ({ filtersPromise, showFilters, setShowFilters }) => {

  const filters = use(filtersPromise);

  return (
    <>
      {showFilters ? (
        <div>
          <FilterOptions options={filters} setShowFilters={setShowFilters} />
        </div >
      ) : null}
    </>
  );
};

export default Filters;

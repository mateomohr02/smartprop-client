"use client";

import { use } from "react";
import FilterOptions from "./FilterOptions";
import { motion, AnimatePresence } from "framer-motion";

const Filters = ({ filtersPromise, showFilters, setShowFilters }) => {
  const filters = use(filtersPromise);

  return (
    <AnimatePresence>
      {showFilters ? (
        <motion.div layout>
          <FilterOptions options={filters} setShowFilters={setShowFilters} />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default Filters;

"use client";

import { motion, AnimatePresence } from "framer-motion";

const FilterOptions = ({ options, setShowFilters }) => {
  return (
    <AnimatePresence>
      <motion.div
        className="flex flex-col"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        FilterOptions
        <button onClick={() => setShowFilters(false)}>Ocultar Filtros</button>
      </motion.div>
    </AnimatePresence>
  );
};

export default FilterOptions;

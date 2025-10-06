"use client";

import { MapPinned, SlidersHorizontal } from "lucide-react";
import Link from "next/link";

import { motion, AnimatePresence } from "framer-motion";

const MapFilter = ({ showFilters, showLinks, setShowLinks, setShowFilters }) => {
  return (
    <AnimatePresence>
      <motion.div
        className="flex w-full border-y border-third bg-contrast"
        layout
      >
        <Link
          href="/mapa"
          className="flex w-[50%] justify-center py-2 items-center gap-1"
        >
          Ver Mapa <MapPinned strokeWidth={1} size={16} />
        </Link>
        <button 
          onClick={() => {
            setShowFilters(false);
          }}
          className={`${showFilters ? "flex" : "hidden" } w-[50%] justify-center py-2 items-center gap-1`}
          >
          Ocultar Filtros <SlidersHorizontal strokeWidth={1} size={16} />
        </button>

        <button
          onClick={() => {
            setShowFilters(true);
            setShowLinks(false);
          }}
          className={`${showFilters ? "hidden" : "flex" } w-[50%] justify-center py-2 items-center gap-1`}
        >
          {" "}
          Filtrar <SlidersHorizontal strokeWidth={1} size={16} />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

export default MapFilter;

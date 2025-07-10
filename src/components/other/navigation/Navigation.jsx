"use client";

import Image from "next/image";
import Link from "next/link";

import NavToggle from "./NavToggle";
import NavLinks from "./NavLinks";
import MapFilter from "./MapFilter";
import Filters from "./Filters";

import { useState } from "react";

import { motion } from "framer-motion";

const Navigation = ({ filtersPromise }) => {
  const [showLinks, setShowLinks] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="flex flex-col">
      <div className="flex justify-between px-4 py-2 bg-primary z-50 ">
        <Link
          href="/"
          onClick={() => {
            setShowLinks(false);
            setShowFilters(false);
          }}
          aria-label="Ir al Menú de Inicio"
        >
          <Image
            alt="Logo Inmobiliaria"
            src="/logo.svg"
            width={80}
            height={80}
          />
        </Link>

        <NavToggle
          show={showLinks}
          setShow={setShowLinks}
          showFilters={showFilters}
          setShowFilters={setShowFilters}
        />
      </div>
      <motion.div layout className="bg-contrast">
        <NavLinks
          show={showLinks}
          setShow={setShowLinks}
          showFilters={showFilters}
          setShowFilters={setShowFilters}
        />

        <Filters
          filtersPromise={filtersPromise}
          setShowLinks={setShowLinks}
          showFilters={showFilters}
          setShowFilters={setShowFilters}
        />

        <MapFilter
          showFilters={showFilters}
          showLinks={showLinks}
          setShowLinks={setShowLinks}
          setShowFilters={setShowFilters}
        />
      </motion.div>
    </div>
  );
};

export default Navigation;

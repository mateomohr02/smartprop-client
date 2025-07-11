"use client";

import { Menu, X } from "lucide-react";



const NavToggle = ({ show, setShow, setShowFilters }) => {
  return (
    <>
      {show ? (
        <button onClick={() => setShow(false)} aria-label="Cerrar Menú de Navegación"><X className="text-contrast" /></button>
      ) : (
        <button
          onClick={() => {
            setShow(true);
            setShowFilters(false);
          }}
          aria-label="Abrir Menú de Navegación"
        >
          <Menu className="text-contrast"/>
        </button>
      )}
    </>
  );
};

export default NavToggle;

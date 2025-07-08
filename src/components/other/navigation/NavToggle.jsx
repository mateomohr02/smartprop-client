"use client";

import { Menu, X } from "lucide-react";



const NavToggle = ({ show, setShow, setShowFilters }) => {
  return (
    <>
      {show ? (
        <button onClick={() => setShow(false)}><X className="text-contrast"/></button>
      ) : (
        <button
          onClick={() => {
            setShow(true);
            setShowFilters(false);
          }}
        >
          <Menu className="text-contrast"/>
        </button>
      )}
    </>
  );
};

export default NavToggle;

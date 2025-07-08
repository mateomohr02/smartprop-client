"use client";

import { Menu, X } from "lucide-react";



const NavToggle = ({ show, setShow, setShowFilters }) => {
  return (
    <>
      {show ? (
        <button onClick={() => setShow(false)}><X strokeWidth={1}/></button>
      ) : (
        <button
          onClick={() => {
            setShow(true);
            setShowFilters(false);
          }}
        >
          <Menu strokeWidth={1}/>
        </button>
      )}
    </>
  );
};

export default NavToggle;

"use client";

import Link from "next/link";
import { useState } from "react";

const NavLinks = () => {
  
    const [showLinks, setShowLinks] = useState(false);

  return (
    <>
      {showLinks ? (
        <div>
          <ul>
            <li>
              <Link href="/">Inicio</Link>
            </li>
            <li>
              <Link href="/propiedades">Propiedades</Link>
            </li>
          </ul>
        </div>
      ) : (
        <button onClick={() => setShowLinks(true)}>Mostrar Links</button>
      )}
    </>
  );
};

export default NavLinks;

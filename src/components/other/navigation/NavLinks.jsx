"use client";

import { motion, AnimatePresence } from "framer-motion";
import NavLinkButton from "./NavLinkButton";

const NavLinks = ({ show, setShow }) => {
  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          className="w-full flex flex-col items-center px-4 bg-contrast z-40"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <NavLinkButton
            href="/propiedades"
            text="Propiedades"
            setShow={setShow}
          />
          <NavLinkButton
            href="/publicar"
            text="Publicamos tu Propiedad"
            setShow={setShow}
          />
          <NavLinkButton
            href="/contacto"
            text="Contacto"
            setShow={setShow}
          />

          <NavLinkButton
            href="/servicios"
            text="Servicios"
            setShow={setShow}
          />

          <NavLinkButton
            href="/sobre-nosotros"
            text="Sobre Nosotros"
            setShow={setShow}
          />

          <NavLinkButton
            href="/blog"
            text="Nuestro Blog"
            setShow={setShow}
          />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default NavLinks;

"use client";

import { motion } from "framer-motion";

const CookiesButtons = ({ setCookieConsent }) => {
  return (
    <motion.div className="flex gap-2 justify-end w-full" layout>
      <button className="text-primary/80 hover:bg-red-200 rounded-lg px-4 py-2">
        Rechazar
      </button>
      <button
        className="border-secondary rounded-lg border-2 px-4 py-2 hover:bg-secondary/20 transition-transform duration-300 trans"
        onClick={() => {
          setCookieConsent(true);
        }}
      >
        Aceptar
      </button>
    </motion.div>
  );
};

export default CookiesButtons;

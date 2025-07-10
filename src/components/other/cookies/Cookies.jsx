"use client";

import CookiesButtons from "./CookiesButtons";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Cookies = () => {
  const [cookieConsent, setCookieConsent] = useState(false);
  return (
    <AnimatePresence>
      {cookieConsent === null && (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-5 bg-contrast left-1/2 -translate-x-1/2 rounded-lg border-secondary border-2 min-w-[320px] max-w-[calc(100vw-20px)] pb-2 px-4 pt-6"
        >
          <h3 className="font-semibold mb-2">Aviso de privacidad</h3>
          <p className="mb-2">
            Utilizamos cookies para mejorar la experiencia de los usuarios y con
            fines publicitarios. No recolectamos información personal.
          </p>
          <CookiesButtons setCookieConsent={setCookieConsent} />
        </motion.div>
      )}
      ;
    </AnimatePresence>
  );
};

export default Cookies;

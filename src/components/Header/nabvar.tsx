"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menus } from "../ui-elements/Navbar/menus";
import { Diamond, Menu as MenuIcon, X } from "lucide-react";

function TimingBar({ show }: { show: boolean }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="w-full py-2 bg-[#9288f8] text-center font-semibold text-black"
        >
          Mon — SAT: 6.00 am — 10.00 pm &nbsp; • &nbsp; Sun: Closed
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Navbar() {
  const [showTiming, setShowTiming] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowTiming(window.scrollY < 30);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full bg-transparent">
      <TimingBar show={showTiming} />
      <div className="w-full bg-[#dddddd] flex items-center justify-between px-8 py-4 shadow transition-all">
        {/* Logo/Brand */}
        <span className="font-bold text-2xl flex items-center">
          <span className="mr-2 text-3xl">
            <Diamond />
          </span>
          Consultant
        </span>

        {/* Desktop Menu: hidden on mobile */}
        <div className="hidden md:block">
          <Menus />
        </div>

        {/* Mobile Burger Button: visible on mobile */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="md:hidden flex items-center justify-center text-black transition"
          aria-label="Open menu"
        >
          {mobileOpen ? <X size={28} /> : <MenuIcon size={28} />}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg z-30"
          >
            <div className="px-8 py-6 border-b border-gray-100">
              <Menus onClickMenuItem={() => setMobileOpen(false)} />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

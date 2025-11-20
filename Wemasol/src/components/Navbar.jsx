import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="
      w-full fixed top-0 left-0 z-50
      backdrop-blur-xl bg-white/10 border-b border-white/20
      text-white
    ">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-semibold tracking-wide drop-shadow-sm"
        >
          Wemasol
        </Link>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-lg">
          <Link className="hover:text-lime-300 transition" to="/">Home</Link>
          <Link className="hover:text-lime-300 transition" to="/about">About</Link>
          <Link className="hover:text-lime-300 transition" to="/contact">Contact</Link>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300
          ${open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="flex flex-col items-center gap-4 py-4 text-lg bg-white/10 backdrop-blur-xl">
          <Link onClick={() => setOpen(false)} className="hover:text-lime-300" to="/">Home</Link>
          <Link onClick={() => setOpen(false)} className="hover:text-lime-300" to="/about">About</Link>
          <Link onClick={() => setOpen(false)} className="hover:text-lime-300" to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#hero", label: "الرئيسية" },
  { href: "#problematic", label: "الإشكالية" },
  { href: "#objectives", label: "الأهداف" },
  { href: "#value", label: "القيمة المضافة" },
  { href: "#results", label: "النتائج" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "navbar-blur shadow-2xl" : "bg-transparent"
      }`}
    >
      <div className="container-max">
        {/* flex-row in RTL: logo renders on the right, CTA on the left */}
        <div className="flex items-center justify-between h-18 py-3 px-4 sm:px-6 lg:px-8">

          {/* Logo — first in DOM → renders on the RIGHT in RTL */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => handleNavClick("#hero")}
          >
            <div>
              <div className="text-white font-bold text-sm leading-tight">منصة ذكية</div>
              <div className="text-[#c9a227] text-xs font-medium">للإيواء والسياحة</div>
            </div>
          </div>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                  activeSection === link.href.slice(1)
                    ? "bg-[#c9a227] text-[#0a1628]"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA — last in DOM → renders on the LEFT in RTL */}
          <div className="hidden lg:block">
            <div className="px-5 py-2 rounded-full bg-gradient-to-r from-[#c9a227] to-[#f0c040] text-[#0a1628] text-sm font-bold shadow-lg">
              مشروع - 2026
            </div>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="navbar-blur px-4 pb-4 pt-2 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`w-full px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeSection === link.href.slice(1)
                  ? "bg-[#c9a227] text-[#0a1628]"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

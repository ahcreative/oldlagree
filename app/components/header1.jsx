"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 py-3 h-[100px] flex justify-center items-center transition-all duration-300 ${
        isScrolled ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/logo.png" className="h-12 ml-2 block" alt="Logo" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center font-medium pr-10 uppercase space-x-8">
            <a
              href="#mega-may"
              className="text-white hover:text-gray-300 transition"
            >
              Mega May
            </a>
            <a
              href="#about"
              className="text-white hover:text-gray-300 transition"
            >
              About
            </a>
            <a
              href="#account"
              className="text-white hover:text-gray-300 transition"
            >
              My Account
            </a>
            <a
              href="#book"
              className="text-white hover:text-gray-300 transition "
            >
              Book/Buy
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-95 z-50 pt-20">
          <div className="flex flex-col items-center space-y-8 p-4">
            <a
              href="#mega-may"
              className="text-white text-xl hover:text-gray-300 transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Mega May
            </a>
            <a
              href="#about"
              className="text-white text-xl hover:text-gray-300 transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#account"
              className="text-white text-xl hover:text-gray-300 transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              My Account
            </a>
            <a
              href="#book"
              className="text-white text-xl hover:text-gray-300 transition font-semibold bg-blue-600 px-6 py-3 rounded-md hover:bg-blue-700"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book/Buy
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;

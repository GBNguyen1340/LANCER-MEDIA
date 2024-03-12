"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-white shadow-md transition-all duration-300 ease-in-out ${
        isScrolled ? "bg-opacity-90" : "bg-opacity-100"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        <Link href="/" className="flex items-center">
          <img src="/lancerLogo.jpg" alt="Logo" className="w-10 h-10 mr-4" />
          <span className="text-xxl font-bold text-gray-800">Lancer Media</span>
        </Link>
        <ul className="hidden md:flex space-x-10 text-gray-700">
          <li>
            <Link href="/" className="hover:bg-amber-400 hover:text-white px-3 py-2 rounded-md transition-all duration-300 ease-in-out font-medium">
              Trang chủ
            </Link>
          </li>
          <li>
            <Link href="/talents" className="hover:bg-amber-400 hover:text-white px-3 py-2 rounded-md transition-all duration-300 ease-in-out font-medium">
              Talents
            </Link>
          </li>
          <li>
            <Link href="/studio" className="hover:bg-amber-400 hover:text-white px-3 py-2 rounded-md transition-all duration-300 ease-in-out font-medium">
              Đặt Studio
            </Link>
          </li>
          <li>
            <Link href="/news" className="hover:bg-amber-400 hover:text-white px-3 py-2 rounded-md transition-all duration-300 ease-in-out font-medium">
              Tin tức
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:bg-amber-400 hover:text-white px-3 py-2 rounded-md transition-all duration-300 ease-in-out font-medium">
              Liên hệ
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;

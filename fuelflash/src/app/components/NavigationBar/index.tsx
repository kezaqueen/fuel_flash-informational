"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  const handleLinkClick = (path: string) => {
    setActiveLink(path);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white border-b border-border">
      <div className="w-full px-0 py-4">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2 pl-4 xl:pl-16 ">
            <Image
              src="/images/logo.png"
              alt="logo image"
              width={350}
              height={350}
              className="w-auto h-16"
            />
          </div>

          <nav className="hidden md:flex items-center gap-8 text-gray-950 pr-24 font-medium text-base sm:text-lg md:text-xl xl:text-2xl">
            <Link
              href="#home"
              className={`hover:text-[#A8610C] ${activeLink === "#home" ? "text-[#A8610C]" : ""}`}
              onClick={() => handleLinkClick("#home")}
            >
              Home
            </Link>
        
            <Link
              href="#about"
              className={`hover:text-[#A8610C] ${activeLink === "#about" ? "text-[#A8610C]" : ""}`}
              onClick={() => handleLinkClick("#about")}
            >
              About
            </Link>
            <Link
              href="#how-it-works"
              className={`hover:text-[#A8610C] ${activeLink === "#how-it-works" ? "text-[#A8610C]" : ""}`}
              onClick={() => handleLinkClick("#how-it-works")}
            >
              How It Works
            </Link>
            <Link
              href="#benefits"
              className={`hover:text-[#A8610C] ${activeLink === "#benefits" ? "text-[#A8610C]" : ""}`}
              onClick={() => handleLinkClick("#benefits")}
            >
              Benefits
            </Link>
            <Link
              href="#contact"
              className={`hover:text-[#A8610C] ${activeLink === "#contact" ? "text-[#A8610C]" : ""}`}
              onClick={() => handleLinkClick("/contact")}
            >
              Contact
            </Link>
          </nav>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-950" />
            ) : (
              <Menu className="w-6 h-6 text-gray-950" />
            )}
          </button>
        </div>
        
        {isMenuOpen && (
          <nav className="md:hidden mt-4  flex flex-col gap-4 px-4  py-6 font-medium text-base sm:text-lg text-black ">
            <Link
              href="#home"
              className={`hover:text-[#A8610C] ${activeLink === "#home" ? "text-[#A8610C]" : ""}`}
              onClick={() => handleLinkClick("#home")}
            >
              Home
            </Link>
            <Link
              href="#how-it-works"
              className={`hover:text-[#A8610C] ${activeLink === "#how-it-works" ? "text-[#A8610C]" : ""}`}
              onClick={() => handleLinkClick("#how-it-works")}
            >
              How It Works
            </Link>
            <Link
              href="#about"
              className={`hover:text-[#A8610C] ${activeLink === "#about" ? "text-[#A8610C]" : ""}`}
              onClick={() => handleLinkClick("#about")}
            >
              About
            </Link>
            <Link
              href="#benefits"
              className={`hover:text-[#A8610C] ${activeLink === "#benefits" ? "text-[#A8610C]" : ""}`}
              onClick={() => handleLinkClick("#benefits")}
            >
              Benefits
            </Link>
            <Link
              href="#contact"
              className={`hover:text-[#A8610C] ${activeLink === "#contact" ? "text-[#A8610C]" : ""}`}
              onClick={() => handleLinkClick("#contact")}
            >
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Nav = () => {
  const [open, setOpen] = useState(false);

  const openNav = () => setOpen(!open);
  interface Nav {
    name: string;
    href: string;
  }
  const navLinks: Nav[] = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <header className="relative border-b border-lightGreen">
      {/* Centered container for desktop */}
      <div className="wrapper mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div>
            <Image
              src="/logo-white.webp"
              alt="kaizen soho london physiotherapist logo"
              width={150} // Intrinsic width
              height={50} // Intrinsic height
              style={{ width: "45px", height: "auto" }} // Rendered size
              blurDataURL="/logo-white.webp"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-12">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white hover:text-lightGreen transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={openNav}
              className="flex flex-col justify-center items-center z-50 relative"
            >
              <span
                className={`bg-lightGreen block transition-all duration-300 ease-out
                  h-0.5 w-10 rounded-sm ${open ? "rotate-45 translate-y-1" : ""}`}
              ></span>
              <span
                className={`bg-lightGreen block transition-all duration-300 ease-out
                  h-0.5 w-10 rounded-sm my-0.5 ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
              ></span>
              <span
                className={`bg-lightGreen block transition-all duration-300 ease-out
                  h-0.5 w-10 rounded-sm ${
                    open ? "-rotate-45 -translate-y-1" : ""
                  }`}
              ></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ease-in-out ${
          open
            ? "bg-green opacity-100 visible"
            : "bg-transparent opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <nav className="text-center">
            <ul className="space-y-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white text-3xl font-medium hover:text-lightGreen transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Nav;

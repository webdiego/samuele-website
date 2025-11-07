"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { BlurIn } from "./BlurIn";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Chiude il menu cliccando ovunque fuori
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [open]);

  return (
    <header className="relative z-50 w-full bg-black text-white text-sm shadow">
      <nav
        ref={navRef}
        className="max-w-4xl w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between py-3 relative"
      >
        {/* Brand + Burger */}
        <div className="flex items-center justify-between">
          <BlurIn delay={0.2}>
            <Link className="flex-none text-xl font-bold" href="#">
              SAMUELE SPRIANO
            </Link>
            <div className="sm:hidden">
              <button
                onClick={() => setOpen(!open)}
                className="relative size-9 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden"
              >
                {!open ? (
                  <svg
                    className="shrink-0 size-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="3" x2="21" y1="6" y2="6" />
                    <line x1="3" x2="21" y1="12" y2="12" />
                    <line x1="3" x2="21" y1="18" y2="18" />
                  </svg>
                ) : (
                  <svg
                    className="shrink-0 size-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                )}
              </button>
            </div>
          </BlurIn>
        </div>

        {/* MENU DESKTOP */}
        {isDesktop && (
          <BlurIn delay={0.2}>
            <div className="flex flex-row gap-5 items-center justify-end text-xs font-bold text-white uppercase">
              <Link className="hover:text-gray-300" href="#whoiam">
                Who I am
              </Link>
              <Link className="hover:text-gray-300" href="#">
                Personal training
              </Link>
              <Link className="hover:text-gray-300" href="#">
                My results
              </Link>
              <Link className="hover:text-gray-300" href="#">
                Contact
              </Link>
            </div>
          </BlurIn>
        )}

        {/* MENU MOBILE con animazione */}
        <div
          className={`absolute left-0 top-full w-full bg-black/95 text-white flex flex-col gap-5 text-left pl-5 uppercase text-xs font-bold py-6 transition-all duration-300 ease-in-out transform ${
            open
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-5 pointer-events-none"
          }`}
        >
          <Link
            onClick={() => setOpen(false)}
            className="hover:text-gray-300"
            href="#whoiam"
          >
            Who I am
          </Link>
          <Link
            onClick={() => setOpen(false)}
            className="hover:text-gray-300"
            href="#"
          >
            Personal training
          </Link>
          <Link
            onClick={() => setOpen(false)}
            className="hover:text-gray-300"
            href="#"
          >
            My results
          </Link>
          <Link
            onClick={() => setOpen(false)}
            className="hover:text-gray-300"
            href="#"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}

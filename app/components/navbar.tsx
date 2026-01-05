"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-black p-6 shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center px-4 md:px-6">
        <div className="text-xl font-bold text-white">
          Nupoor Patil
        </div>

        <div className="hidden sm:flex space-x-6">
          <Link href="/" className="text-white hover:text-indigo-500">Home</Link>
          <Link href="/projects" className="text-white hover:text-indigo-500">Projects</Link>
          <Link href="/experience" className="text-white hover:text-indigo-500">Experience</Link>
          <Link href="/contact" className="text-white hover:text-indigo-500">Contact</Link>
        </div>

        <div className="relative sm:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-white text-2xl"
            aria-label="Toggle menu"
          >
            <Menu className="w-7 h-7" />
          </button>

          {open && (
            <div
              className="absolute right-0 mt-3 w-44
                         bg-neutral-900 border border-neutral-800
                         rounded-lg shadow-lg py-2
                         animate-in fade-in slide-in-from-top-2"
            >
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="block px-4 py-2 text-white hover:bg-neutral-800"
              >
                Home
              </Link>
              <Link
                href="/projects"
                onClick={() => setOpen(false)}
                className="block px-4 py-2 text-white hover:bg-neutral-800"
              >
                Projects
              </Link>
              <Link
                href="/experience"
                onClick={() => setOpen(false)}
                className="block px-4 py-2 text-white hover:bg-neutral-800"
              >
                Experience
              </Link>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="block px-4 py-2 text-white hover:bg-neutral-800"
              >
                Contact
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const closeNav = () => setIsNavOpen(false);

  return (
    <>
      <header className="flex items-center justify-between p-6">
        <Link href="/" aria-label="Go to home" onClick={closeNav}>
          <Image src="/assets/logo_1.png" alt="QWIC Logo" width={75} height={75} />
        </Link>

        <button
          type="button"
          className="flex items-center justify-center w-10 h-10"
          aria-label={isNavOpen ? "Close menu" : "Open menu"}
          aria-expanded={isNavOpen}
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          {!isNavOpen ? (
            <div className="space-y-2">
              <span className="block h-0.5 w-8 bg-black"></span>
              <span className="block h-0.5 w-8 bg-black"></span>
              <span className="block h-0.5 w-8 bg-black"></span>
            </div>
          ) : (
            <svg
              className="h-8 w-8 text-black"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          )}
        </button>
      </header>

      {/* overlay + drawer */}
      {isNavOpen && (
        <div className="fixed inset-0 z-[999]">
          <button
            type="button"
            aria-label="Close menu"
            className="fixed inset-0 bg-black/60"
            onClick={closeNav}
          />

          <nav
            className="fixed right-0 top-0 z-[1000] h-full w-80 max-w-[85vw] bg-[#F9F7FC] shadow-xl p-6 overflow-y-auto flex flex-col"
            aria-label="Main navigation"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-semibold tracking-wide uppercase text-gray-500">
                Menu
              </span>
              <button
                type="button"
                aria-label="Close menu"
                className="p-1 rounded-full hover:bg-gray-100"
                onClick={closeNav}
              >
                <svg
                  className="h-6 w-6 text-black"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <ul className="flex flex-col text-lg divide-y divide-gray-200">
              <li className="py-2">
                <Link href="/" onClick={closeNav} className="block hover:text-dark-purple">
                  Home
                </Link>
              </li>
              <li className="py-2">
                <Link href="/events" onClick={closeNav} className="block hover:text-dark-purple">
                  Events
                </Link>
              </li>
              <li className="py-2">
                <Link href="/hackher" onClick={closeNav} className="block hover:text-dark-purple">
                  HackHer
                </Link>
              </li>
              <li className="py-2">
                <Link href="/sponsorships" onClick={closeNav} className="block hover:text-dark-purple">
                  Sponsorships
                </Link>
              </li>
              <li className="py-2">
                <Link href="/resources" onClick={closeNav} className="block hover:text-dark-purple">
                  Resources For Students
                </Link>
              </li>
              <li className="py-2">
                <Link href="/mentorship" onClick={closeNav} className="block hover:text-dark-purple">
                  Mentorship
                </Link>
              </li>
              <li className="py-2">
                <Link href="/qwic_chat" onClick={closeNav} className="block hover:text-dark-purple">
                  QWIC Chat
                </Link>
              </li>
              <li className="py-2">
                <Link href="/our-team" onClick={closeNav} className="block hover:text-dark-purple">
                  Our Team
                </Link>
              </li>
              <li className="py-2">
                <Link href="/community" onClick={closeNav} className="block hover:text-dark-purple">
                  Community
                </Link>
              </li>
              <li className="py-2">
                <Link href="/contact-us" onClick={closeNav} className="block hover:text-dark-purple">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#FFF8F0] px-4 py-3 md:px-6">

      {/* Header Top Row */}
      <div className="mx-auto flex max-w-7xl items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="flex min-w-0 items-center gap-3"
        >
          <Image
            src="/images/site_logo_new.png"
            alt="Site Logo"
            width={80}
            height={80}
            priority
            className="h-14 w-14 shrink-0 md:h-20 md:w-20"
          />

          <div className="min-w-0">
            <p className="font-gujarati-serif text-base font-bold text-[#6D102B] md:text-lg">
              શ્રી ગુજરાત ક્ષત્રિય કડિયા સમાજ
            </p>

            <p className="font-sans text-xs text-[#6D102B] md:text-sm">
              SGK ACTIVITY SAURASTRA-KUTCH
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">

          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/our-team">Our Team</Link>
          <Link href="/contact">Contact</Link>

          <Link
            href="/siddhi"
            className="flex h-11 items-center justify-center gap-2 rounded-full bg-[#B84A6B] px-5 font-gujarati font-semibold text-white"
          >
            <Image
              src="/icons/heart.svg"
              alt=""
              width={17}
              height={17}
            />

            <span className="relative top-px">
              સિદ્ધિ
            </span>
          </Link>

          <Link
            href="mailto:sgkactivitygroup@gmail.com"
            className="flex h-11 items-center justify-center gap-2 rounded-full bg-[#71324F] px-5 font-gujarati font-semibold text-white"
          >
            <Image
              src="/icons/mail.svg"
              alt=""
              width={17}
              height={17}
            />

            <span className="relative top-px">
              સંપર્ક કરો
            </span>
          </Link>

        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#E5D5C5] md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>

      </div>


      {/* ============================= */}
      {/* Mobile Navigation */}
      {/* OUTSIDE the flex row */}
      {/* ============================= */}

      {isMenuOpen && (
        <nav className="mt-3 border-t border-[#E8DCCF] pt-3 md:hidden">

          <div className="flex w-full flex-col">

            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="rounded-lg px-4 py-3 font-sans hover:bg-[#F5E7D0]"
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={() => setIsMenuOpen(false)}
              className="rounded-lg px-4 py-3 font-sans hover:bg-[#F5E7D0]"
            >
              About
            </Link>

            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="rounded-lg px-4 py-3 font-sans hover:bg-[#F5E7D0]"
            >
              Contact
            </Link>

            <Link
              href="/siddhi"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 flex h-11 items-center justify-center gap-2 rounded-full bg-[#B84A6B] font-gujarati font-semibold text-white"
            >
              <Image
                src="/icons/heart.svg"
                alt=""
                width={17}
                height={17}
              />

              <span className="relative top-px">
                સિદ્ધિ
              </span>
            </Link>

            <Link
              href="mailto:sgkactivitygroup@gmail.com"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 flex h-11 items-center justify-center gap-2 rounded-full bg-[#71324F] font-gujarati font-semibold text-white"
            >
              <Image
                src="/icons/mail.svg"
                alt=""
                width={17}
                height={17}
              />

              <span className="relative top-px">
                સંપર્ક કરો
              </span>
            </Link>

          </div>

        </nav>
      )}

    </header>
  );
}
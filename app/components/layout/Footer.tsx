import Link from "next/link";
import Image from "next/image";
import { FiMail, FiPhone } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="border-t border-[#E8D2B0] bg-[#FFF8F0]">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-12">

        {/* Footer Columns */}
        <div
          className="
            grid
            grid-cols-1
            gap-y-10
            sm:grid-cols-2
            sm:gap-x-8
            lg:grid-cols-[1.2fr_1fr_1fr_1fr]
            lg:gap-x-12
            lg:gap-y-0
            xl:gap-x-16
          "
        >

          {/* Column 1 - Logo */}
          <div>
            <Link
              href="/"
              className="flex items-center gap-3"
            >
              <Image
                src="/images/site_logo_new.png"
                alt="Site Logo"
                width={80}
                height={80}
                priority
                className="h-14 w-14 shrink-0 md:h-20 md:w-20"
              />

              <div className="shrink-0">
                <p className="whitespace-nowrap font-gujarati-serif text-base font-bold text-[#6D102B] md:text-lg">
                  શ્રી ગુજરાત ક્ષત્રિય કડિયા સમાજ
                </p>

                <p className="whitespace-nowrap font-sans text-xs text-[#6D102B] md:text-sm">
                  SGK ACTIVITY SAURASTRA-KUTCH
                </p>
              </div>
            </Link>
          </div>

          {/* Column 2 - About */}
          <div>
            <h2 className="font-gujarati-serif text-xl font-bold text-[#6D102B]">
              શ્રી ગુજરાત ક્ષત્રિય કડિયા સમાજ
            </h2>

            <p className="mt-3 max-w-sm font-gujarati text-sm leading-6 text-[#5C4650]">
              સમાજના સભ્યોને એકબીજા સાથે જોડવા અને સમાજની વિવિધ
              પ્રવૃત્તિઓની માહિતી સરળતાથી ઉપલબ્ધ કરાવવા માટેનું
              ડિજિટલ પ્લેટફોર્મ.
            </p>
          </div>

          {/* Column 3 - Important Links */}
          <div>
            <h3 className="font-gujarati-serif text-lg font-bold text-[#6D102B]">
              મહત્વપૂર્ણ લિંક્સ
            </h3>

            <nav className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2">
              <Link
                href="/privacy-policy"
                className="whitespace-nowrap font-sans text-sm text-[#5C4650] transition hover:text-[#B84A6B]"
              >
                Privacy Policy
              </Link>

              {/* <Link
                href="/about-community"
                className="whitespace-nowrap font-sans text-sm text-[#5C4650] transition hover:text-[#B84A6B]"
              >
                About the Community
              </Link> */}
            </nav>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="font-gujarati-serif text-lg font-bold text-[#6D102B]">
              સંપર્ક કરો
            </h3>

            <div className="mt-3 space-y-3">

              {/* Email */}
              <a
                href="mailto:sgkactivitygroup@gmail.com"
                className="flex items-center gap-2 font-sans text-sm text-[#5C4650] transition hover:text-[#B84A6B]"
              >
                <FiMail className="h-4 w-4 shrink-0" />
                <span className="whitespace-nowrap">
                  sgkactivitygroup@gmail.com
                </span>
              </a>

              {/* Phone */}
              <a
                href="tel:+919879529585"
                className="flex items-center gap-2 font-sans text-sm text-[#5C4650] transition hover:text-[#B84A6B]"
              >
                <FiPhone className="h-4 w-4 shrink-0" />
                <span className="whitespace-nowrap">
                  +91 98795 29585
                </span>
              </a>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-[#E8DCCF] pt-5 text-center">
          <p className="font-sans text-xs text-[#6D4A55] md:text-sm">
            © {new Date().getFullYear()} SGK Activity Rajkot. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
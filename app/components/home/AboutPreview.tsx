import Link from "next/link";

export default function Hero() {
  return (
    <section className="px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-7xl text-center">

        <p className="font-gujarati text-lg font-semibold text-[#B84A6B]">
          શ્રી ગુજરાત ક્ષત્રિય કડિયા સમાજ
        </p>

        <h1 className="mt-4 font-gujarati-serif text-4xl font-bold text-[#6D102B] md:text-5xl lg:text-6xl">
          સમાજને એકસાથે જોડતું ડિજિટલ પ્લેટફોર્મ
        </h1>

        <p className="mx-auto mt-6 max-w-2xl font-gujarati text-base leading-7 text-[#5C4650] md:text-lg">
          સમાજના સભ્યોને એકબીજા સાથે જોડવા અને સમાજની વિવિધ
          પ્રવૃત્તિઓની માહિતી સરળતાથી ઉપલબ્ધ કરાવવા માટેનું
          ડિજિટલ પ્લેટફોર્મ.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">

          <Link
            href="/our-team"
            className="inline-flex h-11 items-center justify-center rounded-full bg-[#B84A6B] px-6 font-gujarati font-semibold text-white transition hover:bg-[#9F3D5B]"
          >
            અમારી ટીમ
          </Link>

          {/* <Link
            href="/services"
            className="inline-flex h-11 items-center justify-center rounded-full border border-[#71324F] px-6 font-gujarati font-semibold text-[#71324F] transition hover:bg-[#71324F] hover:text-white"
          >
            સેવાઓ જુઓ
          </Link> */}

        </div>
      </div>
    </section>
  );
}
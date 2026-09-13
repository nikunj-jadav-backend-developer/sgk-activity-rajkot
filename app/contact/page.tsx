import Header from "@/app/components/layout/Header";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | SGK Activity Rajkot",
  description:
    "SGK Activity Rajkot વિશે જાણો — સમાજના સભ્યોને જોડવા, લગ્ન, વ્યવસાય અને શિક્ષણ સંબંધિત ઉપયોગી માહિતી અને સેવાઓ એક જ ડિજિટલ પ્લેટફોર્મ પર ઉપલબ્ધ કરાવવાનો અમારો પ્રયાસ.",
};

const contactDetails = [
  {
    icon: FiMail,
    title: "Email",
    value: "sgkactivitygroup@gmail.com",
    href: "mailto:sgkactivitygroup@gmail.com",
  },
  {
    icon: FiPhone,
    title: "Phone",
    value: "+91 98795 29585",
    href: "tel:+919879529585",
  },
  {
    icon: FaWhatsapp,
    title: "WhatsApp",
    value: "Chat with us",
    href: "https://wa.me/919879529585",
  },
];

export default function ContactPage() {
  return (
    <>
        <Header />
            <main>
            {/* Hero */}
            <section className="px-4 py-12 md:px-6 md:py-16">
                <div className="mx-auto max-w-7xl text-center">
                <p className="font-gujarati-serif text-lg font-semibold text-[#B84A6B]">
                    સંપર્ક કરો
                </p>

                <h1 className="mt-2 font-gujarati-serif text-4xl font-bold text-[#6D102B] md:text-5xl">
                    Contact Us
                </h1>

                <p className="mx-auto mt-5 max-w-2xl font-gujarati text-base leading-7 text-[#5C4650] md:text-lg">
                    સમાજ સંબંધિત માહિતી, પ્રવૃત્તિઓ અથવા અન્ય કોઈપણ પ્રશ્ન માટે
                    અમારી ટીમનો સંપર્ક કરો.
                </p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="px-4 pb-20 md:px-6">
                <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2">
                
                {/* Contact Information */}
                <div className="rounded-2xl border border-[#E8DCCF] bg-[#FFF8F0] p-6 shadow-sm md:p-8">
                    <h2 className="font-gujarati-serif text-2xl font-bold text-[#6D102B]">
                    સંપર્ક માહિતી
                    </h2>

                    <p className="mt-3 font-gujarati leading-7 text-[#5C4650]">
                    અમારી સાથે જોડાવા માટે નીચે આપેલ કોઈપણ માધ્યમ દ્વારા સંપર્ક કરી
                    શકો છો.
                    </p>

                    <div className="mt-7 space-y-5">
                    {contactDetails.map((contact) => {
                        const Icon = contact.icon;

                        return (
                        <a
                            key={contact.title}
                            href={contact.href}
                            className="flex items-center gap-4 rounded-xl border border-[#E8DCCF] bg-white/50 p-4 transition hover:bg-[#F8EBDD]"
                        >
                            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F5E2D0] text-[#8B1838]">
                            <Icon className="h-5 w-5" />
                            </span>

                            <span>
                            <span className="block text-sm font-semibold text-[#6D102B]">
                                {contact.title}
                            </span>

                            <span className="mt-1 block text-sm text-[#5C4650]">
                                {contact.value}
                            </span>
                            </span>
                        </a>
                        );
                    })}
                    </div>
                </div>

                {/* Contact Form */}
                <div className="rounded-2xl border border-[#E8DCCF] bg-[#FFF8F0] p-6 shadow-sm md:p-8">
                    <h2 className="font-gujarati-serif text-2xl font-bold text-[#6D102B]">
                    અમને સંદેશ મોકલો
                    </h2>

                    <form className="mt-6 space-y-5">
                    <div>
                        <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-semibold text-[#3D2630]"
                        >
                        Name
                        </label>

                        <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your name"
                        className="h-11 w-full rounded-lg border border-[#DECAB5] bg-white px-4 text-sm outline-none transition focus:border-[#B84A6B] focus:ring-2 focus:ring-[#B84A6B]/20"
                        />
                    </div>

                    <div>
                        <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-semibold text-[#3D2630]"
                        >
                        Email
                        </label>

                        <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        className="h-11 w-full rounded-lg border border-[#DECAB5] bg-white px-4 text-sm outline-none transition focus:border-[#B84A6B] focus:ring-2 focus:ring-[#B84A6B]/20"
                        />
                    </div>

                    <div>
                        <label
                        htmlFor="phone"
                        className="mb-2 block text-sm font-semibold text-[#3D2630]"
                        >
                        Phone
                        </label>

                        <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        className="h-11 w-full rounded-lg border border-[#DECAB5] bg-white px-4 text-sm outline-none transition focus:border-[#B84A6B] focus:ring-2 focus:ring-[#B84A6B]/20"
                        />
                    </div>

                    <div>
                        <label
                        htmlFor="message"
                        className="mb-2 block text-sm font-semibold text-[#3D2630]"
                        >
                        Message
                        </label>

                        <textarea
                        id="message"
                        name="message"
                        rows={5}
                        placeholder="Write your message..."
                        className="w-full resize-none rounded-lg border border-[#DECAB5] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#B84A6B] focus:ring-2 focus:ring-[#B84A6B]/20"
                        />
                    </div>

                    <button
                        type="submit"
                        className="inline-flex h-11 w-full items-center justify-center rounded-lg bg-[#8B1838] px-6 font-gujarati font-semibold text-white transition hover:bg-[#70132E]"
                    >
                        સંદેશ મોકલો
                    </button>
                    </form>
                </div>
                </div>
            </section>
            </main>
    </>
    
  );
}
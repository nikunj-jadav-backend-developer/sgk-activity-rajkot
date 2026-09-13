import Image from "next/image";
import Header from "@/app/components/layout/Header";
import RichText from "@/app/components/ui/RichText";
import OurTeamCard from "@/app/components/ui/OurTeamCard";
import Footer from "@/app/components/layout/Footer";

const teamMembers = [
  {
    name: "Rajesh Chotaliya",
    gujaratiName: "રાજેશભાઈ ચોટલીયા",
    phone: "9879529585",
    whatsapp: "9879529585",
    image: "/uploads/team/rajeshbhai.jpeg",
  },
  {
    name: "Sanjay Chauhan",
    gujaratiName: "સંજયભાઈ ચૌહાણ",
    phone: "9824476762",
    whatsapp: "9824476762",
    image: "/uploads/team/sanjay.jpeg",
  },
  {
    name: "Dinesh Poriva",
    gujaratiName: "દિનેશભાઈ પોરીયા",
    phone: "9375383330",
    whatsapp: "9375383330",
    image: "/uploads/team/dineshbhai.jpeg",
  },
  {
    name: "Dharmesh Kashiyani",
    gujaratiName: "ધર્મેશભાઈ કાશીયાણી",
    phone: "9924098630",
    whatsapp: "9924098630",
    image: "/uploads/team/dharmesh.png",
  },
  {
    name: "Omesh Tank",
    gujaratiName: "ઓમેશભાઈ ટાંક",
    phone: "9426429416",
    whatsapp: "9426429416",
    image: "/uploads/team/omeshbhai.jpeg",
  },
  {
    name: "Kirtan Tank",
    gujaratiName: "કીર્તનભાઈ ટાંક",
    phone: "7984514501",
    whatsapp: "7984514501",
    image: "/uploads/team/kirtan.jpeg",
  },
  {
    name: "Hardik Kacha",
    gujaratiName: "હાર્દિકભાઈ કાચા",
    phone: "9601150289",
    whatsapp: "9601150289",
    image: "/uploads/team/hardik.jpeg",
  },
];

export default function OurTeamPage() {
  return (
    <>
        <Header/>
        <main>
            <section className="px-4 py-5 md:px-6 md:py-5">
                    <div className="mx-auto max-w-7xl text-center">

                        <RichText>   
                            <p><strong>અમારી ટીમ</strong></p>
                        </RichText>

                        <h1 className="font-gujarati-serif text-4xl font-bold text-[#6D102B] md:text-5xl lg:text-6xl">
                            Our Team
                        </h1>

                        <RichText variant="hero"> 
                            <p>
                                સમાજની પ્રગતિ અને એકતા માટે સમર્પિત અમારી ટીમ સાથે મળીને
                                વિવિધ સામાજિક અને સમુદાયલક્ષી પ્રવૃત્તિઓનું આયોજન કરે છે.
                            </p>
                        </RichText>

                    </div>
            </section>
            <section className="px-4 py-6 text-center">

              <RichText variant="hero"> 
                <p>કોલ અથવા વોટ્સએપ દ્વારા સીધી અમારી કમિટીના સંપર્ક કરો.</p>
              </RichText>

              <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
                {/* Email */}
                <a
                  href="mailto:sgkactivitygroup@gmail.com"
                  className="inline-flex h-10 items-center justify-center gap-2 rounded-full border border-[#E8D2B0] bg-[#FFF8F0] px-4 text-sm font-semibold text-[#8B1838] transition hover:bg-[#F9EDE0]"
                >
                  <span aria-hidden="true">✉</span>
                  <span>sgkactivitygroup@gmail.com</span>
                </a>

                {/* Phone */}
                <a
                  href="tel:+919879529585"
                  className="inline-flex h-10 items-center justify-center gap-2 rounded-full border border-[#E8D2B0] bg-[#FFF8F0] px-4 text-sm font-semibold text-[#8B1838] transition hover:bg-[#F9EDE0]"
                >
                  <span aria-hidden="true">☎</span>
                  <span>+91 98795 29585</span>
                </a>
              </div>
            </section>
            <section className="px-4 pb-20 md:px-6">
                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {teamMembers.map((member) => (
                    <OurTeamCard
                        key={member.phone}
                        name={member.name}
                        gujarati_name={member.gujaratiName}
                        phone={member.phone}
                        whatsapp={member.whatsapp}
                        image={member.image}
                    />
                    ))}
                </div>
            </section>
        </main>
      <Footer/>
    </>
    
  );
}
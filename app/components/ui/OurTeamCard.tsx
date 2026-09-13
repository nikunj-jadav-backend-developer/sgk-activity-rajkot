import Image from "next/image";
import RichText from "@/app/components/ui/RichText";
import { FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

interface TeamCardProps {
    name : string;
    gujarati_name: string;
    phone: string;
    whatsapp: string;
    image: string;
}

export default function OurTeamCard(
    {
        name,
        gujarati_name,
        phone,
        whatsapp,
        image
    }:TeamCardProps){
        return(
            <>
                <article className="rounded-2xl border border-[#E8D2B0] bg-[#FFF8F0] px-6 py-8 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                    {/* Profile Image */}
                    <div className="flex justify-center">
                        <div className="relative h-36 w-36 overflow-hidden rounded-full border-2 border-[#E8D2B0]">
                        <Image
                            src={image}
                            alt={name}
                            fill
                            className="object-cover object-[center_top]"
                            sizes="144px"
                        />
                        </div>
                    </div>

                    {/* Name */}
                    <h3 className="mt-5 font-sans text-xl font-bold text-[#6D102B]">
                        {name}
                    </h3>

                    {/* Gujarati Name */}
                    <p className="mt-2 font-gujarati text-base text-[#6D4A55]">
                        {gujarati_name}
                    </p>

                    {/* Phone */}
                    <p className="mt-4 flex items-center justify-center gap-2 font-sans text-base font-bold text-[#6D102B]">
                        <FiPhone className="h-5 w-5" />
                        <span>{phone}</span>
                    </p>

                    {/* Actions */}
                    <div className="mt-5 flex items-center justify-center gap-3">
                        <a
                        href={`tel:${phone}`}
                        className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-[#8B1838] px-5 text-sm font-semibold text-white transition hover:bg-[#70132E]"
                        >
                        <FiPhone className="h-4 w-4" />
                        <span className="font-gujarati">Call</span>
                        </a>

                        <a
                        href={`https://wa.me/91${phone}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 text-sm font-semibold text-white transition hover:bg-[#1EBE5D]"
                        >
                        <FaWhatsapp className="h-4 w-4" />
                        <span className="font-gujarati">Whatsapp</span>
                        </a>
                    </div>
                    </article>
            </>
        );
    }

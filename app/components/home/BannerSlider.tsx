"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface Banner {
  id: number;
  image: string;
  alt: string;
}

const banners: Banner[] = [
  {
    id: 1,
    image: "/uploads/banners/banner-1.jpg",
    alt: "SGK Activity Rajkot Community",
  },
  {
    id: 2,
    image: "/uploads/banners/banner-2.jpg",
    alt: "SGK Activity Rajkot Matrimony",
  },
];

export default function BannerSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((previousSlide) =>
        previousSlide === banners.length - 1
          ? 0
          : previousSlide + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentBanner = banners[currentSlide];

  return (
    <section className="w-full">
      {/* Banner */}
      <div className="w-full overflow-hidden">
        <Image
          key={currentBanner.id}
          src={currentBanner.image}
          alt={currentBanner.alt}
          width={1920}
          height={720}
          priority={currentSlide === 0}
          className="block h-auto w-full object-cover"
          sizes="100vw"
        />
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-2 py-4">
        {banners.map((banner, index) => (
          <button
            key={banner.id}
            type="button"
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentSlide}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-6 bg-[#6D102B]"
                : "w-2.5 bg-[#C89B3C]"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
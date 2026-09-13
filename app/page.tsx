import Image from "next/image";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import Hero from "@/app/components/home/Hero"

// import { Footer} from "@/app/components/layout/Footer";
export default function Home() {
  return (
    <>
    <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Hero />
      </main>
    <Footer/>
    </>
  );
}

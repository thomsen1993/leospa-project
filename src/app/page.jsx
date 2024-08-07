import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Procedures from "@/components/sections/Procedures";
import Slider from "@/components/sections/Slider";
import Team from "@/components/sections/Team";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <Procedures />
      <Slider />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}

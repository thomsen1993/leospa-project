import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import Procedures from "@/components/sections/Procedures";
import Slider from "@/components/sections/Slider";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <Procedures />
      <Slider/>
    </main>
  );
}

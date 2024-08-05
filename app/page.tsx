import Hero from "@components/Hero.tsx";
import { FloatingNav } from "@components/ui/floating-navbar";
import { navItems } from "@data";
import MinatBakat from "@components/MinatBakat";
import Projects from "@components/Projects";
import Achievements from "@components/Achievements";

const Home = () => {
  return (
    <main className="overflow-x-hidden">
      <FloatingNav navItems={navItems} />
      <Hero />
      <MinatBakat />
      <Projects />
      <Achievements />
    </main>
  )
}

export default Home

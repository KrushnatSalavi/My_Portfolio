import AIChat from "../components/AIChat";
import Footer from "../components/layout/Footer";
import Navbar from "../components/Navbar";
import ScrollProgress from "../components/ScrollProgress";
import BackgroundGlow from "../components/shared/BackgroundGlow";
import Contact from "../sections/contact/Contact";
import Experience from "../sections/experience/Experience";
import GithubStats from "../sections/github/GithubStats";
import Hero from "../sections/hero/Hero";
import Projects from "../sections/projects/Projects";
import Skills from "../sections/skills/Skills";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <BackgroundGlow />
      <ScrollProgress />

      <Navbar/>

      <Hero />

      <Projects />

      <Skills />

      <Experience />
      <AIChat />
      <GithubStats />

      <Contact />



      <Footer />
    </main>
  );
}
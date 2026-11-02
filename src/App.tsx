import { siteConfig } from "./config";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <footer className="border-t border-line">
        <div className="wrap flex flex-wrap justify-between gap-3 py-8 text-sm text-muted">
          <span>© {new Date().getFullYear()} {siteConfig.name}</span>
          <span className="font-mono">Built with React, TypeScript &amp; Tailwind CSS</span>
        </div>
      </footer>
    </>
  );
}

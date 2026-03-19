/**
 * Portfolio app: single-page layout with all sections.
 * Navbar stays hidden until Hero name is fully typed, then appears with blur-in.
 */

import { useState } from 'react';
import BackgroundOrbits from './components/BackgroundOrbits';
import LiquidCursor from './components/LiquidCursor';
import ScrollReveal from './components/ScrollReveal';
import SectionDivider from './components/SectionDivider';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import EducationExperience from './components/EducationExperience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <div className="min-h-screen relative">
      <BackgroundOrbits />
      <LiquidCursor />
      <Navbar show={showNavbar} />
      <main className="relative z-10">
        <ScrollReveal>
          <Hero onNameComplete={() => setShowNavbar(true)} />
        </ScrollReveal>

        <SectionDivider />

        <ScrollReveal>
          <About />
        </ScrollReveal>

        <SectionDivider />

        <ScrollReveal>
          <Skills />
        </ScrollReveal>

        <SectionDivider />

        <ScrollReveal>
          <Projects />
        </ScrollReveal>

        <SectionDivider />

        <ScrollReveal>
          <EducationExperience />
        </ScrollReveal>

        <SectionDivider />

        <ScrollReveal>
          <Contact />
        </ScrollReveal>

        <Footer />
      </main>
    </div>
  );
}

export default App;

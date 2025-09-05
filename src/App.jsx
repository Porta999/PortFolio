import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import About from '@/components/About';
import Footer from '@/components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('inicio');

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'proyectos', 'habilidades', 'sobre-mi'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Helmet>
        <title>Portafolio | Porta</title>
        <meta name="description" content="Portafolio profesional de un desarrollador web con experiencia en JavaScript, HTML, CSS y más. Descubre mis proyectos y habilidades." />
        <meta property="og:title" content="Mi Portafolio - Desarrollador Web" />
        <meta property="og:description" content="Portafolio profesional de un desarrollador web con experiencia en JavaScript, HTML, CSS y más." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white">
        <Header activeSection={activeSection} scrollToSection={scrollToSection} />
        
        <main>
          <Hero scrollToSection={scrollToSection} />
          <Projects />
          <Skills />
          <About />
        </main>

        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;
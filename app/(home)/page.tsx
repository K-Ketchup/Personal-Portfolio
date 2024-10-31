import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Projects from './components/Projects';

export default function page() {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <div className="dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_right,transparent_1%,black)]"></div>
        <div className="relative max-w-7xl z-20 mx-auto p-12">
          <Navbar />
          <HeroSection />
        </div>
        <div className="h-10 xl:h-32 bg-gradient-to-t from-black absolute -bottom-5 left-0 xl:bottom-0 w-full"></div>
      </div>
      <div className="relative max-w-7xl z-20 mx-auto p-12 mt-20">
        <Skills />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}
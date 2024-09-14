"use client";
import { useState, useEffect } from 'react';
import Head from 'next/head';
import BorderImage from './Image';
import Portfolio from './portfolio';
import Skills from './skills';
import Contact from './contact';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handling scroll to apply slide-up/slide-down animation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-custom-bg text-white flex flex-col px-4 md:px-20">
      <Head>
        <title>Next.js Tailwind CSS Example</title>
      </Head>

      {/* Navbar */}
      <nav className="w-full flex justify-between items-center p-4 pt-8">
        <div className="text-3xl font-bold">FS</div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {/* Hamburger or Cross Icon */}
            {!isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Sliding from the Left */}
        <ul
          className={`${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          } fixed top-0 left-0 h-full bg-custom-bg z-50 flex flex-col space-y-6 w-64 p-6 transition-transform duration-300 md:hidden`}
        >
          <li><a href="#home" onClick={toggleMenu} className="hover-underline">HOME</a></li>
          <li><a href="#about" onClick={toggleMenu} className="hover-underline">ABOUT ME</a></li>
          <li><a href="#experience" onClick={toggleMenu} className="hover-underline">EXPERIENCE</a></li>
          <li><a href="#projects" onClick={toggleMenu} className="hover-underline">PROJECTS</a></li>
          <li><a href="#skills" onClick={toggleMenu} className="hover-underline">SKILLS</a></li>
          <li>
            <a href="#contact"
              className="bg-gradient-to-r from-purple-400 to-blue-500 px-4 py-2 rounded-md text-white hover:from-purple-500 hover:to-blue-600 hover:text-custom-bg transition-all duration-300"
              onClick={toggleMenu}>
              CONTACT
            </a>
          </li>
        </ul>

        {/* Regular Nav Items */}
        <ul className="hidden md:flex space-x-4 md:space-x-12 items-center">
          <li><a href="#home" className="hover-underline">HOME</a></li>
          <li><a href="#about" className="hover-underline">ABOUT ME</a></li>
          <li><a href="#experience" className="hover-underline">EXPERIENCE</a></li>
          <li><a href="#projects" className="hover-underline">PROJECTS</a></li>
          <li><a href="#skills" className="hover-underline">SKILLS</a></li>
          <li>
            <a href="#contact"
              className="bg-gradient-to-r from-purple-400 to-blue-500 px-4 py-2 rounded-md text-white hover:from-purple-500 hover:to-blue-600 hover:text-custom-bg transition-all duration-300">
              CONTACT
            </a>
          </li>
        </ul>
      </nav>

      {/* Parallax Background */}
      <div className="parallax-container">
        <div className="parallax-background" />
        <div id="home" className="sticky-section">
          <div className={`flex flex-col items-start mt-20 text-left ${isScrolled ? 'animate-slide-up' : ''}`}>
            <h1 className="text-4xl md:text-5xl font-extrabold">I&apos;m a</h1>
            <h2 className="text-5xl md:text-6xl font-extrabold mt-4">Full Stack</h2>
            <h2 className="text-5xl md:text-6xl font-extrabold mt-4">Software</h2>
            <h2 className="text-5xl md:text-6xl font-extrabold mt-4">Developer</h2>
            <button className="mt-10 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-md text-lg hover:from-blue-600 hover:to-purple-600">
              Previous Projects
            </button>
          </div>
        </div>
      </div>

      {/* About Me Section */}
      <div id="about" className="section">
        <BorderImage src="/designer.png" alt="Designer Image" />
        <div className="flex-1 mt-8 md:mt-0 md:ml-12 relative">
          <h2 className="text-3xl font-bold mb-4">ABOUT ME</h2>
          <p className="mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <div className="flex space-x-4">
            <button className="bg-gradient-to-r from-purple-400 to-blue-500 text-white px-6 py-3 rounded-md text-lg hover:from-purple-500 hover:to-blue-600">HIRE ME</button>
            <button className="border-2 border-blue-500 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-500">RESUME</button>
          </div>
        </div>
      </div>

      {/* Portfolio, Skills, Contact Sections */}
      <Portfolio />
      <Skills />
      <Contact />
    </div>
  );
}

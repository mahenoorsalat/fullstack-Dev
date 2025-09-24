"use client"

import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Footer = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const router = useRouter();

const FiverrIcon = () => (
 <Image src='/fiverr.svg' alt="Fiverr" width={16} height={16} className='w-4 h-4 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'/>
);

const UpworkIcon = () => (
 <Image src='/upwork.svg' alt="Upwork" width={16} height={16} className='w-4 h-4 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'/>
);

  useEffect(() => {
    const timer1 = setTimeout(() => setIsLoaded(true), 100);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearTimeout(timer1);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleContactClick = () => {
    router.push('/clients#contact');
  };

  const socials = [
    { icon: <FontAwesomeIcon icon={faGithub} />, link: "https://github.com/mahenoorsalat" },
    { icon: <FontAwesomeIcon icon={faLinkedin} />, link: "https://www.linkedin.com/in/salat-mahenoor/" },
    { icon: <FiverrIcon />, link: "https://www.fiverr.com/salat_mahenoor?source=gig_page" },
    { icon: <UpworkIcon />, link: "https://www.upwork.com/freelancers/~017b36696fdb312255" },
    { icon: <FontAwesomeIcon icon={faYoutube} />, link: "https://www.youtube.com/@MahenoorSalat" },
  ];

  return (
    <div className='bg-white dark:bg-gray-900 transition-colors duration-300'>
     {/* Enhanced Contact / CV Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="group bg-white/30 dark:bg-gray-800/30 backdrop-blur-xl rounded-2xl border border-gray-200/30 dark:border-gray-700/30 p-8 sm:p-12 text-center relative overflow-hidden hover:bg-white/40 dark:hover:bg-gray-800/40 transition-all duration-700 hover:shadow-2xl hover:scale-[1.02]">

            {/* Background decorations */}
            <div className="absolute inset-0 bg-gradient-radial from-orange-200/30 dark:from-orange-600/20 via-transparent to-transparent transition-opacity duration-700 group-hover:opacity-70" />
            <div className="absolute inset-0 bg-gradient-radial from-blue-200/20 dark:from-blue-600/10 via-transparent to-transparent transition-opacity duration-700 group-hover:opacity-50" />

            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4 group-hover:text-black dark:group-hover:text-white transition-colors duration-300">
                Connect with Mahenoor
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                You can send me an email to get in touch
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-4">
            


                <button
                  onClick={handleContactClick}
                  className="group relative px-6 py-3 rounded-xl font-semibold overflow-hidden transition-all duration-300 cursor-pointer bg-black dark:bg-white dark:text-black text-white border border-gray-700/50 dark:border-blue-500/50 shadow-sm hover:shadow-lg hover:scale-105"
                >
                  {/* Shiny hover layers */}
                  <div className="absolute inset-0 overflow-hidden rounded-xl">
                    <div className="absolute inset-0 -translate-x-[120%] group-hover:translate-x-[120%] transition-transform duration-800 ease-out bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
                    <div className="absolute inset-0 -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-900 ease-out delay-75 bg-gradient-to-r from-transparent via-gray-400/20 to-transparent skew-x-12" />
                  </div>

                  {/* Subtle glow */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Button content */}
                  <span className="relative z-10">Contact Me</span>
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>
      
      <footer className="py-8 px-4 sm:pb-9 pb-32">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between text-sm text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-500">
            <div className="flex flex-col sm:flex-row items-center space-x-1 mb-4 sm:mb-0">
              <span>© 2025 /</span>
              <span className="text-gray-900 dark:text-gray-100 font-medium hover:text-black dark:hover:text-white transition-colors duration-300">Mahenoor Salat</span>
              <span>/ Designer , Dev , SEO & Editor</span>
              <a href="#" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors duration-300 hover:underline">Once UI</a>
            </div>

            <div className="flex items-center space-x-4">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black dark:bg-white dark:rounded-full p-2 hover:text-gray-900 dark:hover:text-black transition-all duration-300 transform hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
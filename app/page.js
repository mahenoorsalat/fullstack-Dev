"use client";

import Head from "next/head";
import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, ExternalLink, Star, Quote } from 'lucide-react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 }); // ✅ Fix
  const blurRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 50);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

   const ProjectCard = ({ title, subtitle, description, image, link, linkUrl }) => (
    <div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl transition-all duration-700"
    >
      <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 relative overflow-hidden">
        {image && (
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 "
          />
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{title}</h3>
        {description && <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{description}</p>}
        {link && linkUrl && (
          <a
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm"
          >
            {link} <ChevronRight className="w-4 h-4 ml-1" />
          </a>
        )}
      </div>
    </div>
  );

  const TestimonialCard = ({ name, role, company, feedback, rating = 5, avatar, featured = false }) => (
    <div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`group bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/30 dark:border-gray-700/30 relative overflow-hidden ${featured ? 'md:col-span-2' : ''}`}
    >
      {featured && (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 dark:from-blue-900/20 dark:via-transparent dark:to-purple-900/20 transition-opacity duration-500 group-hover:opacity-70" />
      )}

      <Quote className={`${featured ? 'w-8 h-8 text-blue-600 dark:text-blue-400' : 'w-6 h-6 text-blue-500 dark:text-blue-400'} mb-6`} />

      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300 dark:text-gray-600'}`}
          />
        ))}
        <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">{rating}.0</span>
      </div>

      <p className={`text-gray-600 dark:text-gray-300 mb-6 ${featured ? 'text-lg' : 'text-base'}`}>"{feedback}"</p>

      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700 rounded-full flex items-center justify-center overflow-hidden">
          {avatar ? <img src={avatar} alt={name} className="w-full h-full object-cover" /> : <span className="text-white font-bold text-lg">{name[0]}</span>}
        </div>
        <div>
          <p className="text-base font-semibold text-gray-900 dark:text-gray-100">{name}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">{role}</p>
          {company && <p className="text-xs text-gray-500 dark:text-gray-500">{company}</p>}
        </div>
      </div>

      {featured && (
        <div className="absolute top-4 right-4 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-semibold">
          Featured
        </div>
      )}
    </div>
  );

  const testimonials = [
    {
      name: "Dr. Bruno Woltzenlogel Paleo",
      avatar: "./testimonial-6.jpg",
      role: "AOSSIE Founder - GSOC",
      company: "Australia",
      feedback: "Mahenoor participated in the apprenticeship program of The Stable Order...",
      rating: 5,
      featured: true
    },
    {
      name: "Dmytry",
      avatar: "./testimonial-8.png",
      role: "Project Manager",
      company: "UKraine",
      feedback: "I&apos;m so surprised again. She&apos;s very talented and professional designer. Just Recommend her as designer. Thanks Mahi.",
      rating: 5
    },
    {
      name: "JAKECOVINGTON",
      avatar: "./testimonial-9.png",
      role: "CEO",
      company: "United States",
      feedback: "Working with Mahenoor transformed our entire product experience...",
      rating: 5
    },
  ];

  return (
    <>
      <Head>
        <title>Mahenoor Salat | UI/UX Designer & Web Developer | SEO & Video Editing</title>
      </Head>

      <div className="min-h-screen bg-white dark:bg-gray-900 relative overflow-hidden transition-colors duration-300">
        
        {/* Blur Circles */}
        <div
          className={`absolute -top-32 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1500px] h-[1500px] pointer-events-none rounded-full overflow-hidden transition-all duration-[3000ms] ease-out ${
            isLoaded ? 'opacity-40 scale-100' : 'opacity-80 scale-125'
          }`}
        >
          <div
            className="absolute inset-0 bg-[rgb(124,222,242)] dark:bg-[rgb(59,130,246)] rounded-full blur-[200px] opacity-40 dark:opacity-30 transition-transform duration-[4000ms] ease-out"
            style={{
              transform: `translate(${mousePosition.x * 5}px, ${mousePosition.y * 5}px) scale(${isLoaded ? 1 : 1.2})`
            }}
          />
          <div
            className="absolute inset-0 bg-white dark:bg-gray-800 rounded-full blur-[250px] opacity-20 dark:opacity-10 transition-transform duration-[4000ms] ease-out"
            style={{
              transform: `translate(${mousePosition.x * 2}px, ${mousePosition.y * 2}px) scale(${isLoaded ? 1 : 1.1})`
            }}
          />
          <div
            className="absolute inset-0 bg-[#a0e0f5] dark:bg-[#1e40af] rounded-full blur-[300px] opacity-10 dark:opacity-5 transition-transform duration-[4000ms] ease-out"
            style={{
              transform: `translate(${mousePosition.x * 1.5}px, ${mousePosition.y * 1.5}px) scale(${isLoaded ? 1 : 1.05})`
            }}
          />
        </div>

          {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">

            {/* Blue Badge */}
            <div className="inline-flex items-center px-5 py-2 mb-8 cursor-pointer relative overflow-hidden rounded-full bg-blue-100/80 dark:bg-blue-900/50 border border-blue-200/50 dark:border-blue-700/50 backdrop-blur-sm mx-auto">
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <div className="absolute inset-0 -translate-x-[120%] group-hover:translate-x-[120%] transition-transform duration-800 ease-out bg-gradient-to-r from-transparent via-white/40 dark:via-gray-200/20 to-transparent skew-x-12" />
                <div className="absolute inset-0 -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-900 ease-out delay-75 bg-gradient-to-r from-transparent via-blue-200/30 dark:via-blue-600/20 to-transparent skew-x-12" />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/0 via-blue-500/5 dark:via-blue-400/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex items-center space-x-2">
                <span className="text-sm font-bold text-gray-900 dark:text-gray-100">Available for Work</span>
                <div className="w-px h-4 bg-blue-300/70 dark:bg-blue-600/70" />
                <span className="text-sm text-blue-700 dark:text-blue-300 transition-colors duration-300">
                 Hire now
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-900 dark:text-gray-100 mb-8 leading-tight">
                Building bridges between design and code
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
                Hi, I'm <strong>Mahenoor Salat</strong> — a passionate <strong>UI/UX designer</strong>, <strong>frontend & backend developer</strong>, and <strong>SEO optimizer</strong>. I build websites that are visually engaging, technically robust, and optimized for search engines.
              </p>

              {/* About Me Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-full px-4 py-3 border border-gray-200/50 dark:border-gray-700/50 transition-all duration-500 mx-auto"
              >
                <div className="w-10 h-10 bg-white dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 rounded-full mr-3 overflow-hidden">
                  <img src='./profile.jpeg' alt="Profile" className="w-full h-full object-cover"/>
                </div>
                <span className="font-medium text-gray-900 dark:text-gray-100">About Me — Mahenoor Salat</span>
                <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-gray-900 dark:text-gray-100" />
              </motion.button>
            </motion.div>
          </div>
        </section>
        
         {/* Projects & Testimonials */}    
            <section className="px-4">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="w-full"> {/* Full-width image */}
               <div className="w-90% h-[100%] lg:h-[600px] overflow-hidden rounded-2xl"> <img src="./Banner.png" alt="Project Banner" className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105" /> </div> </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>

            <div className="space-y-8">
              <ProjectCard
                title="AOSSIE: DeFi Platform Redesign & Development"
                subtitle="AOSSIE DeFi Platform"
                description="I redesigned and developed the AOSSIE landing page and dashboard..."
                image="./project.png"
                link="View Project"
                linkUrl="https://aossie.org/"
              />

              <ProjectCard
                title="QuickCart: Fast & Scalable eCommerce Platform"
                subtitle="QuickCart eCommerce"
                description="Developed and optimized QuickCart, an eCommerce platform built for speed..."
                image="./project1.png"
                link="View Project"
                linkUrl="https://neo-byte.vercel.app/"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;


  
 
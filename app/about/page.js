"use client"

import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from 'next/head';
import Image from 'next/image';

// Solid icons
import { faArrowRight, faEnvelope, faArrowUpRightFromSquare, faAward, faCertificate } from "@fortawesome/free-solid-svg-icons";

// Brand icons
import { faGithub, faLinkedin, faThreads, faFiverr, faUpwork } from '@fortawesome/free-brands-svg-icons';

const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState("Introduction");
  const sectionsRef = useRef({});

  useEffect(() => {
    // Trigger load animation
    const timer = setTimeout(() => setIsLoaded(true), 50); 
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      });
    };

    const handleScroll = () => {
      const sectionPositions = Object.keys(sectionsRef.current).map(key => {
        const el = sectionsRef.current[key];
        return { key, top: el?.offsetTop || 0, height: el?.offsetHeight || 0 };
      });
      const scrollY = window.scrollY + 150; // Offset for better triggering
      for (let i = 0; i < sectionPositions.length; i++) {
        const { key, top, height } = sectionPositions[i];
        if (scrollY >= top && scrollY < top + height) {
          setActiveSection(key);
          break;
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const SidebarNavItem = ({ label }) => (
    <div
      className={`flex items-center py-3 px-4 cursor-pointer transition-all duration-300 ${
        activeSection === label ? 'text-gray-900 dark:text-gray-100 font-semibold' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
      }`}
      onClick={() => {
        sectionsRef.current[label]?.scrollIntoView({ behavior: 'smooth' });
      }}
    >
      <div className={`w-4 h-px mr-6 transition-colors duration-300 ${activeSection === label ? 'bg-blue-600 dark:bg-blue-400' : 'bg-gray-300 dark:bg-gray-600'}`} />
      <span className="text-base">{label}</span>
    </div>
  );

  const ExperienceCard = ({ title, company, period, description, achievements }) => (
    <div className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/30 dark:border-gray-700/30 mb-6 transition-all duration-300 hover:shadow-lg">
      <div className="flex flex-col sm:flex-row justify-between items-start mb-4 gap-2">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-black dark:group-hover:text-white transition-colors duration-300">
            {company}
          </h3>
          <p className="text-blue-600 dark:text-blue-400 font-medium">{title}</p>
        </div>
        <span className="text-gray-500 dark:text-gray-400 text-sm whitespace-nowrap bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">{period}</span>
      </div>
      {description && <p className="text-gray-600 dark:text-gray-400 mb-4 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">{description}</p>}
      {achievements && (
        <ul className="space-y-2">
          {achievements.map((achievement, index) => (
            <li key={index} className="flex items-start text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
              <span className="w-1.5 h-1.5 bg-blue-500 dark:bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              {achievement}
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  const CertificationCard = ({ title, issuer, date, icon }) => (
    <div className="flex items-center p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl border border-gray-200/30 dark:border-gray-700/30 mb-4 transition-all duration-300 hover:scale-[1.02]">
        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-4 text-blue-600 dark:text-blue-400">
            <FontAwesomeIcon icon={icon || faCertificate} />
        </div>
        <div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{issuer} • {date}</p>
        </div>
    </div>
  );

  const SkillCard = ({ title, description, tags }) => (
    <div className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl border border-gray-200/30 dark:border-gray-700/30 mb-6 p-6 transition-all duration-300 hover:shadow-lg">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-black dark:group-hover:text-white transition-colors duration-300">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">{description}</p>
      {tags && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span key={index} className="px-3 py-1 bg-white dark:bg-gray-700 rounded-lg text-sm text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-600 group-hover:border-gray-300 dark:group-hover:border-gray-500 transition-colors duration-300">
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );

  return (
   <>
     <Head>
        <title>About | Mahenoor Salat — Developer, Designer & SEO Specialist</title>
        <meta
            name="description"
            content="Learn about Mahenoor Salat’s story, skills, techniques, and journey as a developer, designer, SEO & video expert. Let’s build something amazing together."
        />
    </Head>

    <div className="min-h-screen bg-white dark:bg-gray-900 relative overflow-hidden transition-colors duration-300">
         {/* Background Orbs */}
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

      {/* Sidebar for desktop */}
      <div className="hidden sm:flex fixed left-0 top-20 w-64 h-[calc(100vh-5rem)] z-30 py-12 px-6 border-r border-gray-200 dark:border-gray-700 transition-colors duration-300">
        <nav className="space-y-1">
            {["Introduction", "Work Experience", "Studies", "Technical Skills", "Certifications"].map(label => (
            <SidebarNavItem key={label} label={label} />
            ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="sm:ml-64 ml-0 flex justify-center">
        <div className="w-[90%] sm:w-[80%] pt-20 space-y-20 pb-32">
            
            {/* Introduction / Profile Header Section */}
            <section className="sm:px-8 px-0 py-12 mb-12" ref={el => (sectionsRef.current["Introduction"] = el)}>
              <div className="sm:flex-row flex-col flex items-start gap-8">
                {/* Profile Info */}
                <div className="flex-1">
                  
                  {/* Schedule Call Button */}
                   <div className="group inline-flex items-center px-4 py-3 mb-6 cursor-pointer relative overflow-hidden rounded-full bg-blue-100/80 dark:bg-blue-900/50 border border-blue-200/50 dark:border-blue-700/50 backdrop-blur-sm">
                    {/* Shiny hover layers */}
                    <div className="absolute inset-0 rounded-full overflow-hidden">
                        <div className="absolute inset-0 -translate-x-[120%] group-hover:translate-x-[120%] transition-transform duration-800 ease-out bg-gradient-to-r from-transparent via-white/40 dark:via-gray-200/20 to-transparent skew-x-12" />
                        <div className="absolute inset-0 -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-900 ease-out delay-75 bg-gradient-to-r from-transparent via-blue-200/30 dark:via-blue-600/20 to-transparent skew-x-12" />
                    </div>

                  <a 
  href="https://calendly.com/salatmahenoor7-8-6/30min" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <div className="relative z-10 flex items-center space-x-2 cursor-pointer">
    <FontAwesomeIcon 
      icon={faArrowUpRightFromSquare} 
      className="text-blue-700 dark:text-blue-300" 
    />

    <span className="font-medium text-blue-700 dark:text-blue-300 group-hover:text-blue-800 dark:group-hover:text-blue-200 transition-colors duration-300">
      Schedule a call
    </span>

    <div className="w-8 h-8 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-full flex items-center justify-center">
      <FontAwesomeIcon 
        icon={faArrowRight} 
        className="text-black dark:text-white text-xs" 
      />
    </div>
  </div>
</a>

                   </div>

                  {/* Name and Title */}
                  <h1 className="text-5xl font-semibold text-gray-900 dark:text-gray-100 mb-4 hover:text-black dark:hover:text-white transition-colors duration-300">
                    Mahenoor Salat
                  </h1>
                  <p className="text-gray-600 dark:text-gray-400 text-lg mb-6 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300">
                    Frontend & Backend Developer | UI/UX Designer | SEO Specialist | Video Editor
                  </p>

                  {/* Location and Languages */}
                  <div className="flex flex-wrap gap-4 items-center mb-6">
                     <div className="flex items-center text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                        <span className="text-sm">Available for work</span>
                     </div>
                     <div className="flex items-center text-gray-700 dark:text-gray-300">
                        <span className="text-base mr-2">📍</span>
                        <span className="text-base">Asia/India</span>
                    </div>
                  </div>

                  <div className="flex gap-2 mb-8">
                    <span className="px-3 py-1 bg-white dark:bg-gray-700 rounded-lg text-sm text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-600">
                      English
                    </span>
                    <span className="px-3 py-1 bg-white dark:bg-gray-700 rounded-lg text-sm text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-600">
                      Bahasa
                    </span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300 max-w-2xl">
                    Versatile Full-Stack Developer and UI/UX Designer skilled in MERN, Next.js, Django, Python, REST APIs, AI/ML fundamentals, automation, and Web3 integrations. Experienced in building responsive interfaces, backend systems, SEO-optimized workflows, and high-performance applications across diverse industries.
                  </p>

                </div>  
                {/* Profile Picture */}
                <div className="w-40 h-40 bg-white/30 dark:bg-gray-700/30 backdrop-blur-xl rounded-full border border-gray-200 dark:border-gray-600 overflow-hidden hover:scale-105 transition-all duration-500 flex-shrink-0 shadow-xl">
                    <Image 
                    src="/profile.jpeg" 
                    alt="Profile" 
                    width={200} 
                    height={200} 
                    className="rounded-full object-cover w-full h-full" 
                    />                
                </div>
              </div>
            </section>
       
            {/* Work Experience */}
            <section className='sm:px-8 px-0' ref={el => (sectionsRef.current["Work Experience"] = el)}>
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-8 flex items-center gap-3">
                Work Experience
                <span className="text-sm font-normal text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">Recent</span>
            </h2>

            <ExperienceCard
                company="Developer Studios"
                title="Full-Stack Developer"
                period="Dec 2025 - Present"
                description="Working on full-stack projects involving Next.js, Python, AI APIs, and high-performance UI systems."
                achievements={[
                    "Building high-performance UI systems.",
                    "Integrating AI APIs and Python backend logic."
                ]}
            />

            <ExperienceCard
                company="Student Diwan, Qatar"
                title="LMS Developer"
                period="Nov 2025 - Present"
                description="Built and managed LMS features for students using React + Node."
                achievements={[
                    "Developed core LMS features for student management.",
                    "Utilized React and Node.js for scalable architecture."
                ]}
            />

            <ExperienceCard
                company="Hexoforge LLC"
                title="Full-Stack Developer"
                period="Sep 2025 - Present"
                description="Developed full-stack modules using MERN, Django, and API integrations."
                achievements={[
                    "Integrated complex API workflows.",
                    "Built full-stack modules bridging MERN and Django."
                ]}
            />

            <ExperienceCard
                company="GFE Foundation"
                title="Frontend & Backend Developer"
                period="2025 - Present"
                description="Built blockchain-powered dashboards for decentralized energy trading."
                achievements={[
                    "Developed secure frontend interfaces for energy trading.",
                    "Integrated blockchain data visualization."
                ]}
            />

            <ExperienceCard
                company="EGMA"
                title="UI/UX Designer"
                period="Nov 2024 - Dec 2024"
                description="Designed responsive prototypes and improved usability by 40%."
            />

            <ExperienceCard
                company="Stability Nexus"
                title="Frontend Developer"
                period="Oct 2024 - Nov 2024"
                description="Enhanced mobile responsiveness by 35% and delivered scalable frontend architecture."
            />

            <ExperienceCard
                company="AOSSIE"
                title="Developer Designer"
                period="Oct 2024 - Nov 2024"
                description="Created robotic control UI and optimized REST API workflows."
            />

            <ExperienceCard
                company="Xorio"
                title="UI/UX Designer"
                period="Sep 2024 - Oct 2024"
                description="Built interactive prototypes aligned with client branding and design systems."
            />
            
            <ExperienceCard
                company="RKWEB"
                title="Frontend Developer"
                period="Dec 2023 - Jan 2024"
                description="Developed and optimized responsive React applications improving load speed by 45%."
            />

            </section>

            {/* Studies */}
            <section className='sm:px-8 px-0' ref={el => (sectionsRef.current["Studies"] = el)}>
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-8">
                Studies
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-md p-6 rounded-2xl border border-gray-200/50 dark:border-gray-700/50">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Manipal University Jaipur</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">Bachelor of Computer Applications (BCA)</p>
                    <p className="text-gray-500 mt-2 text-sm">2024 - 2026 (Pursuing)</p>
                </div>

                <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-md p-6 rounded-2xl border border-gray-200/50 dark:border-gray-700/50">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Royal Commerce School</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">Higher Secondary (HSC)</p>
                    <p className="text-gray-500 mt-2 text-sm">Completed</p>
                </div>
            </div>
            </section>

            {/* Technical Skills */}
            <section className='sm:px-8 px-0' ref={el => (sectionsRef.current["Technical Skills"] = el)}>
                <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-8">
                Technical Skills
                </h2>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                <SkillCard
                    title="Frontend Development"
                    description="Expert in building responsive, dynamic, and interactive web applications."
                    tags={[
                        "React", "Next.js", "Vue", "Nuxt", "TypeScript", "Tailwind CSS", "GSAP", "Framer Motion", "HTML/CSS", "Vite"
                    ]}
                />
            
                <SkillCard
                    title="Backend & Database"
                    description="Solid foundation in server-side logic, API development, and database management."
                    tags={[
                        "Node.js", "Express.js", "Python", "Django", "FastAPI", "PostgreSQL", "MongoDB", "Supabase", "REST APIs"
                    ]}
                />

                <SkillCard
                    title="AI, Blockchain & Tools"
                    description="Experience with emerging tech and development tools."
                    tags={[
                        "AI API Integrations", "Prompt Engineering", "ML Fundamentals", "Web3 Integrations", "Automation Pipelines", "Git/GitHub"
                    ]}
                />

                <SkillCard
                    title="Design & No-Code"
                    description="Creating visually compelling designs and leveraging no-code solutions."
                    tags={[
                        "Figma", "Photoshop", "Illustrator", "Webflow", "Framer", "WordPress", "Shopify"
                    ]}
                />
                </div>
            </section>

             {/* Certifications (New Section) */}
             <section className='sm:px-8 px-0' ref={el => (sectionsRef.current["Certifications"] = el)}>
                <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-8">
                Licenses & Certifications
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <CertificationCard 
                        title="Introduction to Google SEO" 
                        issuer="UC Davis" 
                        date="Jan 2025"
                        icon={faAward}
                    />
                    <CertificationCard 
                        title="Responsive Web Design" 
                        issuer="freeCodeCamp" 
                        date="Nov 2025"
                    />
                     <CertificationCard 
                        title="Microsoft Learn Student Ambassador" 
                        issuer="Microsoft" 
                        date="Sep 2024"
                        icon={faAward}
                    />
                     <CertificationCard 
                        title="Foundations of UX Design" 
                        issuer="Coursera" 
                        date="Jul 2024"
                    />
                     <CertificationCard 
                        title="Meta Front-End Development" 
                        issuer="Coursera" 
                        date="Jul 2024"
                    />
                     <CertificationCard 
                        title="UI/UX Certification" 
                        issuer="Great Learning" 
                        date="May 2024"
                    />
                </div>
            </section>

        </div>
      </div>
    </div>
   </>
  );
};

export default About;
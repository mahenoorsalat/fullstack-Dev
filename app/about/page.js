"use client"

import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from 'next/head';
import Image from 'next/image';

// Solid icons
import { faArrowRight, faEnvelope, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

// Brand icons
import { faGithub, faLinkedin, faThreads, faFiverr, faUpwork } from '@fortawesome/free-brands-svg-icons';

const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState("Introduction");
  const sectionsRef = useRef({});

  useEffect(() => {
    // Trigger load animation
    const timer = setTimeout(() => setIsLoaded(true), 50); // slightly faster
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      });
    };

    const handleScroll = () => {
      const sectionPositions = Object.keys(sectionsRef.current).map(key => {
        const el = sectionsRef.current[key];
        return { key, top: el.offsetTop, height: el.offsetHeight };
      });
      const scrollY = window.scrollY + 100;
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
      <div className="w-4 h-px bg-gray-300 dark:bg-gray-600 mr-6" />
      <span className="text-base">{label}</span>
    </div>
  );

  const ExperienceCard = ({ title, company, period, description, achievements }) => (
    <div className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/30 dark:border-gray-700/30 mb-6 transition-all duration-300">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-black dark:group-hover:text-white transition-colors duration-300">
            {company}
          </h3>
          <p className="text-blue-600 dark:text-blue-400 font-medium">{title}</p>
        </div>
        <span className="text-gray-500 dark:text-gray-400 text-sm">{period}</span>
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

  const SkillCard = ({ title, description, tags }) => (
    <div className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl border border-gray-200/30 dark:border-gray-700/30 mb-6 p-6 transition-all duration-300">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-black dark:group-hover:text-white transition-colors duration-300">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">{description}</p>
      {tags && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span key={index} className="px-3 py-1 bg-white dark:bg-gray-700 rounded-lg text-sm text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-600 group-hover:border-gray-300 dark:group-hover:border-gray-500 transition-colors duration-300">{tag}</span>
          ))}
        </div>
      )}
    </div>
  );

  return (
   <>
      <Head>
        <title>Mahenoor Salat | Frontend & Backend Developer, Designer, SEO Specialist</title>
        <meta name="description" content="Mahenoor Salat is a versatile developer and designer specializing in frontend and backend development, UI/UX design, SEO optimization, and video editing. Active on GitHub, Fiverr, and Upwork delivering professional solutions." />
        <meta name="keywords" content="Frontend Developer, Backend Developer, UI/UX Designer, SEO Specialist, Video Editor, React Developer, Next.js, Tailwind CSS, Supabase, Vercel, GitHub, Fiverr, Upwork, Multimedia Developer, Web Developer, Fullstack Developer" />
        <meta name="author" content="Mahenoor Salat" />
        <meta property="og:title" content="Mahenoor Salat | Frontend & Backend Developer, Designer, SEO Specialist" />
        <meta property="og:description" content="Building high-performance web applications and visually compelling digital experiences. Expert in frontend/backend development, UI/UX design, SEO, and multimedia production." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.linkedin.com/in/salat-mahenoor/" />
        <meta property="og:image" content="https://images.pexels.com/photos/9969147/pexels-photo-9969147.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mahenoor Salat | Frontend & Backend Developer, Designer, SEO Specialist" />
        <meta name="twitter:description" content="Expert in frontend/backend development, UI/UX design, SEO, video editing, and freelancing platforms like GitHub, Fiverr, and Upwork." />
        <meta name="twitter:image" content="https://images.pexels.com/photos/9969147/pexels-photo-9969147.jpeg" />
      </Head>
    <div className="min-h-screen bg-white dark:bg-gray-900 relative overflow-hidden transition-colors duration-300">
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
    {["Introduction", "Work Experience", "Studies", "Technical Skills"].map(label => (
      <SidebarNavItem key={label} label={label} />
    ))}
  </nav>
</div>



      {/* Main Content */}
      <div className="sm:ml-64  ml-0 flex justify-center">
        <div className="w-[80%] pt-20 space-y-20">
            {/* Profile Header Section */}
            <section className="sm:px-8 px-0 py-12 mb-12">
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

  {/* Subtle glow */}
  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/0 via-blue-500/5 dark:via-blue-400/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

  {/* Button content */}
  <div className="relative z-10 flex items-center space-x-2">
    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-blue-700 dark:text-blue-300" />
    <span className="font-medium text-blue-700 dark:text-blue-300 group-hover:text-blue-800 dark:group-hover:text-blue-200 transition-colors duration-300">
      Schedule a call
    </span>
    <div className="w-8 h-8 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-full flex items-center justify-center">
      <FontAwesomeIcon icon={faArrowRight} className="text-black dark:text-white text-xs" />
    </div>
  </div>
</div>

                  {/* Name and Title */}
                  <h1 className="text-5xl font-semibold text-gray-900 dark:text-gray-100 mb-4 hover:text-black dark:hover:text-white transition-colors duration-300">
   Mahenoor Salat                  </h1>
                  <p className="text-gray-600 dark:text-gray-400 text-lg mb-6 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300">
                                 Frontend & Backend Developer | Designer | SEO Specialist | Video Editor
                  </p>

                  {/* Location and Status */}
                  <div className="flex items-center mb-4 text-gray-700 dark:text-gray-300">
                    <div className="w-4 h-4 bg-red-500 rounded-sm mr-2"></div>
                    <span className="text-base">Asia/India</span>
                  </div>

                  {/* Languages */}
                  <div className="flex gap-2 mb-6">
                    <span className="px-3 py-1 bg-white dark:bg-gray-700 rounded-lg text-sm text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-600">
                      English
                    </span>
                    <span className="px-3 py-1 bg-white dark:bg-gray-700 rounded-lg text-sm text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-600">
                      Bahasa
                    </span>
                  </div>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300 max-w-2xl">
  Mahenoor is a versatile developer and designer specializing in building high-performance web applications and visually compelling digital experiences. With expertise in frontend and backend development, UI/UX design, SEO optimization, and multimedia production, she transforms complex projects into seamless, engaging solutions. Active on GitHub, Fiverr, and Upwork, Mahenoor delivers professional results for clients worldwide, combining technical skill with creative insight.
</p>

                </div>  
                {/* Profile Picture */}
                <div className="w-40 h-40 bg-white/30 dark:bg-gray-700/30 backdrop-blur-xl rounded-full border border-gray-200 dark:border-gray-600 overflow-hidden hover:scale-105 transition-all duration-500 flex-shrink-0">
<Image 
  src="/profile.jpeg" 
  alt="Profile" 
  width={200} 
  height={200} 
  className="rounded-full object-cover" 
/>                </div>
              </div>
            </section>
       
       {/* Work Experience */}
<section className='sm:px-8 px-0' ref={el => (sectionsRef.current["Work Experience"] = el)}>
  <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-8 hover:text-black dark:hover:text-white transition-colors duration-300">
    Work Experience
  </h2>

  <ExperienceCard
    company="GFE Foundation"
    title="Frontend & Backend Developer"
    period="2025 - Present"
    description="Building sustainable blockchain-based energy solutions for decentralized energy trading and clean power systems."
    achievements={[
      "Developed responsive and secure frontend interfaces using React.js and Tailwind CSS.",
      "Integrated backend systems for tokenized energy transactions and user dashboards.",
      "Collaborated with blockchain engineers to implement smart contracts for GFE tokens."
    ]}
  />

  <ExperienceCard
    company="EGMA"
    title="UI/UX Designer"
    period="Nov 2024 - Dec 2024"
    description="Designed intuitive interfaces for web and mobile applications."
    achievements={[
      "Created interactive wireframes and prototypes for client projects.",
      "Collaborated with development teams to implement visually appealing designs."
    ]}
  />

  <ExperienceCard
    company="Stability Nexus"
    title="Frontend Developer"
    period="Oct 2024 - Nov 2024"
    description="Built responsive web designs and optimized user interfaces."
    achievements={[
      "Implemented mobile-first layouts and improved frontend performance.",
      "Worked remotely with international teams to deliver scalable solutions."
    ]}
  />

  <ExperienceCard
    company="xorio"
    title="UI/UX Designer"
    period="Sep 2024 - Oct 2024"
    description="Designed user-centered web and mobile experiences."
    achievements={[
      "Developed prototypes and interactive interfaces aligned with brand guidelines.",
      "Conducted usability testing to enhance user experience."
    ]}
  />

  <ExperienceCard
    company="RKWEB"
    title="Frontend Developer"
    period="Feb 2024 - Sep 2024"
    description="Created responsive web applications using React.js and Tailwind CSS."
    achievements={[
      "Integrated frontend and backend functionalities seamlessly.",
      "Optimized web performance and improved UX across projects."
    ]}
  />

  <ExperienceCard
    company="Al Amaan Institute"
    title="Designer"
    period="Apr 2022 - Jul 2022"
    description="Designed mobile applications and app logos for the university."
    achievements={[
      "Delivered user-friendly navigation and engaging interfaces.",
      "Ensured designs aligned with university branding and objectives."
    ]}
  />
</section>

{/* Studies */}
<section className='sm:px-8 px-0' ref={el => (sectionsRef.current["Studies"] = el)}>
  <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-8 hover:text-black dark:hover:text-white transition-colors duration-300">
    Studies
  </h2>

  <ExperienceCard
    company="Manipal University Jaipur"
    title="Bachelor's degree, Computer Science"
    period="May 2024 - May 2026"
    description="Pursuing a degree in Computer Science to strengthen technical and problem-solving skills."
  />

  <ExperienceCard
    company="Commerce Royal Higher Secondary School"
    title="H.S.C"
    period="Apr 2022 - Apr 2024"
    description="Completed Higher Secondary Certificate with excellent academic performance."
  />
</section>

          {/* Technical Skills */}
          <section className='sm:px-8 px-0' ref={el => (sectionsRef.current["Technical Skills"] = el)}>
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-8 hover:text-black dark:hover:text-white transition-colors duration-300">
              Technical Skills
            </h2>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
              <SkillCard
  title="Design & Video Editing"
  description="Proficient in UI/UX design, animations, and multimedia content creation for engaging user experiences."
  tags={[
    "Figma", "Adobe XD", "UI/UX Design", "Wireframing", "Prototyping", 
    "Adobe Premiere Pro", "Animation", "Motion Graphics", "Illustrator", "Photoshop", 
    "Design Systems", "Branding", "Interactive Interfaces"
  ]}
/>
           
<SkillCard
  title="Backend & Blockchain Development"
  description="Experienced in backend logic, APIs, databases, and blockchain integrations for decentralized applications."
  tags={[
    "Node.js", "Express.js", "MongoDB", "MERN Stack", "Python", "Django", 
    "Supabase", "PostgreSQL", "REST API", "GraphQL", "Web3.js", "Ethers.js", 
    "ICP/DFINITY", "Blockchain Integration", "Smart Contracts", "Tokenomics", 
    "Authentication & Security", "Performance Optimization"
  ]}
/>

 <SkillCard
  title="Frontend Development"
  description="Expert in building responsive, dynamic, and interactive web applications using modern frontend technologies."
  tags={[
    "React", "Next.js", "Tailwind CSS", "HTML", "CSS", "JavaScript", "TypeScript", 
    "Redux", "GSAP", "Vite", "Vercel", "Framer Motion", "NUXT" , "VUE" , "React Native" , "Flutter"
  ]}
/>

<SkillCard
  title="Freelancing & Platforms"
  description="Active on multiple platforms, delivering professional projects to global clients with strong reviews."
  tags={[
    "GitHub", "Fiverr", "Upwork", "LinkedIn", "Discord", "Slack", "Youtube", 
  
  ]}
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
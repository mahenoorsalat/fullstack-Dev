"use client";

import React, { useState, useEffect } from "react";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

const WorkContent = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 50);
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const ProjectCard = ({
    title,
    description,
    collaborators = [],
    hasReadMore = false,
    hasViewProject = false,
    imageSrc,
    projectUrl,
    delay = 0,
  }) => {
    return (
      <div
        className={`group bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl border border-gray-200/30 dark:border-gray-700/30 mb-16 overflow-hidden transition-all duration-500 ${
          isLoaded
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 overflow-hidden">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </div>

        <div className="p-6 flex flex-col ">
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 transition-colors duration-300">
              {title}
            </h3>
          </div>

          <div className="flex flex-col justify-between">
            {description && (
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                {description}
              </p>
            )}

            {collaborators.length > 0 && (
              <div className="flex -space-x-2 mb-4">
                {collaborators.map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 bg-white/60 dark:bg-gray-700/60 border-2 border-white dark:border-gray-800 rounded-full backdrop-blur-sm hover:scale-110 hover:z-10 overflow-hidden transition-all duration-300 relative"
                  >
                    <Image
                      src="/profile.jpeg"
                      alt="collaborator"
                      height={20}
                      width={20}
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}

            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
              {hasReadMore && (
                <button className="group/btn relative overflow-hidden font-medium text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center transition-all duration-300">
                  <span className="relative z-10">Read case study</span>
                  <div className="absolute inset-0 bg-blue-50 dark:bg-blue-900/30 scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left rounded pointer-events-none" />
                </button>
              )}

              {hasViewProject && projectUrl && (
                <a
                  href={projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn relative overflow-hidden font-medium text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center transition-all duration-300"
                >
                  <span className="relative z-10">View project</span>
                  <ExternalLink className="w-4 h-4 ml-1 relative z-10" />
                  <div className="absolute inset-0 bg-blue-50 dark:bg-blue-900/30 scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left rounded pointer-events-none" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 relative overflow-hidden transition-colors duration-300">
      {/* Background Animation */}
      <div
        className={`absolute -top-32 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1500px] h-[1500px] pointer-events-none rounded-full overflow-hidden transition-all duration-[3000ms] ease-out ${
          isLoaded ? "opacity-40 scale-100" : "opacity-80 scale-125"
        }`}
      >
        <div
          className="absolute inset-0 bg-[rgb(124,222,242)] dark:bg-[rgb(59,130,246)] rounded-full blur-[200px] opacity-40 dark:opacity-30 transition-transform duration-[4000ms] ease-out"
          style={{
            transform: `translate(${mousePosition.x * 5}px, ${
              mousePosition.y * 5
            }px) scale(${isLoaded ? 1 : 1.2})`,
          }}
        />
        <div
          className="absolute inset-0 bg-white dark:bg-gray-800 rounded-full blur-[250px] opacity-20 dark:opacity-10 transition-transform duration-[4000ms] ease-out"
          style={{
            transform: `translate(${mousePosition.x * 2}px, ${
              mousePosition.y * 2
            }px) scale(${isLoaded ? 1 : 1.1})`,
          }}
        />
        <div
          className="absolute inset-0 bg-[#a0e0f5] dark:bg-[#1e40af] rounded-full blur-[300px] opacity-10 dark:opacity-5 transition-transform duration-[4000ms] ease-out"
          style={{
            transform: `translate(${mousePosition.x * 1.5}px, ${
              mousePosition.y * 1.5
            }px) scale(${isLoaded ? 1 : 1.05})`,
          }}
        />
      </div>

      <div className="pt-32 pb-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 hover:text-black dark:hover:text-white transition-colors duration-300">
              Projects — Mahenoor Salat
            </h1>
          </div>

          <ProjectCard
            title="FullStack Project — HumanInk"
            description="End-to-end Fullstack project with frontend, backend, UI/UX design, and SEO optimization."
            collaborators={[1]}
            hasViewProject={true}
            imageSrc="/project2.png"
            projectUrl="https://human-ink.vercel.app/"
            delay={200}
          />

          <ProjectCard
            title="Bimble"
            description="Developed an advanced Can platform with complete frontend, backend, design, and SEO work."
            collaborators={[1]}
            hasViewProject={true}
            imageSrc="/project3.png"
            projectUrl="https://bimble-zeta.vercel.app/"
            delay={400}
          />

          <ProjectCard
            title="Empire Result Landing Page"
            description="Designed and developed a landing page for Empire Result with backend integration, frontend, UI/UX, and SEO."
            collaborators={[1]}
            hasViewProject={true}
            imageSrc="/project4.png"
            projectUrl="https://www.empireresults.com/"
            delay={600}
          />

          <ProjectCard
            title="Sone Doll , JP Website"
            description="Crafted a Japanese-inspired landing page for Sone Doll, blending modern UI/UX with cultural aesthetics. Implemented responsive frontend, seamless backend integration, and SEO optimization to ensure performance and visibility."
            collaborators={[1]}
            hasViewProject={true}
            imageSrc="/project5.png"
            projectUrl="https://sonedoll.vercel.app/"
            delay={600}
          />
        </div>
      </div>
    </div>
  );
};

export default WorkContent;
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { motion } from "motion/react";

const Navbar = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [time, setTime] = useState("");
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setIsLoaded(true);
    const updateTime = () => setTime(new Date().toLocaleTimeString());
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const NavItem = ({ icon, label, href }) => {
    const isActive = pathname === href;

    return (
      <Link href={href} aria-label={label}>
        <motion.div
          initial={{ scale: 1, opacity: 0.9 }}
          whileHover={{
            scale: 1.15,
            opacity: 1,
            backgroundColor: theme === "dark" ? "rgba(55,65,81,0.8)" : "rgba(239,239,239,0.9)",
            boxShadow: theme === "dark"
              ? "0 4px 15px rgba(255,255,255,0.15)"
              : "0 4px 15px rgba(0,0,0,0.15)",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className={`group flex flex-col sm:flex-row items-center justify-center sm:justify-start 
            px-3 sm:px-4 py-2 rounded-full cursor-pointer border
            transition-colors duration-300
            ${
              isActive
                ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md"
                : "border-transparent text-gray-700 dark:text-gray-300"
            }`}
        >
          <div
            className={`flex items-center justify-center w-6 h-6 duration-300 ${
              isActive ? "text-white" : "text-gray-700 dark:text-gray-300"
            }`}
          >
            {icon}
          </div>
          <span
            className={`text-sm font-medium mt-1 sm:mt-0 sm:ml-2 hidden sm:inline-block ${
              isActive ? "text-white" : ""
            }`}
          >
            {label}
          </span>
        </motion.div>
      </Link>
    );
  };

  return (
    <>
      <nav className="fixed bottom-4 sm:top-4 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl px-2 py-1 flex justify-between space-x-1 transition-all duration-500 pointer-events-auto"
        >
          <NavItem
            href="/"
            label="Home"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9 9 9M4 10v10a1 1 0 001 1h14a1 1 0 001-1V10" />
              </svg>
            }
          />
          <NavItem
            href="/about"
            label="About"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l9 9-9 9-9-9 9-9z" />
              </svg>
            }
          />
          <NavItem
            href="/work"
            label="Work"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
              </svg>
            }
          />
          <NavItem
            href="/clients"
            label="Clients"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 5h14v14H5z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 9h6v6H9z" />
              </svg>
            }
          />
        </motion.div>
      </nav>

      {/* Time & Location */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-4 left-4 z-40 pointer-events-none"
      >
        <span className="text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 cursor-pointer pointer-events-auto">
          Asia/India
        </span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-4 right-4 z-40 pointer-events-none"
      >
        <span className="text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 cursor-pointer font-mono pointer-events-auto">
          {time}
        </span>
      </motion.div>
    </>
  );
};

export default Navbar;
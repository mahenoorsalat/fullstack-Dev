"use client";
import { motion } from "motion/react";

export default function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen"
    >
      {children}
    </motion.div>
  );
}
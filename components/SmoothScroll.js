"use client";
import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Adjust speed (higher = smoother/slower)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential easing
      smoothWheel: true,
      // smoothTouch: true, // Uncomment if you want smooth scroll on mobile
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
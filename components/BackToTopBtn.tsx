"use client";

import { useState, useEffect } from "react";
import { MoveUpIcon } from "lucide-react";

interface BackToTopButtonProps {
  threshold?: number;
}

export function BackToTopButton({ threshold = 300 }: BackToTopButtonProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > threshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    // Initialize visibility state
    toggleVisibility();

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [threshold]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`fixed bottom-4 right-4 z-50 p-7 rounded-3xl shadow-md transition-opacity duration-300 cursor-pointer ${
        isVisible
          ? "bg-pulse-orange-50 opacity-100"
          : "opacity-0 pointer-events-none"
      }`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <MoveUpIcon className="h-6 w-6" />
    </button>
  );
}

"use client";

import { useTheme } from "next-themes";
import { Facebook, Twitter, Instagram, Github } from "lucide-react";

export default function Footer() {
  const { resolvedTheme } = useTheme();

  return (
    <footer className={`p-4 flex justify-center items-center gap-4 transition-colors
        ${resolvedTheme === "dark" ? "bg-gray-900 text-white" : "bg-gray-300 text-black"}`}>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <Facebook className="w-6 h-6 hover:text-blue-600 transition-colors" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <Twitter className="w-6 h-6 hover:text-blue-400 transition-colors" />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <Instagram className="w-6 h-6 hover:text-pink-600 transition-colors" />
      </a>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        <Github className="w-6 h-6 hover:text-gray-500 transition-colors" />
      </a>
    </footer>
  );
}

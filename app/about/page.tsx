"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      
      {/* Image */}
      <Image 
        src="/about-us.jfif" 
        alt="About Us" 
        width={500} 
        height={300} 
        className="rounded-lg shadow-md"
      />

      {/* Description */}
      <p className="mt-6 text-lg text-center max-w-2xl">
        We are a passionate team of developers dedicated to building high-quality applications.
        Our mission is to create seamless user experiences through modern technology.
      </p>

      {/* Additional Info */}
      <div className="mt-4 bg-gray-100 dark:bg-gray-800 p-4 rounded-md text-center">
        <p className="text-md">Founded: 2024</p>
        <p className="text-md">Location: Remote</p>
      </div>
    </div>
  );
}

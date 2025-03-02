
// export default function Home() {
//   return (
//     <>
    
//       <div className="flex justify-center items-center h-screen text-gray-900 dark:text-white">
//         <h1 className="text-3xl">Welcome to Next.js!</h1>
//       </div>
//     </>
//   );
// }




"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";  // Import Navbar
import Card from "@/components/Card";  // Import Card
import Footer from "@/components/Footer";  // Import Footer

export default function HomePage() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Ensure theme is detected before rendering
  if (!mounted) return null;

  return (
    <div className={`min-h-screen flex flex-col justify-between transition-colors 
        ${resolvedTheme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>

      {/* Navbar */}
      {/* <Navbar /> */}

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center flex-grow py-10">
        <h1 className="text-3xl font-bold mb-6">Welcome to My Next.js App</h1>

        {/* Card Component */}
        <Card />
      </main>

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
}


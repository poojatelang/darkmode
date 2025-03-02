// "use client";

// import { useTheme } from "next-themes";
// import { useEffect, useState } from "react";
// import Link from "next/link";

// export default function Navbar() {
//   const { theme, setTheme, resolvedTheme } = useTheme();
//   console.log(resolvedTheme)
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   return (
//     <nav className="bg-gray-200 dark:bg-gray-800 p-4 flex justify-between items-center">
//       <h1 className="text-xl font-bold text-gray-900 dark:text-white">Next.js App</h1>
//       <div className="flex gap-4">
//         <Link href="/" className="text-gray-900 dark:text-white">Home</Link>
//         <Link href="/about" className="text-gray-900 dark:text-white">About</Link>

//         {mounted && (
//           <button
//             onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
//             className="px-3 py-1 bg-gray-300 dark:bg-gray-700 text-black dark:text-white rounded"
//           >
//             {resolvedTheme === "dark" ? "Light Mode" : "Dark Mode"}
//           </button>
//         )}
//       </div>
//     </nav>
//   );
// }




















// "use client";
// import { useEffect, useState } from "react";
// import { useTheme } from "next-themes";

// export default function Navbar() {
//   const { theme, setTheme, resolvedTheme } = useTheme();
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   return (
//     <nav className="bg-gray-200 dark:bg-gray-800 p-4 flex justify-between items-center">
//       <h1 className="text-xl font-bold text-gray-900 dark:text-white">Next.js App</h1>
//       <div className="flex gap-4">
//         <a href="/" className="text-gray-900 dark:text-white">
//           Home
//         </a>
//         <a href="/about" className="text-gray-900 dark:text-white">
//           About
//         </a>
//         <a href="/card" className="text-gray-900 dark:text-white">
//           Card
//         </a>

//         {mounted && (
//           <button
//             onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
//             className="px-3 py-1 bg-gray-300 dark:bg-gray-700 text-black dark:text-white rounded"
//           >
//             {resolvedTheme === "dark" ? "Light Mode" : "Dark Mode"}
//           </button>
//         )}
//       </div>
//     </nav>
//   );
// }


// "use client";

// import { useTheme } from "next-themes";
// import { useEffect, useState } from "react";

// export default function Navbar() {
//   const { theme, setTheme, resolvedTheme } = useTheme();
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   return (
//     <nav className="bg-gray-200 dark:bg-gray-800 p-4 flex justify-between items-center shadow-md">
//       <h1 className="text-xl font-bold text-gray-900 dark:text-white">Next.js App</h1>
//       <div className="flex gap-4">
//         <a href="/" className="text-gray-900 dark:text-white">Home</a>
//         <a href="/about" className="text-gray-900 dark:text-white">About</a>
//         <a href="/card" className="text-gray-900 dark:text-white">Card</a>

//         {mounted && (
//           <button
//             onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
//             className="px-3 py-1 bg-gray-300 dark:bg-gray-700 text-black dark:text-white rounded"
//           >
//             {resolvedTheme === "dark" ? "Light Mode" : "Dark Mode"}
//           </button>
//         )}
//       </div>
//     </nav>
//   );
// }












"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="bg-gray-200 dark:bg-gray-800 p-4 flex justify-between items-center shadow-md transition-all duration-300">
      <h1 className="text-xl font-bold text-gray-900 dark:text-white">Next.js App</h1>

      <div className="flex gap-4">
        <a href="/" className="text-gray-900 dark:text-white transition-all">Home</a>
        <a href="/about" className="text-gray-900 dark:text-white transition-all">About</a>
        <a href="/card" className="text-gray-900 dark:text-white transition-all">Card</a>

        {mounted && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="px-3 py-1 bg-gray-700 dark:bg-gray-300 text-white dark:text-black rounded border border-gray-500 dark:border-gray-400 transition-all duration-300"
          >
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </button>
        )}
      </div>
    </nav>
  );
}


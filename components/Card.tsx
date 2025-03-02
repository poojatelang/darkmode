// "use client";

// import { Mic, Plus, Zap, ArrowRight } from "lucide-react";
// import Navbar from "@/components/Navbar";

// export default function CardPage() {

//   return (
//     <>
//       <Navbar />
//     <div className="flex justify-center mt-10">
//       <div className="p-5 bg-white dark:bg-gray-900 dark:text-white rounded-xl shadow-lg w-96">
//         <h2 className="text-lg font-bold mb-3">Dark Mode Text Input</h2>

//         {/* Text Area */}
//         <textarea
//           className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-700 dark:text-white focus:outline-none"
//           placeholder="Type something..."
//         ></textarea>

//         {/* Button & Icons */}
//         <div className="flex justify-between items-center mt-4">
//           {/* Attach Button */}
//           <button className="p-2 bg-gray-300 dark:bg-gray-800 rounded-full">
//             <Plus className="w-5 h-5 dark:text-white" />
//           </button>

//           {/* Voice Icon */}
//           <button className="p-2 bg-gray-300 dark:bg-gray-800 rounded-full">
//             <Mic className="w-5 h-5 dark:text-white" />
//           </button>

//           {/* Auto Icon */}
//           <button className="p-2 bg-gray-300 dark:bg-gray-800 rounded-full">
//             <Zap className="w-5 h-5 dark:text-white" />
//           </button>

//           {/* Arrow Icon */}
//           <button className="p-2 bg-gray-300 dark:bg-gray-800 rounded-full">
//             <ArrowRight className="w-5 h-5 dark:text-white" />
//           </button>
//         </div>
//       </div>
//     </div>
//     </>
//   );
// }









// "use client";

// import Navbar from "@/components/Navbar";
// import { Mic, Plus, Zap, ArrowRight } from "lucide-react";

// export default function CardPage() {
//   return (
//     <>
//     <Navbar/>
//     <div className="flex justify-center mt-10">
//       <div className="p-5 bg-gray-50 dark:bg-black dark:text-white rounded-xl shadow-lg w-96">
//         <h2 className="text-lg font-bold mb-3">Dark Mode Text Input</h2>

//         {/* Text Area */}
//         <textarea
//           className="w-full p-3 rounded-md bg-gray-200 text-gray-900 dark:bg-gray-800 dark:text-white focus:outline-none"
//           placeholder="Type something..."
//         ></textarea>

//         {/* Button & Icons */}
//         <div className="flex justify-between items-center mt-4">
//           {/* Attach Button */}
//           <button className="p-2 bg-gray-300 text-black dark:bg-gray-900 dark:text-white rounded-full hover:bg-gray-400 dark:hover:bg-gray-700">
//             <Plus className="w-5 h-5 dark:text-white" />
//           </button>

//           {/* Voice Icon */}
//           <button className="p-2 bg-gray-300 text-black dark:bg-gray-900 dark:text-white rounded-full hover:bg-gray-400 dark:hover:bg-gray-700">
//             <Mic className="w-5 h-5 dark:text-white" />
//           </button>

//           {/* Auto Icon */}
//           <button className="p-2 bg-gray-300 text-black dark:bg-gray-900 dark:text-white rounded-full hover:bg-gray-400 dark:hover:bg-gray-700">
//             <Zap className="w-5 h-5 dark:text-white" />
//           </button>

//           {/* Arrow Icon */}
//           <button className="p-2 bg-gray-300 text-black dark:bg-gray-900 dark:text-white rounded-full hover:bg-gray-400 dark:hover:bg-gray-700">
//             <ArrowRight className="w-5 h-5 dark:text-white" />
//           </button>
//         </div>
//       </div>
//     </div>
//     </>
//   );
// }



"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Mic, Plus, Zap, ArrowRight } from "lucide-react";

export default function Card() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex justify-center mt-10">
      <div className={`p-5 rounded-xl shadow-lg w-96 transition-colors 
         ${resolvedTheme === "dark" ? "bg-black text-white" : "bg-gray-50 text-black"}`}>
        <h2 className="text-lg font-bold mb-3">Dark Mode Text Input</h2>

        {/* Text Area */}
        <textarea
          className={`w-full p-3 rounded-md focus:outline-none transition-colors 
            ${resolvedTheme === "dark" ? "bg-gray-800 text-white" : "bg-gray-200 text-black"}`}
          placeholder="Type something..."
        ></textarea>

        {/* Button & Icons */}
        <div className="flex justify-between items-center mt-4">
          {/** Icons with dynamic colors based on theme **/}
          <button className={`p-2 rounded-full transition-colors
              ${resolvedTheme === "dark" ? "bg-gray-900 text-white hover:bg-gray-700" : "bg-gray-300 text-black hover:bg-gray-400"}`}>
            <Plus className="w-5 h-5" />
          </button>

          <button className={`p-2 rounded-full transition-colors
              ${resolvedTheme === "dark" ? "bg-gray-900 text-white hover:bg-gray-700" : "bg-gray-300 text-black hover:bg-gray-400"}`}>
            <Mic className="w-5 h-5" />
          </button>

          <button className={`p-2 rounded-full transition-colors
              ${resolvedTheme === "dark" ? "bg-gray-900 text-white hover:bg-gray-700" : "bg-gray-300 text-black hover:bg-gray-400"}`}>
            <Zap className="w-5 h-5" />
          </button>

          <button className={`p-2 rounded-full transition-colors
              ${resolvedTheme === "dark" ? "bg-gray-900 text-white hover:bg-gray-700" : "bg-gray-300 text-black hover:bg-gray-400"}`}>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}


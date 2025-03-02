

// "use client";
// import ThemeProvider from "@/components/ThemeProvider";
// import Navbar from "@/components/Navbar";
// import "./globals.css";
// import Footer from "@/components/Footer";

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       {/* <body className="bg-white text-black dark:bg-gray-900 dark:text-white"> */}
//       <body >
//       <ThemeProvider>
//           <Navbar /> 
//           <main className="p-4">{children}</main> {/* Page content changes here */}
//           <Footer/>
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }


"use client";

import ThemeProvider from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className="transition-colors duration-300">
        <ThemeProvider>
          <Navbar />
          <main className="p-4">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}





//hydration error
// "use client";

// import { ThemeProvider as NextThemesProvider } from "next-themes";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import "./globals.css";
// import { ReactNode } from "react";

// interface LayoutProps {
//   children: ReactNode;
// }

// const RootLayout: React.FC<LayoutProps> = ({ children }) => {
//   return (
//     <html lang="en">
//       <body className="transition-colors duration-300">
//         <NextThemesProvider attribute="class" defaultTheme="light" enableSystem>
//           <Navbar />
//           <main className="p-4">{children}</main> {/* Page content changes here */}
//           <Footer />
//         </NextThemesProvider>
//       </body>
//     </html>
//   );
// };

// export default RootLayout;






// Runtime Error


// Error: The default export is not a React Component in "/layout"
//so add React:FC


// "use client";

// import { ThemeProvider as NextThemesProvider } from "next-themes";
// import { ReactNode, useEffect, useState } from "react";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import "./globals.css";

// interface Props {
//   children: ReactNode;
// }

// export default function RootLayout({ children }: Props) {
//   return (
//     <html lang="en">
//       <body className="transition-colors duration-300">
//         <NextThemesProvider attribute="class" defaultTheme="light" enableSystem>
//           <Navbar />
//           <main className="p-4">{children}</main> {/* Page content changes here */}
//           <Footer />
//         </NextThemesProvider>
//       </body>
//     </html>
//   );
// }

















//error showing html and body is missing
// "use client";

// import { ThemeProvider as NextThemesProvider } from "next-themes";
// import { ReactNode, useEffect, useState } from "react";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import "./globals.css";

// interface Props {
//   children: ReactNode;
// }

// export default function RootLayout({ children }: Props) {
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) return <>{children}</>; // Prevents hydration mismatch

//   return (
//     <NextThemesProvider attribute="class" defaultTheme="light" enableSystem>
//       <html lang="en">
//         <body className="transition-colors duration-300">
//           <Navbar />
//           <main className="p-4">{children}</main> {/* Page content changes here */}
//           <Footer />
//         </body>
//       </html>
//     </NextThemesProvider>
//   );
// }



























































// "use client";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { ThemeProvider } from "next-themes";

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body>
//         <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
//         <Navbar /> 
// <main className="p-4">{children}</main> Page content changes here
//  <Footer/>
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }



















































































// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }

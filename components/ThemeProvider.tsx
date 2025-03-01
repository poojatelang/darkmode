// "use client";

// import { ThemeProvider as NextThemesProvider } from "next-themes";
// import { ReactNode } from "react";

// interface Props {
//   children: ReactNode;
// }

// export default function ThemeProvider({ children }: Props) {
//   return <NextThemesProvider attribute="class">{children}</NextThemesProvider>;
// }

"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ReactNode, useEffect, useState } from "react";

interface Props {
  children: ReactNode;
}

export default function ThemeProvider({ children }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>; // Avoid hydration mismatch
  }

  return <NextThemesProvider attribute="class" defaultTheme="system">{children}</NextThemesProvider>;
}

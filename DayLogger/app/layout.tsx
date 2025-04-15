import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
// import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "Example Pipe • Screenpipe",
  description: "A clean starting point for your Screenpipe pipe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        className="antialiased min-h-screen bg-background" 
        suppressHydrationWarning
        data-suppress-hydration-warning={true}
      >
        {/* <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange> */}
          {children}
        {/* </ThemeProvider> */}
        <Toaster />
      </body>
    </html>
  );
}

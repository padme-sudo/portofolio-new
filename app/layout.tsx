import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import MusicPlayer from "@/components/ui/MusicPlayer";
import { ThemeProvider } from "@/components/providers/theme-provider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Aditya Siagian | Portofolio",
  description: "A premium personal portfolio showcasing creative web development and design by Aditya Siagian.",
  icons: {
    icon: "/profile3.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <Navbar />
          <main>{children}</main>
          <MusicPlayer />
        </ThemeProvider>
      </body>
    </html>
  );
}

import { ThemeProvider } from "next-themes";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
// import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import Provider from "@/components/ClerkProvider";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";
// import { ClerkProvider } from "@clerk/nextjs";
// import { ThemeProvider } from "@/components/theme-provider";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans'
});


export const metadata: Metadata = {
  title: "SeedInnovations",
  description: "Innovates with Seed",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">

        <body className={cn('min-h-screen bg-light-300 font-sans antialiased', fontSans.variable)}>
          <Navbar />
          <ThemeProvider attribute="class" defaultTheme="light">
            {children}
          </ThemeProvider>
          <Footer />

        </body>

      </html>
    </ClerkProvider>

  );
}

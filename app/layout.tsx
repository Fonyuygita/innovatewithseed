import { ThemeProvider } from "next-themes";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Nunito, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
// import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import Provider from "@/components/ClerkProvider";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";
import { frFR } from '@clerk/localizations'
import Mode from "@/components/Mode";
import { ThemeContextProvider } from "@/components/context/ThemeContext";
// import { ClerkProvider } from "@clerk/nextjs";
// import { ThemeProvider } from "@/components/theme-provider";

const fontSans = Inter({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans'
});


const inter = Inter({ subsets: ["latin"] });

// const fontSans = Nunito({
//   subsets: ["latin"],
//   weight: ['300', '400', '500', '600', '700'],
//   variable: '--font-sans'
// });



export const metadata: Metadata = {
  title: "SeedInnovations",
  description: "Innovates with Seed",
};

const localization = {
  socialButtonsBlockButton: 'Sign In with {{provider|titleize}}',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        layout: {
          socialButtonsPlacement: 'bottom',
          socialButtonsVariant: 'auto',
          unsafe_disableDevelopmentModeWarnings: true,
        },
      }}
      localization={localization}>
      <html lang="en">

        <body className={cn('min-h-screen bg-light-300 font-sans antialiased', fontSans.variable)}>


          <ThemeProvider attribute="class" defaultTheme="light"

          >
            <ThemeContextProvider>
              {children}
              <Mode />
            </ThemeContextProvider>
          </ThemeProvider>
        </body>

      </html>
    </ClerkProvider>

  );
}

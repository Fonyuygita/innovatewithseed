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
import { dark } from '@clerk/themes'
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
  title: "SEED",
  description: "innovatewithseed.com - SEED (Skill Enhancement and Empowerment through Digitalisation) is a private tech startup based in Bamenda, Cameroon. Legally recognized under Cameroonian business regulations, SEED operates independently with a mission to foster technological innovation and provide hands-on training in various tech disciplines. Through its coding bootcamps, internships, and tech programs, SEED plays a pivotal role in equipping individuals with digital skills, empowering them to solve real-world problems.",

  keywords: [
    "fonyuygita",
    "seed Inc",
    "checko yohane",
    "Fien dora",
    "skills enhancement and empowerment",
    "bamenda",
    "center bolt nkwen",
    "fonyuy gita",
    "fonyuy jude fomonyuy",
    "nquami",
    "tech tutor ",
    "tech tutor",
    "tech tutor seed",
    "cameroon"
  ],
  openGraph: {
    url: "https://innovatewithseed.com",
    type: "website",
    title: "Skills Enhancement and Empowerment Through Digitalization  |  Tech Startup",
    description:
      "SEED (Skill Enhancement and Empowerment through Digitalisation) is a private tech startup based in Bamenda, Cameroon. Legally recognized under Cameroonian business regulations, SEED operates independently with a mission to foster technological innovation and provide hands-on training in various tech disciplines. Through its coding bootcamps, internships, and tech programs, SEED plays a pivotal role in equipping individuals with digital skills, empowering them to solve real-world problems..",
    images: [
      {
        url: "https://i.ibb.co/PDw0Wg2/cover2.jpg",
        width: 1200,
        height: 630,
        alt: "SEED"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Skills Enhancement and Empowerment Through Digitalization",
    description:
      "SEED (Skill Enhancement and Empowerment through Digitalisation) is a private tech startup based in Bamenda, Cameroon. Legally recognized under Cameroonian business regulations, SEED operates independently with a mission to foster technological innovation and provide hands-on training in various tech disciplines. Through its coding bootcamps, internships, and tech programs, SEED plays a pivotal role in equipping individuals with digital skills, empowering them to solve real-world problems. ",
    creator: "@fonyuygita",
    site: "@innovatewithseed",
    images: [
      {
        url: "https://i.ibb.co/PDw0Wg2/cover2.jpg",
        width: 1200,
        height: 630,
        alt: "SEED"
      }
    ]
  },
  alternates: {
    canonical: "https://innovatewithseed.com"
  }

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

        baseTheme: dark,
        variables: {
          colorPrimary: "#3371ff",
          fontSize: '13px'
        }
      }}
      localization={localization}>
      <html lang="en">

        <body className={cn('min-h-screen bg-gray-900 font-sans antialiased', fontSans.variable)}>


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

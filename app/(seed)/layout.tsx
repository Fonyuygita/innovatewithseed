
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>

            {/*  RIGHT */}

            <Navbar />
            {children}
            <Footer />
        </>

    );
}

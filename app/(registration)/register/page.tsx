// import ClientForm from "@/components/forms/StudentForm";
import ClientForm from "@/components/forms/StudentForms";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="flex min-h-screen ">
            <section className="remove-scrollbar container my-auto">
                <div className="sub-container max-w-[496px]">

                    <Image
                        src="/seedLogo.png"
                        height={1000}
                        width={1000}
                        alt="patient"
                        className="mb-12 h-10 w-fit"
                    />
                    <h2 className="text-2xl text-blue-500 font-bold">Welcome to</h2>

                    <div className="text-l4 regular mt-20 flex justify-between">
                        <p className="justify-items-end text-dark-600 xl:text-left">
                            @ 2024 SeedInnovates
                        </p>
                        <Link href="/?admin=true" className="text-green-500">Registered?</Link>
                    </div>

                </div>
            </section>

            {/* right side section */}
            <Image
                src="/galView.svg"
                height={1000}
                width={1000}
                alt="doctor_picture"
                className="side-img max-w-[50%] lg:flex hidden"
            />
        </div>
    );
}

import Image from "next/image";

// import { AppointmentForm } from "@/components/forms/AppointmentForm";


import { SearchParamProps } from "@/constants/type";
import { AppointmentForm } from "@/components/forms/AppointmentForm";
import Navbar from "@/components/Navbar";
// import { AppointmentForm } from "@/components/forms/AppointmentForm";

const WocRegister = async ({ params: { userId } }: SearchParamProps) => {
    // const patient = await getPatient(userId);

    return (
        <>
            <Navbar />
            <div className="flex h-screen max-h-screen bg-gray-800 md:flex-row flex-col-reverse">
                <section className="remove-scrollbar container my-auto ">
                    <div className="sub-container max-w-[860px] flex-1 justify-between">
                        <Image
                            src="/seedLogo.png"
                            height={1000}
                            width={1000}
                            alt="logo"
                            className="mb-12 mt-10 h-10 w-fit"
                        />

                        <AppointmentForm />

                        <p className="copyright mt-10 py-12">© 2024 Seed</p>
                    </div>
                </section>

                <Image
                    src="/vid/vid3.png"
                    height={1500}
                    width={1500}
                    alt="appointment"
                    className="side-img max-w-[390px] bg-bottom"
                />
            </div>
        </>
    );
};

export default WocRegister;

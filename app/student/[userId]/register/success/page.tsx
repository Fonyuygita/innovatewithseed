
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import LottieAnimation from "@/components/lottie/LottieAnimation";
// import { Doctors } from "@/constants";
// import { getAppointment } from "@/lib/actions/appointment.actions";
// import { formatDateTime } from "@/lib/utils";
import animationData from '../../../../../public/computer.json';
import { getUser } from "@/lib/actions/student.action";
import { SearchParamProps } from "@/constants/type";
import UserAvatar from "@/components/UserAvatar";

const RequestSuccess = async ({
    searchParams,
    params: { userId },
}: SearchParamProps) => {
    const appointmentId = (searchParams?.appointmentId as string) || "";
    const user = await getUser(userId)
    console.log(user)

    // const appointmentId = (searchParams?.appointmentId as string) || "";
    // const appointment = await getAppointment(appointmentId);

    // const doctor = Doctors.find(
    //     (doctor) => doctor.name === appointment.primaryPhysician
    // );

    return (
        <div className=" flex  min-h-screen px-[5%] bg-gray-950">
            <div className="success-img">
                <Link href="/">
                    <Image
                        src="/giff/success.gif"
                        height={1000}
                        width={1000}
                        alt="logo"
                        className="h-16 w-fit"
                    />
                </Link>

                <section className="flex flex-col items-center w-full px-2">
                    {/* <LottieAnimation animationData={animationData} /> */}
                    <div className="flex my-4 items-center justify-center gap-3">

                        <h4 className="text-lg text-gray-200 font-bold">{user.name}</h4>
                        <UserAvatar />

                    </div>

                    <h2 className="header mb-6 md:max-w-[600px] text-center max-w-[90%] target:ext text-light-200">
                        Your <span className="text-primary-100">application to Seed </span> has
                        been successfully submitted!
                    </h2>
                    <p className="text-sm md:text-[23px] text-gray-300">We&apos;ll be in touch shortly to confirm.</p>
                </section>

                <section className="request-details text-sm md:text-[23px] text-gray-300  bg-gray-800">
                    <p className="text-sm md:text-[23px] text-blue-500">Requested appointment details: </p>
                    <div className="flex items-center gap-3">
                        <Image
                            src="/seedLogo.png"
                            alt="logo"
                            width={100}
                            height={100}
                            className="size-6"
                        />
                        <p className="whitespace-nowrap">Thank you Gita</p>
                    </div>
                    <div className="flex gap-2">
                        <Image
                            src="/icons/calendar.svg"
                            height={24}
                            width={24}
                            alt="calendar"
                        />
                        <p>Thank you for getting in touch, we will get back to you</p>
                    </div>
                </section>

                <Button variant="default" className="shad-primary-btn md:w-[370px] w-[340px] hover:scale-105 transition-all animate-in" asChild>
                    <Link href={`/student`}>
                        dashboard
                    </Link>
                </Button>

                <p className="copyright">© 2024 Seed Inc</p>
            </div>
        </div>
    );
};

export default RequestSuccess;

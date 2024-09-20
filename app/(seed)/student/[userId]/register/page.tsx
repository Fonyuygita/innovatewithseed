// import ClientForm from "@/components/forms/ClientForm";
// import RegisterForm from "@/components/forms/RegisterForm";
import StudentForm from "@/components/forms/StudentForms";
import { Button } from "@/components/ui/button";
import { SearchParamProps } from "@/constants/type";
import { getUser } from "@/lib/actions/student.action"
import { createUser } from '@/lib/actions/student.action';
// import { getUser } from "@/lib/actions/patient.actions";
import Image from "next/image";
import Link from "next/link";

const RegisterPage = async ({ params: { userId }, searchParams }: SearchParamProps) => {


    const user = await getUser(userId)

    // console.log(userId.toLowerCase());
    const searchParam = searchParams.prog
    console.log(userId)
    console.log(searchParam)


    console.log("search params is " + searchParam)
    let program: string;
    switch (searchParam) {
        case "internship":
            program = "internship"
            break;
        case "bootcamp":
            program = "bootcamp";
            break;
        case "mentorship":
            program = "mentorship"
            break;
        default:
            console.log("Program not found")
    }

    return (
        <div className="flex h-screen max-h-screen overflow-hidden">
            <section className="remove-scrollbar container ">
                <div className="sub-container max-w-[846px] flex-1 flex-col py-10">
                    <Image
                        src="/assets/icons/logo-full.svg"
                        height={1000}
                        width={1000}
                        alt="patient"
                        className="mb-12 h-10 w-fit"
                    />
                    {/* @ts-ignore */}
                    <StudentForm program={program} student={user} />



                </div>
            </section>

            {/* right side section */}

            <Image
                src="/footer.png"
                height={1000}
                width={1000}
                alt="doctor_picture"
                className="side-img max-w-[50%] "
            />
        </div>
    );
}


export default RegisterPage
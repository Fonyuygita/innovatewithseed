// import ClientForm from "@/components/forms/ClientForm";
// import RegisterForm from "@/components/forms/RegisterForm";
import StudentForm from "@/components/forms/StudentForms";
import { Button } from "@/components/ui/button";
import { SearchParamProps } from "@/constants/type";
// import { getUser } from "@/lib/actions/patient.actions";
import Image from "next/image";
import Link from "next/link";

const RegisterPage = async ({ params: { userId } }: SearchParamProps) => {

    console.log(userId);

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
                    <StudentForm />

                    {/* <div className="text-l4 regular mt-20 flex justify-between">
                        <p className="justify-items-end text-dark-600 xl:text-left">
                            @ 2024 SeedInnovate
                        </p>
                        <Link href="/?admin=true" className="text-green-500">Admin?</Link>
                    </div> */}

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
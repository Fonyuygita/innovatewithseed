import Image from "next/image"
import CustomButton from "./CustomButton"
import { FaArrowAltCircleRight } from 'react-icons/fa';


const Introduction = () => {
    return (
        <section className="mt-[8rem] flex flex-col md:flex-row justify-between px-[5%] -z-10  mb-[12rem] ">
            <div className="flex flex-col  flex-start w-[50%] gap-9  relative ">
                <div className="w-[800px] h-[400px] px-[5rem] pt-[4rem] absolute top-1 left-[-23px] bg-[radial-gradient(ellipse_at_top, _var(--tw-gradient-stops))] from-blue-950 to-blue-800 -z-1 pl-9 rounded-2xl shadow-2xl"></div>
                <div className="absolute z-10 flex flex-col gap-9 ">
                    <h1 className="text-5xl text-white font-extrabold mt-3">Seed <span className="text-primary-100">Innovate</span></h1>
                    <p className="text-lg font-sans text-white w-[60%]">
                        At Seed, our mission is to provide the necessary tools, resources and expertise to nurture the seeds of the innovation, allowing businesses to flourish and reach their full potentials

                    </p>

                    <CustomButton
                        title="Read more"
                        extraStyle="min-w-[30%] md:w-[27%] border-blue-950 border"
                        icon={<FaArrowAltCircleRight />}
                    />

                </div>

            </div>

            <div className=" mt-[-34px] w-[33rem] h-full relative bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-950 to-blue-900 shadow-3xl">
                <div className="absolute bg-blue-800 w-[340px] h-[340px] rounded-full top-0 left-0"></div>

                <Image src="/laptop.png" alt="intro_img" width={700} height={700} className="object-contain w-full h-[600px] mb-[40px] absolute z-10 top-[-43px]" />

            </div>

        </section>
    )
}

export default Introduction
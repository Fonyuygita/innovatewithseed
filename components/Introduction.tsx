import Image from "next/image"
import CustomButton from "./CustomButton"
import { FaArrowAltCircleRight } from 'react-icons/fa';


const Introduction = () => {
    return (
        <section className="mt-[4rem] flex flex-col md:flex-row justify-between px-[5%] ">
            <div className="flex flex-col  flex-start w-[50%] gap-9  ">
                <h1 className="text-5xl text-blue-600 font-extrabold">Seed Innovate</h1>
                <p className="text-lg font-serif text-blue-600">
                    At Seed, our mission is to provide the necessary tools, resources and expertise to nurture the seeds of the innovation, allowing businesses to flourish and reach their full potential
                </p>

                <CustomButton
                    title="Read more"
                    extraStyle="min-w-[30%] md:w-[27%]"
                    icon={<FaArrowAltCircleRight />}
                />

            </div>

            <div className=" mt-[-34px] w-[33rem] h-full relative">
                <div className="absolute bg-blue-800 w-[340px] h-[340px] rounded-full top-0 left-0"></div>

                <Image src="/about4.png" alt="intro_img" width={500} height={500} className="object-contain w-full h-fit mb-[40px] absolute z-10 top-[-43px]" />

            </div>

        </section>
    )
}

export default Introduction
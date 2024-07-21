import Image from "next/image"
import CustomButton from "./CustomButton"
import { FaArrowAltCircleRight } from 'react-icons/fa';


const Introduction = () => {
    return (
        <section className="mt-[8rem] flex flex-col md:flex-row justify-between px-[5%] -z-10  mb-[12rem]">
            <div className="flex flex-col  flex-start w-[50%] gap-9  relative ">
                <div className="w-[600px] h-[300px] px-[5rem] py-[4rem] absolute top-1 left-[-23px]  bg-white -z-1 pl-9"></div>
                <div className="absolute z-10 flex flex-col gap-9 ">
                    <h1 className="text-5xl text-blue-600 font-extrabold mt-3">Seed Innovate</h1>
                    <p className="text-lg font-serif text-blue-600 w-[60%]">
                        At Seed, our mission is to provide the necessary tools, resources and expertise to nurture the seeds of the innovation, allowing businesses to flourish and reach their full potential

                    </p>

                    <CustomButton
                        title="Read more"
                        extraStyle="min-w-[30%] md:w-[27%]"
                        icon={<FaArrowAltCircleRight />}
                    />

                </div>

            </div>

            <div className=" mt-[-34px] w-[33rem] h-full relative">
                <div className="absolute bg-blue-800 w-[340px] h-[340px] rounded-full top-0 left-0"></div>

                <Image src="/about4.png" alt="intro_img" width={500} height={500} className="object-contain w-full h-fit mb-[40px] absolute z-10 top-[-43px]" />

            </div>

        </section>
    )
}

export default Introduction
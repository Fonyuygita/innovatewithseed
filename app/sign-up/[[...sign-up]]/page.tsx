
import { SignUp } from "@clerk/nextjs";

const page = () => {
    return (
        <div className="h-screen flex justify-center flex-center  sm:px-5 relative">
            {/* <div className="absolute bottom-[1.9rem] left-[37.4%] bg-primary-100 w-[400px] h-[100px] z-10 rounded-lg"></div> */}

            <SignUp />
        </div>

    )


}

export default page
import { motion } from 'framer-motion';
import { useTheme } from './context/ThemeContext';

const AboutUsTop = () => {

    const { theme } = useTheme()
    return (
        <section className={`p-8 mt-[5rem]  w-full h-full flex items-center justify-center overflow-hidden  ${theme === 'light' ? 'bg-gray-200 ' : 'bg-gray-800 text-white  '}`}>
            <div className="container mx-auto text-primary-100">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold my-8"
                >
                    About Us
                </motion.h1>
                <p className={`w-[70%] lg:w-[40%]  text-sm ${theme === "light" ? "text-gray-700" : "text-gray-300"}`}>
                    SEED, were everything is grown
                </p>

                <div className="w-full h-[1px] bg-primary-100 my-[7rem]"></div>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className={`text-[14px] md:text-lg mb-8  w-full my-3 ${theme === "light" ? "text=gray-700" : "text-gray-300"}`}
                >
                    SEED, A software and technology company developed to help kids and young people interested in tech grow. Founded by Cheko Yohane, Fonyuy Gita, and Fien Dora, SEED aims to train and empower young lads who want to grow and mature in tech. SEED stands for Skills Enhancement and Empowerment through Digitalization.
                </motion.p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className={` ${theme === 'light' ? 'bg-gray-200 ' : 'bg-gray-900 text-light-200  '} p-6 rounded-lg shadow-md `}
                    >
                        <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
                        <p className={` ${theme === "light" ? "text=gray-700" : "text-gray-300"}`}>
                            To provide a nurturing environment for young tech enthusiasts to develop their skills and achieve their dreams.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className={` ${theme === 'light' ? 'bg-gray-200 ' : 'bg-gray-900 text-light-200  '} p-6 rounded-lg shadow-md `}
                    >
                        <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
                        <p className={`text-gray-700 ${theme === "light" ? "text=gray-700" : "text-gray-300"}`}>
                            To be a leading tech training and empowerment hub for young people worldwide.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className={` ${theme === 'light' ? 'bg-gray-200 ' : 'bg-gray-900 text-light-200  '} p-6 rounded-lg shadow-md `}
                    >
                        <h2 className="text-2xl font-semibold mb-2">Our Values</h2>
                        <p className={`text-gray-700 ${theme === "light" ? "text=gray-700" : "text-gray-300"}`}>
                            Innovation, Integrity, and Inclusivity.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.0 }}
                        className={` ${theme === 'light' ? 'bg-gray-200 ' : 'bg-gray-900 text-light-200  '} p-6 rounded-lg shadow-md `}
                    >
                        <h2 className="text-2xl font-semibold mb-2">Our Founders</h2>
                        <p className={`text-gray-700 ${theme === "light" ? "text=gray-700" : "text-gray-300"}`}>
                            Cheko Yohane, Fonyuy Gita, and Fien Dora.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutUsTop;

"use client"

// components/RegisterForm.tsx
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import CustomInput from './formInputs/CustomInput';
import { useInView } from 'react-intersection-observer';

interface RegisterFormProps {
    onSubmit: (data: any) => void;
    formType: 'course' | 'internship';
    initialValues?: any;
    buttonText?: string;
    className?: string;
    inputClassName?: string;
    labelClassName?: string;
    buttonClassName?: string;
    animationDuration?: number;
    animationType?: 'fade' | 'slide';
    placeholder?: string;
    inputName?: string;
}

const techCourses = ['React', 'Next.js', 'TypeScript', 'Node.js', 'GraphQL', 'Docker', 'Kubernetes', 'Python', 'Machine Learning', 'Data Science'];
const level = ['Beginner', 'Intermediate', 'Advance, Other']
const time = ['online', 'onside', 'Both', 'Other']
const RegisterForm: React.FC<RegisterFormProps> = ({
    onSubmit,
    formType,
    initialValues = {},
    buttonText = 'Submit',
    className = '',
    inputClassName = '',
    labelClassName = '',
    buttonClassName = '',
    animationDuration = 0.5,
    animationType = 'fade',
    placeholder = '',
    inputName = ''
}) => {
    const [formData, setFormData] = React.useState(initialValues);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
    }, [controls, inView]);

    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };


    const animationVariants = {
        fade: { opacity: 1, transition: { duration: animationDuration } },
        slide: { x: 0, transition: { duration: animationDuration } },
    };

    return (
        <motion.form
            ref={ref}
            initial={animationType === 'fade' ? { opacity: 0 } : { x: '-100%' }}
            animate={animationVariants[animationType]}
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 w-[90%]  md:w-full min-h-screen bg-gray-100  items-center   justify-center"
        >

            <motion.h1

                initial="hidden"
                animate={controls}
                variants={variants}
                transition={{ duration: 0.5, delay: 0.2 }} className='text-[1.6rem] md:text-[2.4rem] my-6 font-sans line-clamp-2 font-bold text-center w-[68%] mx-auto text-gray-800 '>Enroll {" "}<span className='text-primary-100 capitalize'>Now 👇{" "}</span></motion.h1>
            <div className='lg:w-[70%] w-[98%] lg:flex-row flex-col flex lg:gap-2 gap-4 items-center px-7'>

                <CustomInput
                    name='First Name'
                    icon='/icons/user.svg'
                    placeholder='Fonyuy Gita..'



                />

                <CustomInput
                    name='Second Name'
                    icon='/icons/user.svg'
                    placeholder='Gita..'
                />

            </div>
            <div className='lg:w-[70%] w-[98%] lg:flex-row flex-col flex lg:gap-2 gap-4 items-center px-7'>
                <CustomInput
                    name='email'
                    icon='/icons/email.svg'
                    placeholder='Email.'

                />
            </div>

            <div className='lg:w-[70%] w-[98%] lg:flex-row flex-col flex lg:gap-2 gap-4 items-center px-7'>
                <CustomInput
                    name='phone'
                    icon='/icons/appointments.svg'
                    placeholder='Phone_Number.'

                />
            </div>

            <div className='lg:w-[70%] w-[98%] lg:flex-row flex-col flex lg:gap-2 gap-4 items-center px-7'>
                <CustomInput
                    name='courses'
                    icon='/icons/appointments.svg'
                    placeholder='Select Course.'
                    type='select'
                    options={techCourses}

                />

                <CustomInput
                    name='courses'
                    icon='/icons/check.svg'
                    placeholder='Select Your Level.'
                    type='select'
                    options={level}

                />

            </div>

            <div className='lg:w-[70%] w-[98%] lg:flex-row flex-col flex lg:gap-2 gap-4 items-center px-7'>
                <CustomInput
                    name='platform'
                    placeholder='Select Course.'
                    type='radio'
                    options={time}

                />
            </div>


            <div className='lg:w-[70%] w-[98%] lg:flex-row flex-col flex lg:gap-2 gap-4 items-center px-7'>
                <CustomInput
                    name='message'

                    placeholder='Leave a comment.👋'
                    type='textarea'
                    options={time}

                />
            </div>
            {/* {formType === 'course' && (
                <>
                    <div>
                        <label className={labelClassName} htmlFor="course">Course</label>
                        <input
                            className={inputClassName}
                            type="text"
                            name="course"
                            value={formData.course || ''}
                            onChange={handleChange}
                            placeholder={placeholder}
                            required
                        />
                    </div>
                    <div>
                        <label className={labelClassName} htmlFor="level">Level</label>
                        <input
                            className={inputClassName}
                            type="text"
                            name="level"
                            value={formData.level || ''}
                            onChange={handleChange}
                            required
                            placeholder={placeholder}

                        />
                    </div>
                </>
            )} */}
            {formType === 'internship' && (
                <>
                    <div>
                        <label className={labelClassName} htmlFor="position">Position</label>
                        <input
                            className={inputClassName}
                            type="text"
                            name="position"
                            value={formData.position || ''}
                            onChange={handleChange}
                            required
                            placeholder={placeholder}
                        />
                    </div>
                    <div>
                        <label className={labelClassName} htmlFor="resume">Resume</label>
                        <input
                            className={inputClassName}
                            type="file"
                            name="resume"
                            onChange={handleChange}
                            required
                            placeholder={placeholder}
                        />
                    </div>
                </>
            )}
            <button type="submit" className={buttonClassName}>{buttonText}</button>
        </motion.form>
    );
};

export default RegisterForm;

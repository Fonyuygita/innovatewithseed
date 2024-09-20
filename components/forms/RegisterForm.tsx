"use client"

import { StudentFormValidation, UserFormValidation } from '@/lib/validation';
import { useForm } from "react-hook-form"
import React, { useState } from 'react'
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl } from '../ui/form';
// import CustomFormField, { FormFieldType } from './CustomFormField';
import SubmitButton from './SubmitButton';
// import { createUser } from '@/lib/actions/patient.actions';
import { useRouter } from 'next/navigation';
import CustomFormField, { FormFieldType } from './CustomFormFields';

import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Label } from '../ui/label';
import { GenderOptions, SiteOptions } from '@/data';
import { SelectItem } from '../ui/select';
import Image from 'next/image';
import { Departments, IdentificationTypes, StudentFormDefaultValues, Programs } from '@/constants';
import { useUser } from '@clerk/nextjs';
import FileUploader from '../FileUploader';
import { useTheme } from '../context/ThemeContext';
import { Gender, Site } from '@/constants/type';
import { createUser } from '@/lib/actions/student.action';

const RegisterStudentForm = ({ program }: { program: string }) => {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false);
    const { isLoaded, isSignedIn, user } = useUser();
    const { theme } = useTheme()
    const form = useForm<z.infer<typeof UserFormValidation>>({
        resolver: zodResolver(UserFormValidation),
        defaultValues: {
            name: "",
            email: "",
            phone: "",


        }
    });

    const onSubmit = async ({ name, email, phone }: z.infer<typeof UserFormValidation>) => {
        console.log("Submit button clicked")
        setIsLoading(true);
        console.log({ name, email, phone })

        try {
            const userData = {
                name,
                email,
                phone,
                program
            };
            const newUser = await createUser(userData);
            console.log(newUser)
            // router.push(`/student/${newUser.$id}/register`)


            if (newUser) {
                router.push(`/student/${newUser?.$id}/register?prog=${program}`)
                console.log(newUser);
            }
        } catch (err) {
            // \catch errors if any
            console.log(err);
            // router.push(`/patient/${newUser.$id}/register`)


        }

        setIsLoading(false)



    }


    return (
        <section className={`absolute top-0 left-0 w-full h-full ${theme === 'light' ? 'bg-gray-200 text-gray-800' : 'bg-gray-800 text-gray-300'}`}>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className={`flex-1 space-y-6   shadow-xl p-4 px-[1rem] lg:px-[6rem]  ${theme === 'light' ? 'bg-gray-300 text-gray-800' : 'bg-gray-900 text-gray-300'}`}>
                    <section className="mb-12 space-y-4">
                        <h1 className="mb-12 space-y-4 text-5xl text-primary-100 font-bold mt-6 capitalize ">WEL<span className="text-blue-500">COME</span>D</h1>
                        <p className="text-blue-500 text-3xl mt-[12rem] p-2">BACK {" "} 👋 <span className='text-yellow-600 capitalize font-bold'>{user?.lastName}</span> , Heard you wanna do
                            <span className='my-3'>                            <span className="bg-primary-100 text-lg px-3 py-1 text-light-200 capitalize rounded-md">{program}</span> There we Go
                            </span>

                        </p>

                    </section>


                    {/*  YOUR NAME */}
                    <section className="space-y-6">
                        <div className="mb-9 space-y-1">
                            <h2 className="sub-header text-blue-500">Be Part of Seed</h2>
                        </div>

                    </section>
                    <CustomFormField
                        fieldType={FormFieldType.INPUT}
                        control={form.control}
                        name="name"
                        label="Full names"
                        placeholder="Fonyuy Gita"
                        iconSrc="/icons/user.svg"
                        iconAlt='user'
                    />



                    <CustomFormField
                        fieldType={FormFieldType.INPUT}
                        control={form.control}
                        name="email"
                        label="Email"
                        placeholder="gita@email.com"
                        iconSrc="/icons/email.svg"
                        iconAlt='email'
                    />

                    <CustomFormField
                        fieldType={FormFieldType.PHONE_NUMBER}
                        control={form.control}
                        name="phone"
                        label="Phone number"
                        placeholder="(+237) 123-466"

                    />






                    <SubmitButton
                        isLoading={isLoading}
                    >Continue</SubmitButton>


                </form>
            </Form>
        </section>
    )
}

export default RegisterStudentForm

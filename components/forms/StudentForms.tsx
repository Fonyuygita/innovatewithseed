"use client"

import { StudentFormValidation } from '@/lib/validation';
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
import { Gender, Site, User } from '@/constants/type';
import { registerStudent } from "@/lib/actions/student.action"

const StudentForm = ({ program, student }: { program: string; student: User }) => {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false);
    const { isLoaded, isSignedIn, user } = useUser();
    const { theme } = useTheme()
    const form = useForm<z.infer<typeof StudentFormValidation>>({
        resolver: zodResolver(StudentFormValidation),
        defaultValues: {

            ...StudentFormDefaultValues
        }
    });

    const onSubmit = async (values: z.infer<typeof StudentFormValidation>) => {
        setIsLoading(true);



        let formDataId;
        let formDataApp;

        // if identification docs exist, and convert data to blob before sending
        if (values.identificationDocument && values.identificationDocument?.length > 0) {

            const blobFile = new Blob([values.identificationDocument[0]], {
                type: values.identificationDocument[0].type,
            })
            console.log(blobFile);
            formDataId = new FormData();
            formDataId.append("blobFile", blobFile);
            formDataId.append("fileName", values.identificationDocument[0].name)
            console.log(formDataId);

        }



        if (values.applicationDocument && values.applicationDocument?.length > 0) {

            const blobFile1 = new Blob([values.applicationDocument[0]], {
                type: values.applicationDocument[0].type,
            })
            console.log(blobFile1);
            formDataApp = new FormData();
            formDataApp.append("blobFile", blobFile1);
            formDataApp.append("fileName", values.applicationDocument[0].name)
            console.log(formDataApp);

        }




        try {
            // get the data we want to send to db
            const studentData = {
                ...values,
                userId: student.$id!,
                birthDate: new Date(values.birthDate),
                identificationDocument: formDataId,
                applicationDocument: formDataApp,
            }

            // @ts-ignore

            const newPatient = await registerStudent(studentData)
            console.log("hello data");
            console.log(newPatient);

            if (newPatient) router.push(`/student/${student.$id}/appointment?prog=${program}`)

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
                        <h1 className="mb-12 space-y-4 text-5xl text-primary-100 font-bold mt-6 capitalize ">S<span className="text-blue-500">EE</span>D</h1>
                        <p className="text-blue-500 text-3xl mt-[12rem] p-2">Hey {" "} 👋 <span className='text-yellow-600 capitalize font-bold'>{user?.lastName}</span> , Heard you wanna do
                            <span className='my-3'>                            <span className="bg-primary-100 text-lg px-3 py-1 text-light-200 capitalize rounded-md">{program}</span> There we Go
                            </span>

                        </p>

                    </section>


                    {/*  YOUR NAME */}
                    <section className="space-y-6">
                        <div className="mb-9 space-y-1">
                            <h2 className="sub-header text-blue-500">Your personal Info</h2>
                        </div>

                        <CustomFormField
                            fieldType={FormFieldType.SELECT}
                            control={form.control}
                            name="program"
                            label={`Choose Your ${program} Program`}
                            placeholder="Select A Program"
                            defaultValue="Cybersecurity" // Set your default value here
                        >

                            {Programs.map((program, i) => (
                                <SelectItem key={program.name + i} value={program.name}>
                                    <div className="flex cursor-pointer items-center gap-2">
                                        <Image
                                            src={program.image}
                                            width={32}
                                            height={32}
                                            alt="program"
                                            className="rounded-full border border-dark-500 object-contain"
                                        />
                                        <p className={`${theme === "light" ? "text-gray-800" : "text-light-300"}`}>{program.name}</p>
                                    </div>
                                </SelectItem>
                            ))}
                        </CustomFormField>
                        <CustomFormField
                            fieldType={FormFieldType.INPUT}
                            control={form.control}
                            name="name"
                            label="Full names"
                            placeholder="Fonyuy Gita"
                            iconSrc="/icons/user.svg"
                            iconAlt='user'
                        />

                        {/*  YOUR EMAIL AND PHONE */}
                        <div className="flex flex-col gap-6 xl:flex-row">

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
                        </div>


                        <div className="flex flex-col gap-6 xl:flex-row">


                            <CustomFormField
                                fieldType={FormFieldType.DATE_PICKER}
                                control={form.control}
                                name="DateBirth"
                                label="Date of Birth"

                            />

                            <CustomFormField
                                fieldType={FormFieldType.SKELETON}
                                control={form.control}
                                name="gender"
                                label="Gender"
                                renderSkeleton={(field) => (
                                    <FormControl>
                                        <RadioGroup
                                            className="flex h-11 gap-6 xl:justify-between"
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                        >
                                            {GenderOptions.map((option, i) => (
                                                <div key={option + i} className={` ${theme === 'light' ? "radio-group" : "radio-group1"}`}>
                                                    <RadioGroupItem value={option} id={option} />
                                                    <Label htmlFor={option} className="cursor-pointer">
                                                        {option}
                                                    </Label>
                                                </div>
                                            ))}
                                        </RadioGroup>
                                    </FormControl>
                                )}
                            />
                        </div>

                        {/* Address & Occupation */}
                        <div className="flex flex-col gap-6 xl:flex-row">
                            <CustomFormField
                                fieldType={FormFieldType.INPUT}
                                control={form.control}
                                name="address"
                                label="Address"
                                placeholder="14 street, Mile-4-Nkwen, M4 - 5101"
                            />

                            <CustomFormField
                                fieldType={FormFieldType.INPUT}
                                control={form.control}
                                name="occupation"
                                label="Occupation"
                                placeholder=" Software Engineer"
                            />
                        </div>
                    </section>

                    <section className="space-y-8">
                        <div className="mb-9 space-y-3">
                            {program === "internship" && (
                                <h2 className="sub-header text-blue-500">Academic Information</h2>
                            )}

                            {program === "bootcamp" && (
                                <h2 className="sub-header text-blue-500">Provide us with the following info</h2>
                            )}
                        </div>


                        {program === "internship" && (


                            <CustomFormField
                                fieldType={FormFieldType.SELECT}
                                control={form.control}
                                name="department"
                                label="Select a Department"
                                placeholder="Select a Department"
                            >
                                {Departments.map((dep, i) => (
                                    <SelectItem key={dep.name + i} value={dep.name}>
                                        <div className="flex cursor-pointer items-center gap-2">
                                            <Image
                                                src={dep.image}
                                                width={32}
                                                height={32}
                                                alt="dep"
                                                className="rounded-full border border-dark-500"
                                            />
                                            <p>{dep.name}</p>
                                        </div>
                                    </SelectItem>
                                ))}
                            </CustomFormField>
                        )}

                        <div className="flex flex-col gap-6 xl:flex-row">
                            <CustomFormField
                                fieldType={FormFieldType.INPUT}
                                control={form.control}
                                name="duration"
                                label={`${program}  Duration`}
                                placeholder=" 2 Months"
                            />

                            <CustomFormField
                                fieldType={FormFieldType.INPUT}
                                control={form.control}
                                name="level"
                                label="Your level plelase"
                                placeholder="Beginner | Intermediate | Advance | Other"
                            />
                        </div>

                        {program === "bootcamp" && (
                            <div className="flex flex-col gap-6 xl:flex-row">
                                <CustomFormField
                                    fieldType={FormFieldType.INPUT}
                                    control={form.control}
                                    name="ambitions"
                                    label={`${program}  Ambitions`}
                                    placeholder="To create mobile responsive designs"
                                />

                                <CustomFormField
                                    fieldType={FormFieldType.SKELETON}
                                    control={form.control}
                                    name="site"
                                    label="Site"
                                    renderSkeleton={(field) => (
                                        <FormControl>
                                            <RadioGroup
                                                className="flex h-11 gap-6 xl:justify-between"
                                                onValueChange={field.onChange}
                                                defaultValue={field.value}
                                            >
                                                {SiteOptions.map((option, i) => (
                                                    <div key={option + i} className={` ${theme === 'light' ? "radio-group" : "radio-group1"}`}>
                                                        <RadioGroupItem value={option} id={option} />
                                                        <Label htmlFor={option} className="cursor-pointer">
                                                            {option}
                                                        </Label>
                                                    </div>
                                                ))}
                                            </RadioGroup>
                                        </FormControl>
                                    )}
                                />
                            </div>
                        )}

                        <div className="flex flex-col gap-6 xl:flex-row">
                            <CustomFormField
                                fieldType={FormFieldType.TEXTAREA}
                                control={form.control}
                                name="reason"
                                label="Reason For internship (if any)"
                                placeholder="I want to work on real life projects"
                            />

                            <CustomFormField
                                fieldType={FormFieldType.TEXTAREA}
                                control={form.control}
                                name="notes"
                                label="Additional notes (If any)"
                                placeholder="Very happy to apply....."
                            />
                        </div>


                    </section>
                    {program === "internship" && (
                        <section className="space-y-6 ">
                            <div className="mb-9 space-y-1 mt-[3rem]">
                                <h2 className="sub-header text-blue-500">Identification and Verification</h2>
                            </div>
                            <CustomFormField
                                fieldType={FormFieldType.SELECT}
                                control={form.control}
                                name="identificationType"
                                label="Identification Type"
                                placeholder="Select identification type"
                            >
                                {IdentificationTypes.map((type, i) => (
                                    <SelectItem key={type + i} value={type}>
                                        {type}
                                    </SelectItem>
                                ))}
                            </CustomFormField>

                            <CustomFormField
                                fieldType={FormFieldType.INPUT}
                                control={form.control}
                                name="identificationNumber"
                                label="Identification Number"
                                placeholder="KT56789"
                            />

                            <CustomFormField
                                fieldType={FormFieldType.SKELETON}
                                control={form.control}
                                name="identificationDocument"
                                label="Scanned Copy of Identification Document"
                                renderSkeleton={(field) => (
                                    <FormControl>
                                        <FileUploader files={field.value} onChange={field.onChange} />
                                    </FormControl>
                                )}
                            />

                        </section>
                    )

                    }

                    {program === "internship" && (

                        <section className="space-y-6 ">
                            <div className="mb-9 space-y-1 mt-[3rem]">
                                <h2 className="sub-header text-blue-500">And Finally, Your Application</h2>
                            </div>


                            <CustomFormField
                                fieldType={FormFieldType.SKELETON}
                                control={form.control}
                                name="applicationDocument"
                                label="Scanned Copy of Application Document"
                                renderSkeleton={(field) => (
                                    <FormControl>
                                        <FileUploader files={field.value} onChange={field.onChange} />
                                    </FormControl>
                                )}
                            />

                        </section>
                    )
                    }


                    <SubmitButton
                        isLoading={isLoading}
                    >Continue</SubmitButton>


                </form>
            </Form>
        </section>
    )
}

export default StudentForm

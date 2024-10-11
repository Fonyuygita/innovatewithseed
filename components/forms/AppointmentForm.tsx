"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { SelectItem } from "@/components/ui/select";



import "react-datepicker/dist/react-datepicker.css";
import { CreateAppointmentSchema } from "@/lib/validation";
import { Form } from "../ui/form";
import CustomFormField, { FormFieldType } from "./CustomFormFields";
import { Departments, educationalLevel } from "@/constants";
import SubmitButton from "./SubmitButton";
import { Status } from "@/constants/type";
import { Appointment } from "@/constants/appwrite.types";
// import { Appointment } from "@/constants/appwrite.types";


export const AppointmentForm = ({
    userId,

    type = "create",
    appointment,
    setOpen,
}: {
    userId?: string;

    type?: "create" | "schedule" | "cancel";
    appointment?: Appointment;
    setOpen?: Dispatch<SetStateAction<boolean>>;
}) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    // const AppointmentFormValidation = getAppointmentSchema(type);

    const form = useForm<z.infer<typeof CreateAppointmentSchema>>({
        resolver: zodResolver(CreateAppointmentSchema),
        defaultValues: {
            level: appointment ? appointment?.level : "",
            schedule: appointment
                ? new Date(appointment?.schedule!)
                : new Date(Date.now()),
            expectations: appointment ? appointment.expectations : "",
            additionalNotes: appointment?.additionalNotes! || "",
            cancellationReason: appointment?.cancellationReason || "",
        },
    });

    const onSubmit = async (
        values: z.infer<typeof CreateAppointmentSchema>
    ) => {
        setIsLoading(true);

        let status;
        switch (type) {
            case "schedule":
                status = "scheduled";
                break;
            case "cancel":
                status = "cancelled";
                break;
            default:
                status = "pending";
        }

        try {
            // if (type === "create" && userId) {
            //     const appointment = {
            //         userId,
            //         level: values.level,
            //         schedule: new Date(values.schedule),
            //         expectations: values.expectations!,
            //         status: status as Status,
            //         additionalNotes: values.additionalNotes,
            //     };

            // @ts-ignore

            // const newAppointment = await CreateAppointmentSchema(appointment);

            //     if (newAppointment) {
            //         form.reset();
            //         router.push(
            //             `/patient/${userId}/new-appointment/success?appointmentId=${newAppointment.$id}`
            //         );
            //     }
            // }

            // else {
            //     const updatedAppointment = {
            //         userId,
            //         appointmentId: appointment?.$id!,
            //         appointment: {
            //             primaryPhysician: values.primaryPhysician,
            //             schedule: new Date(values.schedule),
            //             status: status as Status,
            //             cancellationReason: values.cancellationReason

            //         },
            //         type,

            //     }
            // @ts-ignore
            // const appointmentUpdates = await updatedAppointment(updatedAppointment)

            // if (appointmentUpdates) {
            //     setOpen && setOpen(false);
            //     form.reset()
            // }

        }


        catch (error) {
            console.log(error);
        }
        setIsLoading(false);
    };

    let buttonLabel;
    switch (type) {
        case "cancel":
            buttonLabel = "Cancel Appointment";
            break;
        case "schedule":
            buttonLabel = "Schedule Appointment";
            break;
        default:
            buttonLabel = "Register";
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex-1 space-y-6">
                {type === "create" && (
                    <section className="mb-12 space-y-4">
                        <h1 className="header">{"Register For"} <span className="text-primary-100">{"<W.O.C/>"}</span></h1>
                        <p className="text-dark-700">
                            Request a new appointment in 10 seconds.
                        </p>
                    </section>
                )}

                {type !== "cancel" && (
                    <>
                        <CustomFormField
                            fieldType={FormFieldType.SELECT}
                            control={form.control}
                            name="schoolLevel"
                            label="School Level"
                            placeholder="Select your school level"
                        >
                            {educationalLevel.map((dep, i) => (
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



                        <CustomFormField
                            fieldType={FormFieldType.SELECT}
                            control={form.control}
                            name="level"
                            label="level"
                            placeholder="Select your Tech Level"
                        >
                            {["Beginner", "Intermediate", "Advance"].map((dep, i) => (
                                <SelectItem key={dep + i} value={dep}>
                                    <div className="flex cursor-pointer items-center gap-2">
                                        {/* <Image
                                            src={dep.image}
                                            width={32}
                                            height={32}
                                            alt="dep"
                                            className="rounded-full border border-dark-500"
                                        /> */}
                                        <p>{dep}</p>
                                    </div>
                                </SelectItem>
                            ))}
                        </CustomFormField>



                        <div
                            className={`flex flex-col gap-6  ${type === "create" && "xl:flex-row"}`}
                        >
                            <CustomFormField
                                fieldType={FormFieldType.TEXTAREA}
                                control={form.control}
                                name="expectations"
                                label="Appointment reason"
                                placeholder="Annual montly check-up"
                                disabled={type === "schedule"}
                            />

                            <CustomFormField
                                fieldType={FormFieldType.TEXTAREA}
                                control={form.control}
                                name="additionalNotes"
                                label="Comments/notes"
                                placeholder="Why I am applying?"
                                disabled={type === "schedule"}
                            />
                        </div>
                    </>
                )}

                {type === "cancel" && (
                    <CustomFormField
                        fieldType={FormFieldType.TEXTAREA}
                        control={form.control}
                        name="cancellationReason"
                        label="Reason for cancellation"
                        placeholder="Urgent meeting came up"
                    />
                )}

                <SubmitButton
                    isLoading={isLoading}
                    className={`${type === "cancel" ? "shad-danger-btn" : "shad-primary-btn"} w-full`}
                >
                    {buttonLabel}
                </SubmitButton>
            </form>
        </Form>
    );
};

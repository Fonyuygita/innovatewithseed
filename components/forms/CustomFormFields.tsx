"use client"

import Image from 'next/image';
import { E164Number } from "libphonenumber-js/core";
import React from 'react'
import { Control, Field } from 'react-hook-form';
//  { Input } from './ui/input';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'


import ReactDatePicker from "react-datepicker";
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";
import { Input } from '../ui/input';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Checkbox } from '../ui/checkbox';
import { useTheme } from '../context/ThemeContext';

export enum FormFieldType {
    INPUT = "input",
    TEXTAREA = "textarea",
    PHONE_NUMBER = "phoneInput",
    CHECKBOX = "checkbox",
    DATE_PICKER = "datePicker",
    SELECT = "select",
    SKELETON = "skeleton"

}


interface CustomProps {
    control: Control<any>;
    name: string;
    label?: string;
    placeholder?: string;
    iconSrc?: string;
    iconAlt?: string;
    disabled?: boolean;
    dateFormat?: string;
    showTimeSelect?: boolean;
    children?: React.ReactNode;
    renderSkeleton?: (field: any) => React.ReactNode;
    fieldType: FormFieldType;
    defaultValue?: string


}


const RenderInput = ({ field, props }: { field: any; props: CustomProps }) => {
    const { theme } = useTheme()
    switch (props.fieldType) {
        case FormFieldType.INPUT:
            return (
                <div className={`flex rounded-md border border-primary-100  ${theme === 'light' ? 'bg-white text-gray-700' : 'bg-gray-800 text-gray-300'}`}>
                    {props.iconSrc && (
                        <Image
                            src={props.iconSrc}
                            height={24}
                            width={24}
                            alt={props.iconAlt || "icon"}
                            className='ml-2'
                        />
                    )}

                    <FormControl>
                        <Input
                            placeholder={props.placeholder}
                            {...field}
                            className={`border-0 outline-none  ${theme === 'light' ? 'shad-input' : 'shad-input1'}`}
                        />
                    </FormControl>
                </div>
            )
        case FormFieldType.PHONE_NUMBER:
            return (
                <FormControl>
                    <PhoneInput
                        defaultCountry='CM'
                        placeholder={props.placeholder}
                        international
                        withCountryCallingCode
                        value={field.value as E164Number | undefined}
                        onChange={field.onChange}
                        className={`  ${theme === 'light' ? 'shad-input input-phone' : 'shad-input1 input-phone1'}`}
                    />
                </FormControl>
            )

        case FormFieldType.TEXTAREA:
            return (
                <FormControl>
                    <Textarea
                        placeholder={props.placeholder}
                        {...field}
                        className={`${theme === 'light' ? 'shad-textArea' : 'shad-textArea1'} `}
                        disabled={props.disabled}
                    />
                </FormControl>
            );

        // case for date oicker

        case FormFieldType.DATE_PICKER:
            return (
                <div className={`flex rounded-md  border-primary-100   ${theme === 'light' ? "bg-white" : "bg-gray-800 text-light-200"}`}>
                    <Image
                        src="/icons/calendar.svg"
                        height={24}
                        width={24}
                        alt="user"
                        className="ml-2"
                    />
                    <FormControl>
                        <ReactDatePicker
                            showTimeSelect={props.showTimeSelect ?? false}
                            selected={field.value}
                            onChange={(date: any) => field.onChange(date)}
                            timeInputLabel="Time:"
                            dateFormat={props.dateFormat ?? "MM/dd/yyyy"}
                            wrapperClassName="date-picker"
                        />
                    </FormControl>
                </div>
            );


        case FormFieldType.SELECT:
            return (
                <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                            <SelectTrigger className={` ${theme === 'light' ? "shad-select-trigger" : "shad-select-trigger1"}`}>
                                <SelectValue placeholder={props.placeholder} />
                            </SelectTrigger>
                        </FormControl>
                        <SelectContent className={` ${theme === 'light' ? "shad-select-content" : "shad-select-content1"}`}>
                            {props.children}
                        </SelectContent>
                    </Select>
                </FormControl>
            );


        case FormFieldType.CHECKBOX:
            return (
                <FormControl>
                    <div className="flex items-center gap-4">
                        <Checkbox
                            id={props.name}
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className='w-7 h-7 bg-primary-100'
                        />
                        <label htmlFor={props.name} className="checkbox-label">
                            {props.label}
                        </label>
                    </div>
                </FormControl>
            );

        case FormFieldType.SKELETON:
            return props.renderSkeleton ? props.renderSkeleton(field) : null;
        default:
            return null;
    }
}

const CustomFormField = (props: CustomProps) => {
    const { control, name, label } = props;

    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem
                    className='flex-1'
                >
                    {props.fieldType !== FormFieldType.CHECKBOX && label && (
                        <FormLabel className='shad-input-label'>{label}</FormLabel>
                    )}
                    <RenderInput field={field} props={props} />
                    <FormMessage className='shad-error' />
                </FormItem>
            )}
        >

        </FormField>
    )
}

export default CustomFormField

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
import { Select, SelectContent, SelectTrigger, SelectValue } from '../ui/select';
import { Checkbox } from '../ui/checkbox';

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


}


const RenderInput = ({ field, props }: { field: any; props: CustomProps }) => {
    switch (props.fieldType) {
        case FormFieldType.INPUT:
            return (
                <div className="flex rounded-md border border-primary-100  bg-white">
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
                            className='border-0 outline-none shad-input'
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
                        className='input-phone shad-input border-0 outline-none'
                    />
                </FormControl>
            )

        case FormFieldType.TEXTAREA:
            return (
                <FormControl>
                    <Textarea
                        placeholder={props.placeholder}
                        {...field}
                        className="shad-textArea"
                        disabled={props.disabled}
                    />
                </FormControl>
            );

        // case for date oicker

        case FormFieldType.DATE_PICKER:
            return (
                <div className="flex rounded-md border border-primary-100  bg-white">
                    <Image
                        src="/assets/icons/calendar.svg"
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
                            <SelectTrigger className="shad-select-trigger">
                                <SelectValue placeholder={props.placeholder} />
                            </SelectTrigger>
                        </FormControl>
                        <SelectContent className="shad-select-content">
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
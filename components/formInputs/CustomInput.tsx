import Image from 'next/image';
import React from 'react';

interface InputProps {
    name: string;
    icon?: string;
    placeholder: string;
    customStyles?: string;
    initialValues?: any;
    labelClassName?: string;
    type?: 'text' | 'textarea' | 'select' | 'radio';
    options?: string[]; // For dropdown options
}

const CustomInput = ({ name, icon, placeholder, customStyles, initialValues, labelClassName, type = 'text', options }: InputProps) => {
    const [formData, setFormData] = React.useState<{ [key: string]: any }>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const renderInput = () => {
        switch (type) {
            case 'text':
                return (
                    <input
                        className="px-4 w-full bg-white py-2 shadow-xl rounded-md border-none outline-none flex justify-center text-gray-700"
                        type="text"
                        name={name}
                        value={formData[name] || ''}
                        onChange={handleChange}
                        required
                        placeholder={placeholder}
                    />
                );
            case 'textarea':
                return (
                    <textarea
                        className="px-4 w-full bg-white py-2 shadow-xl rounded-md border-none outline-none flex justify-center text-gray-700"
                        name={name}
                        value={formData[name] || ''}
                        onChange={handleChange}
                        required
                        placeholder={placeholder}
                    />
                );
            case 'select':
                return (
                    <select
                        className="px-4 w-full bg-white py-2 shadow-xl rounded-md border-none outline-none flex justify-center text-gray-700"
                        name={name}
                        title='select'
                        value={formData[name] || ''}
                        onChange={handleChange}
                        required

                    >
                        <option value="" disabled>{placeholder}</option>
                        {options && options.map((option, index) => (
                            <option className='border-b border-x-primary-100 p-4 text-gray-700' key={index} value={option}>{option}</option>
                        ))}
                    </select>
                );
            case 'radio':
                return (
                    <div className="w-full grid grid-cols-2 ">
                        {options && options.map((option, index) => (
                            <label key={index} className="flex items-center text-gray-700">
                                <input
                                    type="radio"
                                    name={name}
                                    value={option}
                                    checked={formData[name] === option}
                                    onChange={handleChange}
                                    required
                                    className=''
                                />
                                <span className="ml-2 text-gray-700">{option}</span>
                            </label>
                        ))}
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className={`w-full flex justify-between items-center bg-white shadow-2xl px-4 ${customStyles}`}>
            {icon && <Image src={icon} alt='icon' width={30} height={30} className='object-contain' />
            }

            {renderInput()}
        </div>
    );
};

export default CustomInput;

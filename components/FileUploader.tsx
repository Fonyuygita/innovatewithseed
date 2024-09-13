"use client";

import Image from "next/image";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

import { convertFileToUrl } from "@/lib/utils";
import { useTheme } from "./context/ThemeContext";

type FileUploaderProps = {
    files: File[] | undefined;
    onChange: (files: File[]) => void;
};

const FileUploader = ({ files, onChange }: FileUploaderProps) => {
    const { theme } = useTheme()
    const onDrop = useCallback((acceptedFiles: File[]) => {
        onChange(acceptedFiles);
    }, []);

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    return (
        <div {...getRootProps()} className={` ${theme === "light" ? "file-upload" : "file-upload1"}`}>
            <input {...getInputProps()} />
            {files && files?.length > 0 ? (
                <Image
                    src={convertFileToUrl(files[0])}
                    width={1000}
                    height={1000}
                    alt="uploaded image"
                    className="max-h-[400px] overflow-hidden object-cover"
                />
            ) : (
                <>
                    <Image
                        src="/icons/upload.svg"
                        width={40}
                        height={40}
                        alt="upload"
                    />
                    <div className="file-upload_label">
                        <p className="text-14-regular ">
                            <span className="">Click to uplaod or simply drag </span>
                            or drag and drop
                        </p>
                        <p className="text-12-regular">
                            SVG, PNG, JPG or GIF (max. 800x400px)
                        </p>
                    </div>
                </>
            )}
        </div>
    );
};


export default FileUploader
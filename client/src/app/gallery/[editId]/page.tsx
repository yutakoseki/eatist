"use client";
import FileUpload from "@/app/components/FileUpload";
import { NextPage } from "next";
import React from "react";

interface PageProps {
    params: {
        editId: number;
    };
}

const EditGallery: NextPage<PageProps> = ({ params }) => {
    return (
        <>
            <FileUpload props={params}/>
        </>
    );
};

export default EditGallery;

"use client";
import FileUpload from "@/app/components/FileUPload/FileUpload";
import UploadFileList from "@/app/components/FileUPload/UploadFileList";

import { NextPage } from "next";
import Link from "next/link";
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
            <UploadFileList props={params}/>
            <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" href={`/gallery/artist/${params.editId}`}>Gallery</Link>
        </>
    );
};

export default EditGallery;

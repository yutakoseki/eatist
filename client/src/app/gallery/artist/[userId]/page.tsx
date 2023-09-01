import Slider2 from "@/app/components/Slider2";
import { NextPage } from "next";
import React from "react";

interface PageProps {
    params: {
        userId: number;
    };
}

const Gallery: NextPage<PageProps> = ({ params }) => {
    return (
        <>
            <Slider2 props={params}/>
        </>
    );
};

export default Gallery;

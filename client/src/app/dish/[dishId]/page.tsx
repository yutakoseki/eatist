import DishObservation from "@/app/components/Observation/DishObservation";
import { DishId } from "@/types";
import { NextPage } from "next";
import Link from "next/link";
import React from "react";

const Dish: NextPage<DishId> = ({ params }) => {
    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-200">
                <h1 className="text-4xl font-bold text-gray-700 -mt-32">Restaurant List</h1>
                <div className="w-full max-w-xl mt-5">
                    <div className="bg-white shadow-md rounded px-8 py-6 rounded-lg">
                        <DishObservation params={params} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dish;

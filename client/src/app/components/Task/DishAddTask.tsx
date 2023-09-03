"use client";
import apiClient from "@/lib/apiClient";
import React, { ChangeEvent, FormEvent, useState } from "react";

interface Props {
    setAddItem: (value: string) => void;
    params: {
        dishId: number;
    };
}

const DishAddTask = ({ setAddItem, params }: Props) => {
    const [title, setTitle] = useState("");
    const [url, setUrl] = useState("");
    const [comment, setComment] = useState("");
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if(!title){
            alert("店舗名を入力してください。");
            return;
        }
        try {
            const newPost = await apiClient.post("/dish/register", {
                title: title,
                url: url,
                comment: comment,
                taskId: params.dishId,
            });
            setTitle("");
            setUrl("");
            setComment("");
            setAddItem(title);
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <form className="mb-4 space-y-3" onSubmit={handleSubmit}>
            <input type="text" className="w-full border px-4 rounded-lg focus:outline-none focus:border-blue-400" onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} value={title} placeholder="New Restaurant" />
            <input type="text" className="w-full border px-4 rounded-lg focus:outline-none focus:border-blue-400" onChange={(e: ChangeEvent<HTMLInputElement>) => setUrl(e.target.value)} value={url} placeholder="URL" />
            <input type="text" className="w-full border px-4 rounded-lg focus:outline-none focus:border-blue-400" onChange={(e: ChangeEvent<HTMLInputElement>) => setComment(e.target.value)} value={comment} placeholder="Comment" />
            <button className="w-full px-4 py-2 bg-blue-500 text-white rounded transform hover:bg-blue-400 hover:scale-95 duration-200">Add Restaurant</button>
        </form>
    );
};

export default DishAddTask;

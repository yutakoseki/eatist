"use client";

import { deleteTodo, editTodo } from "@/api";
import apiClient from "@/lib/apiClient";
import { Task } from "@/types";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

interface TodoProps {
    todo: Task;
    setUpdateItem: (value: string) => void;
    setDeleteItem: (value: number) => void;
}

const DishTodo = ({ todo, setUpdateItem, setDeleteItem }: TodoProps) => {
    const ref = useRef<HTMLInputElement>(null);
    const [isEditing, setIsEdting] = useState(false);
    const [editedTitle, setIsEditedTitle] = useState(todo.title);
    const [editedUrl, setIsEditedUrl] = useState(todo.url);
    const [editedComment, setIsEditedComment] = useState(todo.comment);

    useEffect(() => {
        if (isEditing) {
            ref.current?.focus();
        }
    }, [isEditing]);

    const handleEdit = async () => {
        setIsEdting(true);
    };
    const handleSave = async () => {
        try {
            const updateDish = await apiClient.post("/dish/update", {
                id: todo.id,
                title: editedTitle,
                url: editedUrl,
                comment: editedComment,
            });
            setIsEdting(false);
            setUpdateItem(editedTitle);
        } catch (err) {
            console.log("編集エラー", err);
        }
    };
    const handleDelete = async () => {
        try {
            const updateDish = await apiClient.post("/dish/delete", {
                id: todo.id,
            });
            setDeleteItem(todo.id);
        } catch (err) {
            console.log("削除エラー", err);
        }
    };
    return (
        <>
            <li key={todo.id} className="flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow w-full">
                {isEditing ? <input ref={ref} type="text" className="mr-2 py-1 px-2 rounded border-gray-400 border w-full" value={editedTitle} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setIsEditedTitle(e.target.value)} /> : <span>{todo.title}</span>}
                {isEditing ? (
                    <input ref={ref} type="text" className="mr-2 py-1 px-2 rounded border-gray-400 border w-full" value={editedUrl} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setIsEditedUrl(e.target.value)} />
                ) : (
                    <a href={todo.url} className="text-blue-500">
                        {todo.url}
                    </a>
                )}
                {isEditing ? <input ref={ref} type="text" className="mr-2 py-1 px-2 rounded border-gray-400 border w-full" value={editedComment} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setIsEditedComment(e.target.value)} /> : <span>{todo.comment}</span>}
                <div>
                    {isEditing ? (
                        <button className="text-blue-500 mr-3" onClick={handleSave}>
                            save
                        </button>
                    ) : (
                        <button className="text-green-500 mr-3" onClick={handleEdit}>
                            edit
                        </button>
                    )}

                    <button className="text-red-500" onClick={handleDelete}>
                        Delete
                    </button>
                </div>
            </li>
        </>
    );
};

export default DishTodo;

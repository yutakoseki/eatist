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

const Todo = ({ todo, setUpdateItem, setDeleteItem}: TodoProps) => {
    const ref = useRef<HTMLInputElement>(null);
    const [isEditing, setIsEdting] = useState(false);
    const [editedTaskTitle, setIsEditedTaskTitle] = useState(todo.text);

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
            const updateTask = await apiClient.post("/list/update", {
                id: todo.id,
                text: editedTaskTitle,
            });
            setIsEdting(false);
            setUpdateItem(editedTaskTitle);
        } catch (err) {
            console.log("編集エラー", err);
        }
    };
    const handleDelete = async () => {
        try {
            const updateTask = await apiClient.post("/list/delete", {
                id: todo.id,
            });
            setDeleteItem(todo.id)
        } catch (err) {
            console.log("削除エラー", err);
        }
    };
    return (
        <>
        <Link href={`/dish/${todo.id}`}>
            <li key={todo.id} className="flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow">
                {isEditing ? <input ref={ref} type="text" className="mr-2 py-1 px-2 rounded border-gray-400 border" value={editedTaskTitle} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setIsEditedTaskTitle(e.target.value)} /> : <span>{todo.text}</span>}
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
        </Link>
        </>
    );
};

export default Todo;

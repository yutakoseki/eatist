import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { Task } from "./types";
import apiClient from "./lib/apiClient";

const prisma = new PrismaClient();

// export const getAllTodos = async (): Promise<Task[]> => {
//     const res = await fetch("/api/tasks", {
//         method: "GET",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         cache: "no-store", // SSR
//     });
//     const todos = res.json();

//     return todos;
// };

// export const getAllTodos = async (): Promise<Task[]> => {
//     try {
//         const response = await apiClient.post("/list/get_latest_list");
//         const todos = response.data;
//     } catch (err) {
//         alert("入力内容が正しくありません");
//     }

//     return todos;
// };



export const addTodo = async (todo: string): Promise<Task> => {
    const res = await fetch("http://localhost:5055/tasks", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
    });
    const newTodo = res.json();

    return newTodo;
};

export const editTodo = async (id: string, newText: string): Promise<Task> => {
    const res = await fetch(`http://localhost:3001/tasks/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: newText }),
    });
    const updateTodo = res.json();

    return updateTodo;
};

export const deleteTodo = async (id: string): Promise<Task> => {
    const res = await fetch(`http://localhost:3001/tasks/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const deleteTodo = res.json();

    return deleteTodo;
};

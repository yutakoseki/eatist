"use client";
import { Task } from "@/types";
import React, { useEffect, useState } from "react";
import Todo from "./Todo";
import apiClient from "@/lib/apiClient";

interface Props{
    count: number;
    setUpdateItem: (value: string) => void;
    setDeleteItem: (value: number) => void;
}

const List = ({count, setUpdateItem, setDeleteItem}:Props) => {
    const [task, setTask] = useState<Task[]>([]);

    useEffect(() => {
        const getLatestTasks = async () => {
            try {
                const response = await apiClient.get("/list/get_latest_list");
                setTask(response.data);
            } catch (err) {
                console.log("エラーです",err);
            }
        };
        getLatestTasks();
    }, [count]);

    return (
        <ul className="space-y-3">
            {task.map((todo: Task) => {
                return <Todo key={todo.id} todo={todo} setUpdateItem={setUpdateItem} setDeleteItem={setDeleteItem}/>;
            })}
        </ul>
    );
};

export default List;

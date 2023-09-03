"use client";
import { Dish } from "@/types";
import React, { useEffect, useState } from "react";
import DishTodo from "./DishTodo";
import apiClient from "@/lib/apiClient";

interface Props {
    count: number;
    setUpdateItem: (value: string) => void;
    setDeleteItem: (value: number) => void;
    params: {
        dishId: number;
    };
}

const DishList = ({ count, setUpdateItem, setDeleteItem, params }: Props) => {
    const [dish, setDish] = useState<Dish[]>([]);

    useEffect(() => {
        const getLatestTasks = async () => {
            try {
                const response = await apiClient.get("/dish/get_latest_list", {
                    params: {
                        taskId: params.dishId,
                      },
                });
                setDish(response.data);
            } catch (err) {
                console.log("エラーです", err);
            }
        };
        getLatestTasks();
    }, [count]);

    return (
        <ul className="space-y-3">
            {dish.map((todo: Dish) => {
                return <DishTodo key={todo.id} todo={todo} setUpdateItem={setUpdateItem} setDeleteItem={setDeleteItem} />;
            })}
        </ul>
    );
};

export default DishList;

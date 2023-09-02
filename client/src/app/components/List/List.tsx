import { Task } from "@/types";
import React from "react";
import Todo from "./Todo";

interface TodoListProps {
    todos: Task;
}

const List = ({ todos }: TodoListProps) => {
    return (
        <ul className="space-y-3">
            {todos.map((todo: Task) => {
                return <Todo key={todo.id} todo={todo} />;
            })}
        </ul>
    );
};

export default List;

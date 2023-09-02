import { getAllTodos } from "@/api";
import List from "./components/List/List";
import AddTask from "./components/Task/AddTask";

export default async function Home() {
    const todos = await getAllTodos();

    return (
        <main className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-200">
            <h1 className="text-4xl font-bold text-gray-700 -mt-32">Eatist</h1>
            <div className="w-full max-w-xl mt-5">
                <div className="bg-white shadow-md rounded px-8 py-6 rounded-lg">
                    <AddTask />
                    <List todos={todos} />
                </div>
            </div>
        </main>
    );
}

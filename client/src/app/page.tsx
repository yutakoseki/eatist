import Observation from "./components/Observation/Observation";

export default async function Home() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-200">
            <h1 className="text-4xl font-bold text-gray-700 -mt-32">Dish List</h1>
            <div className="w-full max-w-xl mt-5">
                <div className="bg-white shadow-md rounded px-8 py-6 rounded-lg">
                    <Observation />
                </div>
            </div>
        </main>
    );
}

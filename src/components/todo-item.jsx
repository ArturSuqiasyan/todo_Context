import { useContext } from "react";
import { TodoContext } from "../todo-context";

export const ToDoItem = ({ todo }) => {
    const {onUpdate}= useContext(TodoContext)
    return (
        <div className={`flex items-center justify-between p-4 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 ${todo.completed ? "opacity-40" : ""}`}>
            <p className="text-gray-300 text-lg font-medium">{todo.taxt}</p>
            <small>{todo.description}</small>
            <div className="flex space-x-2">
                <button onClick={()=>onUpdate(todo.id)}  className="px-3 py-1 text-sm font-semibold text-gray-800 bg-indigo-500 rounded-md shadow hover:bg-emerald-500">
                    Complete
                </button>
                <button className={`px-3 py-1 text-sm font-semibold text-gray-800 bg-indigo-400 rounded-md shadow hover:bg-amber-500 ${todo.completed ? "cancel" : "complete"}`}>
                    Delete
                </button>
            </div>
        </div>
    );
};

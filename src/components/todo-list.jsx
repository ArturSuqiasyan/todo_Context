import { List } from "./list"
import { ToDoAdd } from "./todo-add"
import { ToDoFilter } from "./todo-filter"

export const ToDoList = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="w-full max-w-2xl p-6 bg-gray-800 rounded-lg shadow-lg space-y-6">
                <div>
                    <ToDoAdd />
                    <ToDoFilter />
                </div>
                <div>
                    <List />
                </div>
            </div>
        </div>
    );
};

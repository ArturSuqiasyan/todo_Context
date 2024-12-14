import { useContext } from "react";
import { TodoContext } from "../todo-context";
import { useForm } from "react-hook-form";

export const ToDoAdd = () => {
    const {onAdd} = useContext(TodoContext)
    const {register, reset, handleSubmit, formState: {errors}} = useForm();
    const handleFormSubmit = (data) => {
        onAdd(data);
        reset(); 
    };
    return (
        <div className="max-w-md mx-auto p-6 bg-gray-900 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold text-gray-200 mb-4">Add To Do</h1>
            <form onSubmit={handleSubmit(handleFormSubmit)}  action="" className="space-y-4">
            {errors.taxt && <p className="text-red-500 p-2 mb-2">{errors.taxt.message}</p>}
                
                <div className="flex flex-col">
                    <label className="text-gray-400 mb-1">Text</label>
                    <input
                    {...register("taxt", { required: "Please add text" })}
                        type="text"
                        className="p-2 bg-gray-800 text-gray-300 rounded-lg focus:ring-emerald-400 focus:outline-none"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="text-gray-400 mb-1">Description</label>
                    <input
                    {...register("description")}
                        type="text"
                        className="p-2 bg-gray-800 text-gray-300 rounded-lg focus:border-emerald-400 focus:outline-none"
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-gray-400 mb-1">Category</label>
                    <select
                        {...register("category")}
                        className="p-2 bg-gray-800 text-gray-300 rounded-lg focus:ring-emerald-400 focus:outline-none"
                    >
                        <option value="normal">Normal</option>
                        <option value="urgent">Urgent</option>
                    </select>
                </div>
                
                <button className="w-full px-4 py-2 text-lg font-semibold text-white bg-indigo-800 rounded-lg hover:bg-indigo-500">
                    Save
                </button>
            </form>
        </div>
    );
};

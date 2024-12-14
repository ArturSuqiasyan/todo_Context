import { useContext } from "react";
import { TodoContext } from "../todo-context";

export const ToDoFilter = () => {
    const {filters, currentFilter, onFilter}= useContext(TodoContext)
    return (
        <div className="flex items-center justify-center gap-5 p-4 bg-gray-800 rounded-lg shadow-md">
           <p className="text-indigo-400"> curent filter: <strong>{currentFilter}</strong> </p>
            {
                filters.map(filter =>

               
          
            <label key={filter} className="flex items-center space-x-2 text-gray-300">
                <input
                    value={filter}
                    checked={filter == currentFilter}
                    onChange={e =>onFilter(e.target.value)}
                    type="radio"
                    name="filter"
                   
                    className="text-emerald-400 focus:ring-emerald-400 focus:ring-offset-gray-900"
                />

        
            
                <span>{filter}</span>
            </label> 
            ) } 
        </div>
    );
};

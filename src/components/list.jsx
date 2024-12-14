import { useContext } from "react"
import { ToDoItem } from "./todo-item"
import { TodoContext } from "../todo-context"
import { AddSubtaskButton } from "./AddSubtaskButton";
export const List = () => {
    const {todos , currentFilter,onUpdate}= useContext(TodoContext) 
    const list = currentFilter == "all" 
    ? todos 
    : currentFilter === "active"
    ? todos.filter(todo => !todo.completed)
    : currentFilter === "completed"
    ? todos.filter(todo => todo.completed)  
    : currentFilter === "urgent"
    ? todos.filter(todo => todo.category === "urgent")
    : todos;
    return <div className="space-y-4 p-4 bg-gray-900 rounded-lg shadow-lg">
           {list.map((todo) => (
        <div key={todo.id}>
          <ToDoItem todo={todo} />
          <AddSubtaskButton todoId={todo.id} />
          {todo.subtasks.length > 0 && (
            <div className="ml-6">
              <h4 className="text-gray-300">Subtasks:</h4>
              {todo.subtasks.map((subtask) => (
                <div key={subtask.id} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={subtask.completed}
                    onChange={() => onUpdate(todo.id, subtask.id)}
                    className="text-emerald-400 focus:ring-emerald-400 focus:ring-offset-gray-900"
                  />
                  <span className={subtask.completed ? "line-through text-gray-500" : ""}>
                    {subtask.text}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  
};


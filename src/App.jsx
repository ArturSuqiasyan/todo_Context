import { useState } from "react"
import { ToDoList } from "./components/todo-list"
import { TodoContext } from "./todo-context"
import { ThemeSwitcher } from "./components/ThemeSwitcher";

export default function App(){
  const [currentFilter, setCurentFilter]= useState("all")
  const [ filters, setFilters] =useState(["all", "active", "completed", "urgent"])
  const [todos, setTodos] = useState([
    {
      id: 101,
      text: "Add authentication feature to website",
      description: "responsible",
      completed: false,
      category: "normal",
      subtasks: [
        { id: 201, text: "Add tailwind css", completed: false },
        { id: 202, text: "Create components", completed: false },
        { id: 203, text: "Add validation", completed: false },
        { id: 204, text: "Handle API requests", completed: false },
      ],
    },
    {
      id: 102,
      text: "HTML task",
      description: "responsible",
      completed: false,
      category: "normal",
      subtasks: [],
    },
    {
      id: 103,
      text: "JSX task",
      description: "responsible",
      completed: true,
      category: "normal",
      subtasks: [],
    },
  ]);
  const [theme, setTheme] = useState("dark");
  
  const handleAdd = todo => {
    setTodos([...todos, { ...todo, completed: false, id: Date.now(),subtasks: [] }]);
  }
  const handleUpdate = (id, subtaskId) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              subtasks: todo.subtasks.map((subtask) =>
                subtask.id === subtaskId
                  ? { ...subtask, completed: !subtask.completed }
                  : subtask
              ),
              completed: todo.subtasks.every((subtask) => subtask.completed),
            }
          : todo
      )
    );
  };
  const handleAddSubtask = (id, subtaskText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              subtasks: [
                ...todo.subtasks,
                { id: Date.now(), text: subtaskText, completed: false },
              ],
            }
          : todo
      )
    );
  };

  return  <>
      <div className={`${theme === "dark" ? "dark" : ""} min-h-screen bg-gray-100 dark:bg-gray-900`}>
        <div className="p-4 max-w-4xl mx-auto">
          <ThemeSwitcher onThemeChange={setTheme} />
          <TodoContext.Provider
            value={{
              todos,
              onUpdate: handleUpdate,
              filters,
              currentFilter,
              onFilter: setCurentFilter,
              onAdd: handleAdd,
              onAddSubtask: handleAddSubtask,
            }}
          >
            <ToDoList />
          </TodoContext.Provider>
        </div>
      </div>
    </>
}
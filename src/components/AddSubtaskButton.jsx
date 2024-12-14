import { useState, useContext } from "react";
import { TodoContext } from "../todo-context";

export const AddSubtaskButton = ({ todoId }) => {
  const [subtaskText, setSubtaskText] = useState("");
  const { onAddSubtask } = useContext(TodoContext);

  const handleAddSubtask = () => {
    if (subtaskText.trim()) {
      onAddSubtask(todoId, subtaskText);
      setSubtaskText("");
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <input
        type="text"
        value={subtaskText}
        onChange={(e) => setSubtaskText(e.target.value)}
        placeholder="Add subtask"
        className="p-2 rounded"
      />
      <button
        onClick={handleAddSubtask}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Add
      </button>
    </div>
  );
};

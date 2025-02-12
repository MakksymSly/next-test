import { motion } from "framer-motion";
import { Todo } from "@/types/Todo";
import { useEffect, useState } from "react";
import { useTodos } from "@/utils/hooks/useTodos";

interface Props {
  todo: Todo;
  currentTodoRef: React.RefObject<HTMLInputElement | null>;
}

export const TodoItem: React.FC<Props> = (props) => {
  const { todo, currentTodoRef } = props;
  const { editTodo, removeTodo } = useTodos();
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [completed, setCompleted] = useState(todo.completed);

  const handleInputValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleCompletedChange = () => {
    const currentLocalTodos: Todo[] = JSON.parse(localStorage.getItem("todos") || "[]");
    localStorage.setItem("todos", JSON.stringify(currentLocalTodos.map((todo: Todo) => (todo.id === todo.id ? { ...todo, completed: !todo.completed } : todo))));
    setCompleted(!completed);
  };

  const handleEdit = () => {
    if (!isEditing) {
      setIsEditing(true);
      currentTodoRef.current?.focus();
      return;
    }
    editTodo.mutate({ id: todo.id, title, completed });
    setIsEditing(false);
  };

  const handleEditOnBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    event.stopPropagation();
    editTodo.mutate({ id: todo.id, title, completed });
    setIsEditing(false);
  };

  const handleDelete = () => {
    removeTodo.mutate(todo.id);
  };

  useEffect(() => {
    if (isEditing) {
      setTimeout(() => {
        currentTodoRef.current?.focus();
      }, 0);
    }
  }, [isEditing, currentTodoRef]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }} 
      animate={{ opacity: 1, x: 0 }} 
      exit={{ opacity: 0, x: 50, transition: { duration: 0.3 } }}
      layout
      className="flex items-center justify-between bg-white shadow-md p-4 rounded-lg border border-gray-200"
    >
      {!isEditing ? (
        <p className={`text-lg ${todo.completed ? "line-through text-gray-500" : "text-black"}`}>{todo.title}</p>
      ) : (
        <input value={title} onChange={handleInputValueChange} onBlur={handleEditOnBlur} ref={currentTodoRef} className="text-lg" />
      )}
      <div className="flex gap-2">
        {isEditing && (
          <button
            onMouseDown={handleCompletedChange}
            className={`px-4 py-2 ${!todo.completed ? "bg-green-500 hover:bg-green-600" : "bg-red-500 hover:bg-red-600"} transition text-white rounded-lg`}
          >
            {todo.completed ? "Uncomplete" : "Complete"}
          </button>
        )}
        <button onMouseDown={handleEdit} className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">
          {isEditing ? "Save" : "Edit"}
        </button>
        <button onClick={handleDelete} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
          Delete
        </button>
      </div>
    </motion.div>
  );
};

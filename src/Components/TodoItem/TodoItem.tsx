import { Todo } from '@/types/Todo';
import { UseMutationResult } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

interface Props {
	todo: Todo;
	removeTodo: UseMutationResult<number, Error, number, void>;
	editTodo: UseMutationResult<
		{
			id: number;
			title: string;
		},
		Error,
		{
			id: number;
			title: string;
		},
		void
  >;
  currentTodoRef: React.RefObject<HTMLInputElement | null>
}

export const TodoItem: React.FC<Props> = (props) => {
	const { todo, removeTodo, editTodo, currentTodoRef} = props;

  const [isEditing, setIsEditing] = useState(false);

  const [title, setTitle] = useState('');

  const handleInputValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  useEffect(() => {
    if (isEditing) {
      setTimeout(() => {
        currentTodoRef.current?.focus();
      }, 0);
    }
  }, [isEditing, currentTodoRef]);

	return (
		<div className="flex items-center justify-between bg-white shadow-md p-4 rounded-lg border border-gray-200">
			{!isEditing ? <p className={`text-lg ${todo.completed ? 'line-through text-gray-500' : 'text-black'}`}>{todo.title}</p> : <input value={title} onChange={handleInputValueChange} ref={currentTodoRef} className="text-lg"></input>}
			<div className="flex gap-2">
				{!isEditing ? (
					<button
            onClick={() => {
              
              setIsEditing(true);
              currentTodoRef.current?.focus();
						}}
						className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">
						Edit
					</button>
				) : (
					<button
						onClick={() => {
							editTodo.mutate({ id: todo.id, title: title });
							setIsEditing(false);
						}}
						className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">
						Done
					</button>
				)}
				<button onClick={() => removeTodo.mutate(todo.id)} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
					Delete
				</button>
			</div>
		</div>
	);
};

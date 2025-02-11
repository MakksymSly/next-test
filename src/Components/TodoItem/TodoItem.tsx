import { Todo } from '@/types/Todo';
import { UseMutationResult } from '@tanstack/react-query';

interface Props {
	todo: Todo;
	removeTodo: UseMutationResult<number, Error, number, void>;
}

export const TodoItem: React.FC<Props> = (props) => {
	const { todo, removeTodo } = props;

	return (
		<div className="flex items-center justify-between bg-white shadow-md p-4 rounded-lg border border-gray-200">
			<p className={`text-lg ${todo.completed ? 'line-through text-gray-500' : 'text-black'}`}>{todo.title}</p>
			<button onClick={() => removeTodo.mutate(todo.id)} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
				Delete
			</button>
		</div>
	);
};

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteTodo, getTodos, postTodo } from '@/utils/api';
import { TodoList } from '../TodoList/TodoList';
import { Todo } from '@/types/Todo';
import { useState } from 'react';

export const TodoForm = () => {
	const [query, setQuery] = useState('');

	const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(event.target.value);
	};

	const handleAddButton = () => {
		if (!query.trim()) return;
		addTodo.mutate(query);
		setQuery('');
  };
  
  const handleLazyEnterKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleAddButton();
    }
  };

	const queryClient = useQueryClient();

	const { data: todos, isPending } = useQuery({
		queryKey: ['todos'],
		queryFn: getTodos,
	});

	const addTodo = useMutation({
		mutationFn: postTodo,

		onMutate: async (newTitle) => {
			await queryClient.cancelQueries({ queryKey: ['todos'] });

			const newTodo: Todo = {
				id: Date.now(),
				title: newTitle,
				completed: false,
				userId: Date.now() + 1,
			};

			queryClient.setQueryData(['todos'], (prev: Todo[]) => [newTodo, ...prev]);
		},
	});

	const removeTodo = useMutation({
		mutationFn: deleteTodo,

		onMutate: async (id) => {
			await queryClient.cancelQueries({ queryKey: ['todos'] });

			queryClient.setQueryData(['todos'], (prev: Todo[]) => prev.filter((todo) => todo.id !== id));
		},
	});
	return (
		<div className="max-w-xl min-h-96 mx-auto p-4 bg-stone-50/20 rounded-2xl shadow-lg">
			<h2 className="text-xl font-semibold text-center mb-4">Todo App</h2>

			<div className="flex gap-2 mb-4">
				<input type="text" placeholder="Whatcha Gonna Do?" value={query} onChange={(event) => handleQueryChange(event)} onKeyDown={handleLazyEnterKeyDown} className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
				<button
					onClick={handleAddButton}
					className={`
            ${!query.trim() ? 'bg-gray-200 cursor-not-allowed' : 'bg-green-500 hover:bg-green-500/80'} 
           text-white px-4 py-2 rounded-lg transition uppercase font-bold
`}>
					just do it!
				</button>
			</div>
			<TodoList todos={todos} isPending={isPending} removeTodo={removeTodo} />
		</div>
	);
};

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteTodo, getTodos, postTodo, updateTodo } from '@/utils/api';
import { TodoList } from '../TodoList/TodoList';
import { Todo } from '@/types/Todo';
import { useRef, useState } from 'react';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { FiltersType } from '@/types/Filters';

export const TodoForm = () => {
	const [query, setQuery] = useState('');
  const [currentFilter, setCurrentFilter] = useState<FiltersType>(FiltersType.ALL);
  const [search, setSearch] = useState('');

	const currentTodoRef = useRef<HTMLInputElement | null>(null);

	const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(event.target.value);
	};

	const handleAddButton = () => {
		if (!query.trim()) return;
		addTodo.mutate(query);
		setQuery('');
	};

	const handleEnterKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			event.preventDefault();
			handleAddButton();
		}
	};

	const queryClient = useQueryClient();

	const {
		data: todos,
		isPending,
		isError,
		error,
	} = useQuery({
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

			queryClient.setQueryData(['todos'], (prev: Todo[] = []) => [newTodo, ...prev]);
		},
	});

	const removeTodo = useMutation({
		mutationFn: deleteTodo,

		onMutate: async (id) => {
			await queryClient.cancelQueries({ queryKey: ['todos'] });

			queryClient.setQueryData(['todos'], (prev: Todo[] = []) => prev.filter((todo) => todo.id !== id));
		},
	});

	const editTodo = useMutation({
    mutationFn: ({ id, title, completed }: { id: number; title: string; completed: boolean }) => updateTodo(id, title, completed),

		onMutate: async ({ id, title, completed}) => {
			await queryClient.cancelQueries({ queryKey: ['todos'] });

			queryClient.setQueryData(['todos'], (prev: Todo[] = []) => prev.map((todo) => (todo.id === id ? { ...todo, title: title, completed: completed} : todo)));
		},
	});

	const filteredTodos = todos?.filter((todo) => {
		switch (currentFilter) {
			case FiltersType.ALL:
				return true;
			case FiltersType.ACTIVE:
				return !todo.completed;
			case FiltersType.COMPLETED:
				return todo.completed;
			default:
				return true;
		}
	}).filter((todo) => todo.title.toLowerCase().includes(search.toLowerCase()));


  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  }
	const filters = [
		{
			value: FiltersType.ALL,
			title: 'All',
		},
		{
			value: FiltersType.ACTIVE,
			title: 'Active',
		},
		{
			value: FiltersType.COMPLETED,
			title: 'Completed',
		},
	];
	return (
		<div className="max-w-xl min-h-96 mx-auto p-4 bg-stone-50/20 rounded-2xl shadow-lg">
      <h1 className="text-3xl font-semibold text-center mb-4">{`(˵ ͡~ ͜ʖ ͡°˵)ﾉ⌒♡ TODO APP`}</h1>

			<div className="flex gap-2 mb-4">
				<input type="text" placeholder="Whatcha Gonna Do?" value={query} onChange={(event) => handleQueryChange(event)} onKeyDown={handleEnterKeyDown} className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
				<button
					onClick={handleAddButton}
					className={`
            ${!query.trim() ? 'bg-gray-200 cursor-not-allowed' : 'bg-green-500 hover:bg-green-500/80'} 
           text-white px-4 py-2 rounded-lg transition uppercase font-bold
`}>
					just do it!
				</button>
			</div>
			<div className="flex items-center gap-2 text-xl mb-3">
				<p className="font-semibold">Filters:</p>
				{filters.map((filter) => (
					<button
						key={filter.title}
						onClick={() => setCurrentFilter(filter.value)}
						className={`px-4 py-2 rounded-lg font-semibold text-white transition-all shadow-md hover:shadow-lg
             ${currentFilter === filter.value ? 'bg-sky-500 hover:bg-sky-600' : 'bg-stone-500 hover:bg-stone-600'}
           `}>
						{filter.title}
					</button>
				))}
			</div>
      <div className='flex items-center gap-2 text-xl mb-3'>
        <p className='font-semibold'>Search:</p>
				<input value={search} onChange={handleSearchChange} className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"></input>
			</div>
			{isError ? <ErrorMessage message={error?.message} /> : <TodoList todos={filteredTodos ?? []} isPending={isPending} removeTodo={removeTodo} editTodo={editTodo} currentTodoRef={currentTodoRef} />}
		</div>
	);
};

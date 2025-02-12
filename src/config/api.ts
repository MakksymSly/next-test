import { Todo } from '@/types/Todo';
import axios from 'axios';
const SUPER_SECRET_API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export const getTodos = async () => {
	await new Promise((resolve) => setTimeout(resolve, 1000));
	const response = await axios.get(`${SUPER_SECRET_API_KEY}?_limit=10`);
	const getLocalTodos = (): Todo[] => JSON.parse(localStorage.getItem('todos') || '[]');
	const localStorageTodos = getLocalTodos();
	return [...localStorageTodos, ...response.data];
};

export const postTodo = async (title: string) => {
	if (SUPER_SECRET_API_KEY) {
		const response = await axios.post(SUPER_SECRET_API_KEY, { title, completed: false });
		const newTodo: Todo = {
			...response.data,
			id: Date.now(),
		};
		return newTodo;
	}
};

export const deleteTodo = async (id: number) => {
	await axios.delete(`${SUPER_SECRET_API_KEY}/${id}`);

	return id;
};

export const updateTodo = async (id: number, title: string, completed: boolean) => {
	const response = await axios.put(`${SUPER_SECRET_API_KEY}/${id}`, { title });

	return { ...response.data, title, completed };
};

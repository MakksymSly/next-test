import { Todo } from '@/types/Todo';
import axios from 'axios';

const SUPER_SECRET_API_KEY = 'https://jsonplaceholder.typicode.com/todos';



export const getTodos = async () => {
	await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await axios.get(`${SUPER_SECRET_API_KEY}?_limit=10`);
  const getLocalTodos = (): Todo[] => JSON.parse(localStorage.getItem('todos') || '[]');
	const localStorageTodos = getLocalTodos();
	return [...localStorageTodos, ...response.data];
};

export const postTodo = async (title: string) => {
	const response = await axios.post(SUPER_SECRET_API_KEY, { title, completed: false });
	const newTodo: Todo = {
		...response.data,
		id: Date.now(),
	};

  const getLocalTodos = (): Todo[] => JSON.parse(localStorage.getItem('todos') || '[]');
	const updatedTodos = [...getLocalTodos(), newTodo];
	localStorage.setItem('todos', JSON.stringify(updatedTodos));
	return newTodo;
};

export const deleteTodo = async (id: number) => {
	await axios.delete(`${SUPER_SECRET_API_KEY}/${id}`);
	
  const getLocalTodos = (): Todo[] => JSON.parse(localStorage.getItem('todos') || '[]');
	const updatedTodos = getLocalTodos().filter((todo) => todo.id !== id);
	localStorage.setItem('todos', JSON.stringify(updatedTodos));
	return id;
};

export const updateTodo = async (id: number, title: string) => {
	const response = await axios.put(`${SUPER_SECRET_API_KEY}/${1}`, { title });

  const getLocalTodos = (): Todo[] => JSON.parse(localStorage.getItem('todos') || '[]');
	const updatedTodos = getLocalTodos().map((todo) =>
		todo.id === id ? { ...todo, title } : todo
	);
	localStorage.setItem('todos', JSON.stringify(updatedTodos));
  
	return { ...response.data, title };
};
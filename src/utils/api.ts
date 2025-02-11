import axios from "axios";
 // :)
const SUPER_SECRET_API_KEY = "https://jsonplaceholder.typicode.com/todos";

export const getTodos = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await axios.get(`${SUPER_SECRET_API_KEY}?_limit=10`);
  return response.data;
};

export const postTodo = async (title: string) => {
  const response = await axios.post(SUPER_SECRET_API_KEY, { title, completed: false });
  return response.data;
};

export const deleteTodo = async (id: number) => {
  await axios.delete(`${SUPER_SECRET_API_KEY}/${id}`);
  return id;
};
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTodo, getTodos, postTodo, updateTodo } from "@/config/api";
import { Todo } from "@/types/Todo";

export const useTodos = () => {
  const queryClient = useQueryClient();

  const { data: todos, isPending, isError, error } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  const addTodo = useMutation({
    mutationFn: postTodo,

    onMutate: async (newTitle: string) => {
      await queryClient.cancelQueries({ queryKey: ["todos"] });

      const prevTodos = queryClient.getQueryData<Todo[]>(["todos"]);
      const newTodo: Todo = {
        id: Date.now(),
        title: newTitle,
        completed: false,
        userId: Date.now() + 1,
      };

      queryClient.setQueryData(["todos"], (prev: Todo[] = []) => [newTodo, ...prev]);

      return { prevTodos };
    },

    onSuccess: (newTodo) => {
      const localTodos: Todo[] = JSON.parse(localStorage.getItem("todos") || "[]");
      localStorage.setItem("todos", JSON.stringify([newTodo, ...localTodos]));
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },

    onError: (_error, _newTitle, context) => {
      if (context?.prevTodos) {
        queryClient.setQueryData(["todos"], context.prevTodos);
      }
    },
  });

  const removeTodo = useMutation({
    mutationFn: deleteTodo,

    onMutate: async (id: number) => {
      await queryClient.cancelQueries({ queryKey: ["todos"] });
      const prevTodos = queryClient.getQueryData<Todo[]>(["todos"]);
      queryClient.setQueryData(["todos"], (prev: Todo[] = []) => prev.filter((todo) => todo.id !== id));

      return { prevTodos };
    },

    onSuccess: (id) => {
      const localTodos: Todo[] = JSON.parse(localStorage.getItem("todos") || "[]").filter((todo:Todo) => todo.id !== id);
      localStorage.setItem("todos", JSON.stringify(localTodos));
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },

    onError: (_error, _id, context) => {
      if (context?.prevTodos) {
        queryClient.setQueryData(["todos"], context.prevTodos);
      }
    },
  });

  const editTodo = useMutation({
    mutationFn: ({ id, title, completed }: { id: number; title: string; completed: boolean }) =>
      updateTodo(id, title, completed),

    onMutate: async ({ id, title, completed }) => {
      await queryClient.cancelQueries({ queryKey: ["todos"] });

      const prevTodos = queryClient.getQueryData<Todo[]>(["todos"]);

      queryClient.setQueryData(["todos"], (prev: Todo[] = []) =>
        prev.map((todo) => (todo.id === id ? { ...todo, title, completed } : todo))
      );

      return { prevTodos };
    },

    onSuccess: ({ id, title, completed }) => {
      const localTodos: Todo[] = JSON.parse(localStorage.getItem("todos") || "[]").map((todo: Todo) =>
        todo.id === id ? { ...todo, title, completed } : todo
      );
      localStorage.setItem("todos", JSON.stringify(localTodos));
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },

    
  });

  return {
    todos,
    isPending,
    isError,
    error,
    addTodo,
    removeTodo,
    editTodo,
  };
};

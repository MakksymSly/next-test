import { UseMutationResult } from '@tanstack/react-query';
import { TodoItem } from '../TodoItem/TodoItem';
import { Todo } from '@/types/Todo';
import Image from 'next/image';
import { AnimatePresence } from 'framer-motion';

interface Props {
	todos: Todo[];
  removeTodo: UseMutationResult<number, Error, number, void>;
  editTodo: UseMutationResult<{
    id: number;
    title: string;
    completed: boolean;
}, Error, {
    id: number;
    title: string;
    completed: boolean;
}, void>;
  isPending: boolean;
  currentTodoRef: React.RefObject<HTMLInputElement | null>;
}
export const TodoList: React.FC<Props> = (props) => {
	const { todos, removeTodo, isPending, editTodo, currentTodoRef } = props;

  return (
    <AnimatePresence mode="popLayout">
  <div className="space-y-2">{isPending ? <Image src="loading.svg" alt="loading" width={50} height={50} className='mx-auto pt-20' /> : todos.map((todo: Todo) => <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} editTodo={editTodo} currentTodoRef={currentTodoRef} />)}</div>
  </AnimatePresence>
  );
 
};

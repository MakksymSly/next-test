
import { TodoItem } from '../TodoItem/TodoItem';
import { Todo } from '@/types/Todo';
import Image from 'next/image';
import { AnimatePresence } from 'framer-motion';

interface Props {
	todos: Todo[];
  isPending: boolean;
  currentTodoRef: React.RefObject<HTMLInputElement | null>;
}
export const TodoList: React.FC<Props> = (props) => {
	const { todos, isPending, currentTodoRef } = props;

  return (
    <AnimatePresence mode="popLayout">
  <div className="space-y-2">{isPending ? <Image src="loading.svg" alt="loading" width={50} height={50} className='mx-auto pt-20' /> : todos.map((todo: Todo) => <TodoItem key={todo.id} todo={todo}  currentTodoRef={currentTodoRef} />)}</div>
  </AnimatePresence>
  );
 
};

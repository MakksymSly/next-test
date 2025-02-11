import { TodoForm } from '@/Components/TodoForm/TodoForm';
import './globals.css';
export default function Home() {
	return (
      <div className='p-7 bg-stone-200/30 w-screen h-screen'>
        <TodoForm />
      </div>
	);
}

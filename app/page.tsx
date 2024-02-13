import { deleteTodo, readTodo } from '@/actions/todo'
import AddTodo from '@/components/add-todo'
import DoneTodo from '@/components/done-todo'

export default async function Home() {
  const todos = await readTodo()

  return (
    <main>
      <div className='m-8'>
        <h1 className='text-xl font-bold'>Todo 一覧</h1>
        <ul className='mt-8'>
          {todos.map(todo => (
            <div key={todo.id} className='flex m-4'>
              <DoneTodo id={todo.id} isCompleted={todo.isCompleted} />
              <li
                key={todo.id}
                className={`flex items-center space-x-2 ${
                  todo.isCompleted ? 'line-through' : ''
                }`}
              >
                <span>{todo.name}</span>
                <form>
                  <input type='hidden' name='id' value={todo.id} />
                  <button
                    className='bg-red-500 px-2 py-1 rounded-lg text-sm text-white'
                    formAction={deleteTodo}
                  >
                    削除
                  </button>
                </form>
              </li>
            </div>
          ))}
        </ul>
        <AddTodo />
      </div>
    </main>
  )
}

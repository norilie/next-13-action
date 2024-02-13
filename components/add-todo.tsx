'use client'

import { addTodo } from '@/actions/todo'
import { useRef } from 'react'

const AddTodo = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const add = async (data: FormData) => {
    await addTodo(data)
    if (formRef.current) formRef.current.reset()
  }

  return (
    <form action={add} className='flex items-center mt-4' ref={formRef}>
      <label htmlFor='name'>Name:</label>
      <input type='text' name='name' className='border mx-2 p-1' />
      <button
        type='submit'
        className='bg-blue-600 px-2 py-1 rounded-lg text-sm text-white'
      >
        Add Todo
      </button>
    </form>
  )
}
export default AddTodo

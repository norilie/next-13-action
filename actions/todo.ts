'use server'

import { createDb, deleteDb, readDb, updateDb } from '@/lib/crud-todo'
import { revalidatePath } from 'next/cache'

export const readTodo = async () => {
  const data = readDb()
  return data
}

export const doneTodo = async (id: number, isCompleted: boolean) => {
  updateDb(id, isCompleted)
  revalidatePath('/')
  console.log('check', isCompleted)
}

export const addTodo = async (data: FormData) => {
  const name = data.get('name') as string
  createDb(name)
  revalidatePath('/')
  console.log('data', data)
}

export const deleteTodo = async (data: FormData) => {
  const id = data.get('id') as string
  deleteDb(id)
  revalidatePath('/')
  console.log('click', id)
}

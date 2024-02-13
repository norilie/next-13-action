import { db } from './prisma'

export const readDb = async () => {
  const data = await db.todo.findMany()
  return data
}

export const updateDb = async (id: number, isCompleted: boolean) => {
  await db.todo.update({
    where: {
      id: Number(id),
    },
    data: {
      isCompleted: !isCompleted,
    },
  })
}

export const createDb = async (name: string) => {
  await db.todo.create({ data: { name } })
}

export const deleteDb = async (id: string) => {
  await db.todo.delete({
    where: {
      id: Number(id),
    },
  })
}

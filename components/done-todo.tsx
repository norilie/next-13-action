'use client'

import { doneTodo } from '@/actions/todo'
import { useTransition } from 'react'

const DoneTodo = ({
  id,
  isCompleted,
}: {
  id: number
  isCompleted: boolean
}) => {
  const [isPending, startTransition] = useTransition()

  return (
    <input
      onChange={() => startTransition(() => doneTodo(id, isCompleted))}
      checked={isCompleted}
      type='checkbox'
    />
  )
}

export default DoneTodo

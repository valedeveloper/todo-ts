import { useContext } from 'react'
import { TodosContext } from '../context/TodosProvider.js'

export const useTodos = () => {
  const { todos, handledAdd, handledRemove } = useContext(TodosContext)
  return { todos, handledAdd, handledRemove }
}

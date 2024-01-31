import { createContext, useEffect, useState } from 'react'
import { mocksToDo } from '../utilities/mocksTodos.js'

export const TodosContext = createContext()
const TodosProvider = ({ children }) => {
  const getTodos = window.localStorage.getItem('todos')
  const [todos, setTodos] = useState(getTodos)

  useEffect(
    window.localStorage.setItem('todos', JSON.stringify(todos))
    , [todos])

  const handledAdd = (todo) => {
    const newTodos = [...todos]
    newTodos.push(todo)
    setTodos(newTodos)
  }

  const handledRemove = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  return (
    <TodosContext.Provider value={{
      todos, handledAdd, handledRemove
    }} >
      {children}
    </TodosContext.Provider>
  )
}

export default TodosProvider

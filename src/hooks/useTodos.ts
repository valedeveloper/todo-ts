import { useState } from 'react'
import { type FilterValue, type TodoTitle, type ListToDo, type TodoId } from '../types'
import { TODO_FILTER } from '../const.js'

export const mocksTodos = [
  {
    id: 1,
    title: 'Ver Twitch',
    isCompleted: true
  },
  {
    id: 2,
    title: 'Curso de Typescript',
    isCompleted: true
  },
  {
    id: 3,
    title: 'Curso Flutter',
    isCompleted: false
  },
  {
    id: 4,
    title: 'Curso CSS',
    isCompleted: false
  }
]

export const useTodos = () => {
  const [todos, setTodos] = useState<ListToDo>(mocksTodos)
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTER.ALL)

  const filterTodos = todos.filter(todo => {
    if (filterSelected === TODO_FILTER.ACTIVE) return !todo.isCompleted
    if (filterSelected === TODO_FILTER.COMPLETED) return todo.isCompleted
    return todo
  })

  const activeCount = todos.filter(todo => !todo.isCompleted).length
  const completedCount = todos.length - activeCount

  const onFilterSelected = (key: FilterValue): void => {
    setFilterSelected(key)
  }

  const onClearCompleted = (): void => {
    const newTodos = todos.map(todo => {
      if (todo.isCompleted) {
        return {
          ...todo,
          isCompleted: false // Aquí corregimos el error y marcamos el todo como no completado
        }
      }
      return todo
    })
    setTodos(newTodos)
  }

  const handledComplete = ({ id, isCompleted }: Pick<TodoType, 'id' | 'isCompleted'>) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo, isCompleted
        }
      }
      return todo
    })
    setTodos(newTodos)
  }

  const handledRemove = (id: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handledEdit = ({ id, title }: { id: number, title: string }): void => {
    const newTitleTodo = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo, title
        }
      }
      return todo
    })
    setTodos(newTitleTodo)
  }

  const onAddTodo = (todo: TodoTitle): void => {
    const newTodo = {
      id: todos.length + 1,
      title: todo,
      isCompleted: false
    }
    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
  }

  return {
    filterTodos,
    activeCount,
    filterSelected,
    completedCount,
    onFilterSelected,
    onClearCompleted,
    handledComplete,
    handledRemove,
    handledEdit,
    onAddTodo
  }
}

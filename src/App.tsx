import { useState } from 'react'
import { type ListToDo, type FilterValue, type TodoId, type TodoTitle, type Todo as TodoType } from './types.js'
import Header from './components/Header.js'
import Todos from './components/Todos.js'
import Footer from './components/Footer.js'
import { TODO_FILTER } from './const.js'
const App = (): JSX.Element => {
  const mocksToDo = [
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

  const [todos, setTodos] = useState<ListToDo>(mocksToDo)
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTER.ALL)

  // const handledFilterChange(filter:FilterValue)=>{}
  const filterTodos = todos.filter(todo => {
    if (filterSelected === TODO_FILTER.ACTIVE) return !todo.isCompleted
    if (filterSelected === TODO_FILTER.COMPLETED) return todo.isCompleted
    return todo
  })
  const activeCount = todos.filter(todo => !todo.isCompleted).length
  const completedCount = todos.length - activeCount

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
  const onAddTodo = (todo: TodoTitle): void => {
    const newTodo = {
      id: todos.length + 1,
      title: todo,
      isCompleted: false
    }
    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
  }
  return (
  <>
  <Header onAddTodo={onAddTodo}/>
    <div className='todoapp'><Todos todos={filterTodos} onRemoveTodos={handledRemove} onCompletedTodos={handledComplete} /></div>
    <Footer activeCount={activeCount} completedCount={completedCount} filterSelected={filterSelected} onFilterSelected={onFilterSelected} onClearCompleted={onClearCompleted} />
  </>
  )
}
export default App

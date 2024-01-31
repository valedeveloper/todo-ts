import { useState } from 'react'
import { FilterValue, type TodoId, type Todo as TodoType } from './types.js'
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

  const [todos, setTodos] = useState(mocksToDo)
  const [filterSelected, setFilterSelected] = useState(TODO_FILTER.ALL)
 
  const handledFilterChange(filter:FilterValue)=>{
    setFilterSelected(filter)
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

  return (
   <>
    <div className='todoapp'><Todos todos={todos} onRemoveTodos={handledRemove} onCompletedTodos={handledComplete} /></div>
    <Footer activeCount completedCount filterSelected onClearCompleted onFilterSelected />
    </>
  )
}
export default App

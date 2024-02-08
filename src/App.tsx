import Header from './components/Header.js'
import Todos from './components/Todos.js'
import Footer from './components/Footer.js'
import { useTodos } from './hooks/useTodos.js'
const App = (): JSX.Element => {
  const { filterTodos, activeCount, filterSelected, completedCount, onFilterSelected, onClearCompleted, handledComplete, handledRemove, handledEdit, onAddTodo } = useTodos()
  return (
    <>
      <Header onAddTodo={onAddTodo} />
      <div className='todoapp'><Todos todos={filterTodos} onRemoveTodos={handledRemove} onCompletedTodos={handledComplete} handledEdit={handledEdit} /></div>
      <Footer activeCount={activeCount} completedCount={completedCount} filterSelected={filterSelected} onFilterSelected={onFilterSelected} onClearCompleted={onClearCompleted} />
    </>
  )
}
export default App

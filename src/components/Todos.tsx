// import { type ListToDo } from '../types'
import ToDo from './ToDo'
import { type ListToDo, type Todo as TodoType } from '../types'
// Usar react fc para decir que ese componete está esperando unas props. Se coloca en una interface de props, se ponen como está aquí y dentro de < Se coloca la interace con todo lo que espera ese componente>  //

interface Props {
  todos: ListToDo
  onCompletedTodos: ({ id, isCompleted }: Pick<TodoType, 'id' | 'isCompleted'>) => void
  onRemoveTodos: (id: number) => void
}

const Todos: React.FC<Props> = ({ todos, onRemoveTodos, onCompletedTodos }) => {
  return (
    <ul className='todo-list'>
      {todos.map((todo) => (
      <li key={todo.id} className={todo.isCompleted ? 'completed' : ''}>
          <ToDo
          id={todo.id}
          title={todo.title}
          isCompleted={todo.isCompleted}
          onCompletedTodos={onCompletedTodos}
          onRemoveTodos={onRemoveTodos}
        />
      </li>
      ))}
    </ul>
  )
}
export default Todos

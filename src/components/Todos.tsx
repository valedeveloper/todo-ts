// import { type ListToDo } from '../types'
import ToDo from './ToDo'
import { type ListToDo, type Todo as TodoType } from '../types'
import { useState } from 'react'
// Usar react fc para decir que ese componete está esperando unas props. Se coloca en una interface de props, se ponen como está aquí y dentro de < Se coloca la interace con todo lo que espera ese componente>  //

interface Props {
  todos: ListToDo
  handledEdit: ({ id, title }: { id: number, title: string }) => void
  onCompletedTodos: ({
    id,
    isCompleted
  }: Pick<TodoType, 'id' | 'isCompleted'>) => void
  onRemoveTodos: (id: number) => void
}

const Todos: React.FC<Props> = ({
  todos,
  onRemoveTodos,
  onCompletedTodos,
  handledEdit
}) => {
  const [isEditing, setIsEditing] = useState<number>()
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={`
        ${todo.isCompleted ? 'completed' : ''}
        ${isEditing === todo.id ? 'editing' : ''}
       `}
          onDoubleClick={() => { setIsEditing(todo.id) }}
        >
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

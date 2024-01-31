import { type Todo } from '../types'

interface Props extends Todo {
  onCompletedTodos: ({ id, isCompleted }: Pick<Todo, 'id' | 'isCompleted'>) => void
  onRemoveTodos: (id: number) => void
}
const ToDo: React.FC<Props> = ({ id, title, isCompleted, onRemoveTodos, onCompletedTodos }) => {
  const handledChecked = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onCompletedTodos({
      id, isCompleted: event.target.checked
    })
  }
  return (
    <div className="view">
      <input
        className="toggle"
        checked={isCompleted}
        type="checkbox"
        onChange={handledChecked}
      />
      <label>{id} - {title}</label>
      <button className="destroy"
        onClick={() => { onRemoveTodos(id) }}
      ></button>
    </div>
  )
}
export default ToDo

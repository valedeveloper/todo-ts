import { type FilterValue } from '../types'
import Filter from './Filter'

interface IFooter {
  activeCount: number
  completedCount: number
  filterSelected: FilterValue
  onFilterSelected: (filter: FilterValue) => void
  onClearCompleted: () => void
}

const Footer: React.FC<IFooter> = ({
  activeCount, completedCount, filterSelected, onClearCompleted, onFilterSelected
}) => {
  return (
        <footer className="footer">
          <p>{`Hay ${activeCount} tareas activas`}</p>
          <p>{`Hay ${completedCount} tareas completadas`}</p>
            <span className="todo-count">
                <strong>Tareas Pendientes</strong>
            </span>
            <Filter filterSelected={filterSelected} onFilterSelected={onFilterSelected} onClearCompleted={onClearCompleted} completedCount={completedCount}/>
        </footer>
  )
}
export default Footer

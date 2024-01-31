import { type FilterValue } from '../types'
import Filter from './Filter'

interface IFooter {
  activeCount: 0
  completedCount: 0
  filterSelected: FilterValue
  onFilterSelected: (filter: FilterValue) => void
  onClearCompleted: () => void
}

const Footer: React.FC<IFooter> = ({
  activeCount, completedCount, filterSelected, onClearCompleted, onFilterSelected
}) => {
  return (
        <footer className="footer">
            <span className="todo-count">
                <strong></strong>
                Tareas Pendientes
            </span>
            <Filter filterSelected={filterSelected} onFilterSelected={onFilterSelected} activeCount={}/>
        </footer>
  )
}
export default Footer

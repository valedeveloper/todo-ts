import { FILTERS_BUTTONS } from '../const'
import { type FilterValue } from '../types'

interface IFilter {
  completedCount: number
  filterSelected: FilterValue
  onFilterSelected: (filter: FilterValue) => void
  onClearCompleted: () => void

}
const Filter: React.FC<IFilter> = ({
  filterSelected,
  onFilterSelected,
  onClearCompleted,
  completedCount
}) => {
  return (
    <ul className="filters">
      {
        Object.entries(FILTERS_BUTTONS).map(([key, { href, literal }]) => {
          const isSelected = key === filterSelected
          const className = isSelected ? 'selected' : ''
          return (<li key={key}>
            <a
              href={href}
              className={className}
              onClick={(event) => {
                event.preventDefault()
                onFilterSelected(key as FilterValue)
              }

              }>
              {literal}
            </a>
          </li>)
        }
        )

      }
      {completedCount > 0 ? <button className='clear-comleted' onClick={onClearCompleted}>¿No está completada?</button> : null}
    </ul>
  )
}

export default Filter

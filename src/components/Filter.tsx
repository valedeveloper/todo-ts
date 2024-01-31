import { type TODO_FILTER, FILTERS_BUTTONS } from '../const'
import { type FilterValue } from '../types'

interface IFilter {
  filterSelected: FilterValue
  onFilterSelected: (filter: FilterValue) => void
}
const Filter: React.FC<IFilter> = ({
  filterSelected,
  onFilterSelected
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
    </ul>
  )
}

export default Filter

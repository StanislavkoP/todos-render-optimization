import classNames from 'classnames';
import { FILTERS } from '../../constants/filter';
import {useFooter} from "./use-footer";

const filterTitles = [
  { key: FILTERS.all, value: 'All' },
  { key: FILTERS.active, value: 'Active' },
  { key: FILTERS.completed, value: 'Completed' }
];

export function Footer() {
  const {
    models: {completedCount, filter,itemsLeft},
    commands: { handleClearCompleted, handleFilterSelect }
  } = useFooter()


  const itemText = itemsLeft === 1 ? 'item' : 'items';

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{itemsLeft}</strong>
        <span> {itemText} left</span>
      </span>
      <ul className="filters">
        {filterTitles.map(filterTitle => (
          <li key={filterTitle.key}>
            <a
              href="./#"
              className={classNames({ selected: filterTitle.key === filter })}
              onClick={() => handleFilterSelect(filterTitle.key)}
            >
              {filterTitle.value}
            </a>
          </li>
        ))}
      </ul>
      {!!completedCount && (
        <button className="clear-completed" onClick={handleClearCompleted}>
          Clear completed
        </button>
      )}
    </footer>
  );
}

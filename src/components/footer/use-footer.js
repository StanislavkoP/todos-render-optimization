import { useDispatch, useSelector } from 'react-redux';
import { selectCompleted, selectNotCompleted } from '../../store/selectors/todo';
import { onClearCompleted } from '../../store/actions/todo';
import { onFilterSelect } from '../../store/actions/filter';

export function useFooter() {
  const dispatch = useDispatch();
  const completedCount = useSelector(state => selectCompleted(state).length);
  const itemsLeft = useSelector(state => selectNotCompleted(state.todos).length);
  const filter = useSelector(state => state.filter);

  const handleClearCompleted = () => dispatch(onClearCompleted());
  const handleFilterSelect = selectedFilter => dispatch(onFilterSelect(selectedFilter));

  return {
    models: {
      completedCount,
      itemsLeft,
      filter
    },

    commands: {
      handleClearCompleted,
      handleFilterSelect
    }
  };
}

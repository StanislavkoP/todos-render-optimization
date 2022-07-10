import { FILTERS } from '../../constants/filter';
import { createSelector } from 'reselect';

// export function selectCompleted(state) {
//   return state.todos.filter(todo => todo.completed);
// }
export const selectCompleted = createSelector(
  state => state.todos,
  todos => todos.filter(todo => todo.completed)
);

export function selectNotCompleted(todos) {
  return todos.filter(todo => !todo.completed);
}

export function selectVisible(state, filter) {
  switch (filter) {
    case FILTERS.all:
      return [...state.todos];
    case FILTERS.completed:
      return selectCompleted(state);
    case FILTERS.active:
      return selectNotCompleted(state.todos);
    default:
      return [...state.todos];
  }
}

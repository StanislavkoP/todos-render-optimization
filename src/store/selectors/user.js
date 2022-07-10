import { createSelector } from 'reselect';

// export const selectUser = state => ({...state.user, fullName: `${state.user.firstName} ${state.user.lastName}`});

export const selectUser = createSelector(
  state => state.user,
  user => ({ ...user, fullName: `${user.firstName} ${user.lastName}` })
);

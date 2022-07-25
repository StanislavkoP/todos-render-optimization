import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onCompleteAll, onRemove, onUpdate } from '../../store/actions/todo';

export function useList({}) {
  const dispatch = useDispatch();
  const areAllCompleted = useSelector(state => state.todos.length && state.todos.every(todo => todo.completed));
  const handleCompleteAll = () => dispatch(onCompleteAll());
  // const update = values => dispatch(onUpdate(values));
  // const remove = id => dispatch(onRemove(id));
  const handleRemove = useCallback(id => dispatch(onRemove(id)), []);
  const handleUpdate = useCallback(values => dispatch(onUpdate(values)), []);

  return {
    models: {
      areAllCompleted
    },
    commands: {
      handleCompleteAll,
      handleRemove,
      handleUpdate
    }
  };
}

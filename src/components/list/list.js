import { useDispatch, useSelector } from 'react-redux';
import { Item } from '../item/item';
import { selectVisible } from '../../store/selectors/todo';
import { onUpdate, onRemove, onCompleteAll } from '../../store/actions/todo';
import { useCallback } from 'react';

export function List({ todos }) {
  const dispatch = useDispatch();
  const areAllCompleted = useSelector(state => state.todos.length && state.todos.every(todo => todo.completed));
  const completeAll = () => dispatch(onCompleteAll());
  // const update = values => dispatch(onUpdate(values));
  // const remove = id => dispatch(onRemove(id));
  const remove = useCallback(id => dispatch(onRemove(id)),[]);
  const update = useCallback( values => dispatch(onUpdate(values)), []);

  return (
    <section className="main">
      <input id="toggle-all" className="toggle-all" type="checkbox" checked={areAllCompleted} readOnly />
      <label htmlFor="toggle-all" onClick={completeAll} />

      <ul className="todo-list">
        {todos.map(todo => (
          <Item key={todo.id} todo={todo} onUpdate={update} onRemove={remove} />
        ))}
      </ul>
    </section>
  );
}

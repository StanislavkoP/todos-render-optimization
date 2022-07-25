import { Item } from '../item/item';
import {useList} from "./use-list";

export function List({ todos }) {
  const {
    models: {
      areAllCompleted
    },
    commands: {
      handleCompleteAll,
      handleRemove,
      handleUpdate
    }
  } = useList({ todos })

  return (
    <section className="main">
      <input id="toggle-all" className="toggle-all" type="checkbox" checked={areAllCompleted} readOnly />
      <label htmlFor="toggle-all" onClick={handleCompleteAll} />

      <ul className="todo-list">
        {todos.map(todo => (
          <Item key={todo.id} todo={todo} onUpdate={handleUpdate} onRemove={handleRemove} />
        ))}
      </ul>
    </section>
  );
}

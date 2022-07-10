import {memo, useState} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import RemoveButton from './remove-btn';

function ItemComp({ todo, onUpdate, onRemove }) {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(todo.name);

  const handleEdit = () => setEditing(true);
  const handleCompleted = () => onUpdate({ id: todo.id, completed: !todo.completed });
  const handleRemove = () => onRemove(todo.id);
  const handleChange = event => setName(event.target.value);
  const handleBlur = () => {
    onUpdate({ id: todo.id, name });
    setEditing(false);
  };

  const { completed } = todo;

  return (
    <li className={classNames({ completed, editing })} data-testid="todo-item">
      <div className="view">
        <input className="toggle" type="checkbox" checked={completed} onChange={handleCompleted} />
        <label onDoubleClick={handleEdit} data-testid="todo-name">
          {todo.name}
        </label>
        <RemoveButton onClick={handleRemove} />
      </div>
      {editing && (
        <input className="edit" value={name} onInput={handleChange} onBlur={handleBlur} onChange={() => {}} />
      )}
    </li>
  );
}

ItemComp.propTypes = {
  todo: PropTypes.object.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
};

export const Item = memo(ItemComp)
// export const Item = ItemComp

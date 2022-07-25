import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import RemoveButton from './remove-btn';
import { useItem } from './use-item';

function ItemComp({ todo, onUpdate, onRemove }) {
  const {
    models: { editing, name },
    commands: { handleBlur, handleChange, handleCompleted, handleEdit, handleRemove }
  } = useItem({ todo, onUpdate, onRemove });

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

export const Item = memo(ItemComp);
// export const Item = ItemComp

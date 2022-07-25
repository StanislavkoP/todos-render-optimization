import { useState } from 'react';


export function useItem({ todo, onUpdate,  onRemove}) {
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

  return {
    models: {
      editing,
      name
    },
    commands: {
      handleEdit,
      handleCompleted,
      handleRemove,
      handleChange,
      handleBlur
    }
  };
}

import {memo} from 'react';
import {useHeader} from "./use-header";


function HeaderComponent({ newName, onChangeNewItemName, onSubmit }) {
  const {
    models: { name },
    commands: {
      handleChange,
      handleSubmit
    }

  } = useHeader({ newName, onChangeNewItemName, onSubmit });


  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={name}
        onInput={handleChange}
        // value={newName}
        // onInput={onChangeNewItemName}
        onKeyUp={handleSubmit}
        onChange={() => {}}
        data-testid="todo-create"
      />
    </header>
  );
}

export const Header = memo(HeaderComponent)
// export const Header = HeaderComponent

import {memo, useState} from 'react';
import { useDispatch } from 'react-redux';
import { onCreate } from '../../store/actions/todo';

const ENTER_KEY = 'Enter';

function HeaderComponent({ newName, onChangeNewItemName, onSubmit }) {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleChange = event => setName(event.target.value);

  const handleSubmit = event => {
    if (event.key !== ENTER_KEY) {
      return;
    }

    dispatch(onCreate(name));
    onCreate(name);
    setName('');
  };

  // const handleSubmit = event => {
  //   if (event.key !== ENTER_KEY) {
  //     return;
  //   }
  //
  //   onSubmit()
  // };


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

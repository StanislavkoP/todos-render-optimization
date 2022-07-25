import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { onCreate } from '../../store/actions/todo';

const ENTER_KEY = 'Enter';

export function useHeader({ newName, onChangeNewItemName, onSubmit }) {
  const dispatch = useDispatch();
  const [name, setName] = useState('');

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

  return {
    models: {
      name
    },
    commands: {
      handleChange,
      handleSubmit
    }
  };
}

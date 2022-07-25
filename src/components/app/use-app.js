import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectVisible } from '../../store/selectors/todo';
import { onLoad } from '../../store/actions/todo';
import { TodoLocal } from '../../services/todo-local';

export function useApp() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);
  const visibleTodos = useSelector(state => selectVisible(state, state.filter));
  // const [name, setName] = useState('');

  useEffect(() => {
    dispatch(onLoad(TodoLocal.loadTodos()));
  }, [dispatch]);

  useEffect(() => {
    TodoLocal.storeTodos(todos);
  }, [todos]);

  // const handleChange = useCallback(event => setName(event.target.value), []);

  // const handleChange = event => setName(event.target.value);
  // const handleSubmit = () => {
  //   dispatch(onCreate(name));
  //   setName('');
  // };

  return {
    models: {
      todos,
      visibleTodos
    },
    commands: {
      // handleChange,
    }
  };
}

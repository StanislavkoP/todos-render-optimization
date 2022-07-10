import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onCreate, onLoad } from '../../store/actions/todo';
import { TodoLocal } from '../../services/todo-local';
import { Header } from '../header/header';
import { List } from '../list/list';
import { Footer } from '../footer/footer';
import { CopyRight } from '../copy-right/copy-right';
import {selectVisible} from "../../store/selectors/todo";

export function App() {
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

  return (
    <div id="app">
      <section className="todoapp">
        <Header
          // newName={name}
          // onChangeNewItemName={handleChange}
          // onSubmit={handleSubmit}
        />
        {!!todos.length && <List todos={visibleTodos} />}
        {!!todos.length && <Footer />}
      </section>
      <CopyRight />
    </div>
  );
}

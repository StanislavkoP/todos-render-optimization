import { Header } from '../header/header';
import { List } from '../list/list';
import { Footer } from '../footer/footer';
import { CopyRight } from '../copy-right/copy-right';
import { useApp } from './use-app';

export function App() {
  const {
    models: { todos, visibleTodos }
  } = useApp();

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

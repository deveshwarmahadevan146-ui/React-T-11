import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  increment,
  decrement,
  addTodo,
  toggleTodo,
} from './store';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const todos = useSelector((state) => state.todos);

  const [text, setText] = useState('');

  return (
    <div className="container">
      <h1>Redux Toolkit</h1>

      {/* Counter */}
      <div className="card">
        <h2>Counter</h2>
        <p className="count">{count}</p>
        <div className="btn-group">
          <button onClick={() => dispatch(increment())}>+</button>
          <button onClick={() => dispatch(decrement())}>-</button>
        </div>
      </div>

      {/* Todos */}
      <div className="card">
        <h2>Todos</h2>

        <div className="todo-input">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter todo..."
          />
          <button
            onClick={() => {
              if (text.trim()) {
                dispatch(addTodo(text));
                setText('');
              }
            }}
          >
            Add
          </button>
        </div>

        <ul>
          {todos.map((todo) => (
            <li
              key={todo.id}
              onClick={() => dispatch(toggleTodo(todo.id))}
              className={todo.completed ? 'done' : ''}
            >
              {todo.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
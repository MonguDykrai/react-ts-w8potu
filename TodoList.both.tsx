import React, { createContext, useContext, useEffect, useReducer } from 'react';

// https://reactjs.org/docs/context.html#reactcreatecontext
const TodoContext = createContext([]);

const TodoListItem = () => {
  const [state, dispatch] = useContext(TodoContext);
  return <li>{state.count}</li>;
};

const Increment = () => {
  const [state, dispatch] = useContext(TodoContext);
  return <button onClick={() => dispatch({ type: 'increment' })}>+</button>;
};

const Decrement = () => {
  const [state, dispatch] = useContext(TodoContext);
  return <button onClick={() => dispatch({ type: 'decrement' })}>-</button>;
};

const TodoList: React.FC = () => {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case 'increment':
          return {
            ...state,
            count: state.count + 1,
          };
        case 'decrement':
          return {
            ...state,
            count: state.count - 1,
          };
        default:
          return state;
      }
    },
    { count: 0 }
  );
  useEffect(() => {
    console.log(state);
  }, [state]);
  return (
    <TodoContext.Provider value={[state, dispatch]}>
      <ul>
        <TodoListItem></TodoListItem>
      </ul>
      <Increment />
      <Decrement />
    </TodoContext.Provider>
  );
};

export default TodoList;

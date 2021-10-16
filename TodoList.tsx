import React, { createContext, useContext, useEffect, useReducer } from 'react';

// https://reactjs.org/docs/context.html#reactcreatecontext
const TodoContext = createContext(0);

const TodoListItem = () => {
  const value = useContext(TodoContext); // 10
  return <li>{value}</li>;
};

const TodoList: React.FC = () => {
  return (
    <TodoContext.Provider value={10}>
      <ul>
        <TodoListItem></TodoListItem>
      </ul>
    </TodoContext.Provider>
  );
};

export default TodoList;

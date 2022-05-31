import React, { useState, useReducer } from "react";
import UserBar from "./UserBar";
import TodoList from "./TodoList";
import CreateTodo from "./CreateTodo";

import userReducer from "./Reducers";

function App() {
 // const [user, setUser] = useState("");
  const [todos, setTodos] = useState([]);

  const [user, dispatchUser] = useReducer(userReducer, "");

  return (
    <div>
      <UserBar user = {user} dispatch = {dispatchUser}/>
      {user && <CreateTodo todos={todos} setTodos = {setTodos} />}
      <TodoList todos = {todos}/>
    </div>
  );
}

export default App;

import React, { useState, useReducer } from "react";
import UserBar from "./UserBar";
import TodoList from "./TodoList";
import CreateTodo from "./CreateTodo";

import userReducer from "./Reducers";
import todoReducer from "./Reducers";
import appReducer from "./Reducers";

function App() {
  //const [user, setUser] = useState("");
  //const [todos, setTodos] = useState([]);

  //const [user, dispatchUser] = useReducer(userReducer, "");
  //const [todos, dispatchTodos] = useReducer(todoReducer, []);
  const [state, dispatch] = useReducer(appReducer, {user: "", todos: []})

  return (
    <div>
      <UserBar user = {state.user} dispatch = {dispatch}/>
      {state.user && <CreateTodo todos={state.todos} dispatch = {dispatch}/>}
      <TodoList todos = {state.todos} dispatch = {dispatch}/>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import UserBar from "./UserBar";
import TodoList from "./TodoList";
import CreateTodo from "./CreateTodo";

function App() {
  const [user, setUser] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <UserBar user = {user} setUser = {setUser}/>
      {user && <CreateTodo todos={todos} setTodos = {setTodos} />}
      <TodoList todos = {todos}/>
    </div>
  );
}

export default App;

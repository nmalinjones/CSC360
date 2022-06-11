import React, { useState, useReducer, useEffect, createContext } from "react";
import {useResource} from 'react-request-hook';

import UserBar from "./UserBar";
import TodoList from "./TodoList";
import CreateTodo from "./CreateTodo";
import appReducer from "./Reducers";

import { Router, View } from 'react-navi';
import { mount, route } from 'navi';

function App() {
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

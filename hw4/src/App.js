import React, { useState, useReducer, useEffect, createContext } from "react";
import {useResource} from 'react-request-hook';

import UserBar from "./UserBar";
import TodoList from "./TodoList";
import CreateTodo from "./CreateTodo";
import HomePage from "./pages/HomePage";
import TodoPage from "./pages/TodoPage";

import appReducer from "./Reducers";

import { Router, View } from 'react-navi'
import { mount, route } from 'navi'
import StateContext from "./Context";
import HeaderBar from "./pages/HeaderBar";

function App() {
  const [state, dispatch] = useReducer(appReducer, {user: "", todos: []})

  const routes = mount({
    '/': route({ view: <HomePage /> }),
    '/todo/create':route({ view: <CreateTodo /> }),
    '/todo/:id': route(req => {
        return { view: <TodoPage id={req.params.id} /> }
    }),
  })

  useEffect(() => {
    if (state.user) {
      document.title = `${state.user}'s Todo List`
    }
    else {
      document.title = 'My Todo List'
    }
  }, [state.user])

  useEffect(() => {
    console.log('Post Hook');
  }, [state.todos])



  return (
    <Router routes={routes} >
      <StateContext.Provider value = {{state, dispatch}} >
        <HeaderBar/>
        <View />
      </StateContext.Provider>
    </Router>
  );
}

export default App;

import React, {useReducer, useEffect} from "react";

import CreateTodo from "./CreateTodo";
import HomePage from "./pages/HomePage";

import appReducer from "./Reducers";

import { Router, View } from 'react-navi'
import { mount, route } from 'navi'
import StateContext from "./Context";
import HeaderBar from "./pages/HeaderBar";

function App() {
  const [state, dispatch] = useReducer(appReducer, {user: "", todos: []})

  const routes = mount({
    '/': route({ view: <HomePage /> }),
    '/todo/create':route({ view: <CreateTodo /> })
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

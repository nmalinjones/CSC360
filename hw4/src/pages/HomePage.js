import React, { useEffect, useContext } from 'react'
import StateContext from '../Context'
import { useResource } from 'react-request-hook'
import TodoList from '../TodoList'

export default function HomePage(){
    const {state, dispatch} = useContext(StateContext)

    const [ todos, getTodos ] = useResource(() => ({
        url: '/todos',
        method: 'get'
      }))
    
      useEffect(getTodos, [])
    
      useEffect(() => {
        if (todos && todos.data) {
            dispatch({ type: 'FETCH_POSTS', todos: todos.data })
        }
      }, [todos])

    return (
        <StateContext.Provider value = {{state, dispatch}} >
            <TodoList/>
        </StateContext.Provider>
    )
}

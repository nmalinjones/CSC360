import React, {useContext} from "react";
import { useResource } from "react-request-hook";
import StateContext from "./Context";
import Todo from "./Todo"

export default function TodoList() {
    const {state, dispatch} = useContext(StateContext);

    const updateTodo = (tid, updTodo) => {
        console.log('Inside Todo List')
        const newTodos = state.todos.map((todo) => {if (todo.tid === tid) {return updTodo} else {return todo}})
        dispatch({type: "TOGGLE_TODO", newTodos})
    }

    const deleteTodo = (tid) => {
        console.log("Inside of TodoList Delete")
        const delTodos = state.todos.filter((todo) => todo.tid !== tid);
        dispatch({type:"DELETE_TODO", delTodos});
    }

    return (
        <div>
            {state.todos.map((t, i) => (
                <Todo {...t} updateTodo = {updateTodo} deleteTodo = {deleteTodo} key = {t.tid} />
            ))}
        </div>
    )
}
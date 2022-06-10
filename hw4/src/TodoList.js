import React from "react";
import Todo from "./Todo"

export default function TodoList({todos = [], dispatch}) {
    const updateTodo = (id, updTodo) => {
        console.log('Inside Todo List')
        const newTodos = todos.map((todo) => {if (todo.id === id) {return updTodo} else {return todo}})
        dispatch({type: "TOGGLE_TODO", newTodos})
    }

    const deleteTodo = (id) => {
        console.log("Inside of TodoList Delete")
        const delTodos = todos.filter((todo) => todo.id !== id);
        dispatch({type:"DELETE_TODO", delTodos});
    }

    return (
        <div>
            {todos.map((t, i) => (
                <Todo {...t} updateTodo = {updateTodo} deleteTodo = {deleteTodo} key = {t.id} />
            ))}
        </div>
    )
}
import React from "react";
import Todo from "./Todo"

export default function TodoList({todos = [], dispatch}) {
    const updateTodo = (id, todo) => {
        console.log('Inside Todo List')
        dispatch({type: "TOGGLE_TODO", todo})
    }
    return (
        <div>
            {todos.map((t) => (
                //<Todo title = {t.title} description = {t.description} dateCreated = {t.dateCreated} key = {"todo-" + i} />
                <Todo {...t} updateTodo = {updateTodo} key = {"todo-" + t.id} />
            ))}
        </div>
    )
}
import React from "react";
import Todo from "./Todo"

export default function TodoList({todos = []}) {
    return (
        <div>
            {todos.map((t, i) => (
                <Todo title = {t.title} description = {t.description} dateCreated = {t.dateCreated} key = {"todo-" + i} />
            ))}
        </div>
    )
}
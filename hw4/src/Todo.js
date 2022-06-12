import React, { useState } from "react"

export default function Todo({title, description, complete, dateCreated, dateCompleted, tid, updateTodo, deleteTodo}){

    const [check, setCheck] = useState(false);

    function removeTodo(evt) {
        console.log("Inside Remove Todo")
        deleteTodo(tid);
    }
    
    function updateComplete(evt) {
        console.log("Inside Todo")
        setCheck(evt.target.checked);

        const updTodo = {
            title,
            description,
            complete: !complete,
            dateCreated,
            dateCompleted: Date.now(),
            tid
        }

        console.log(updTodo)
        updateTodo(tid, updTodo);
    }

    return(
        <div>
            <form>
                <input type = "checkbox" checked = {check} onChange = {updateComplete} name = "todo-item" id = {tid} />
                <label htmlFor = "todo-item"> {title}: {description} (Date Created: {dateCreated}) Complete: {`${complete}`} (Date Completed: {dateCompleted})</label>
                <input type = "button" value = "Delete" onClick={removeTodo}/>
            </form>
        </div>
    )
}
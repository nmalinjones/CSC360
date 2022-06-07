import React, { useState } from "react"

export default function Todo({title, description, complete, dateCreated, dateCompleted, id, updateTodo}){

    //const [complete, setComplete] = useState(false);
    //const [dateCompleted, setDateCompleted] = useState("");

    /*
    function handleComplete(evt) {
        //setComplete(toggle)
        setDateCompleted(Date.now());
        
        //dispatchEvent(type: "TOGGLE_DATE", complete, dateCompleted);
    }

    function toggle(e) {
        return !e;
    }
    */

    function deleteTodo(evt) {
        console.log("Deleting")
    }
    
    function updateComplete(evt) {
        console.log("Inside Todo")
        const updTodo = {
            title,
            description,
            complete: evt.target.checked,
            dateCreated,
            dateCompleted: Date.now(),
            id
        }
        updateTodo(id, updTodo);
    }

    return(
        <div>
            <form>
                <input type = "checkbox" checked = {complete} onChange = {updateComplete} name = "todo-item" id = {id} />
                <label htmlFor = "todo-item"> {title}: {description} (Date Created: {dateCreated}) Complete: {`${complete}`} (Date Completed: {dateCompleted})</label>
                <button type = "Submit" value = "Delete" onSubmit={deleteTodo}/>
            </form>
        </div>
    )
}
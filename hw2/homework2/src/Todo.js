import React, { useState } from "react"

export default function Todo({title, description, dateCreated}){

    const [complete, setComplete] = useState(false);
    const [dateCompleted, setDateCompleted] = useState("");

    function handleComplete(evt) {
        setComplete(toggle)
        setDateCompleted(Date.now());    
    }

    function toggle(e) {
        return !e;
    }

    return(
        <div>
            <form>
                <input type = "checkbox" checked = {complete} onChange = {handleComplete} name = "todo-item" id = "todo-item" />
                <label htmlFor = "todo-item"> {title}: {description} (Date Created: {dateCreated}) Complete: {`${complete}`} (Date Completed: {dateCompleted})</label>
            </form>
        </div>
    )
}
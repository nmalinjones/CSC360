import React, {useState} from "react";

export default function CreateTodo({todos, setTodos}) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    function handleTitle (evt) {setTitle(evt.target.value)}
    function handleDescription (evt) {setDescription(evt.target.value)}
    function handleCreate (evt) {
        const newTodo = {title, description, dateCreated: Date.now()}

        setTodos([newTodo, ...todos]);
    }


    return (
        <>
            <h2>Create Todo Item</h2>
            <form onSubmit={ (e) => { e.preventDefault(); handleCreate(e)}}>
                <label htmlFor = "todo-title">Title</label>
                <input type = "text" value = {title} onChange = {handleTitle} name = "todo-title" id = "todo-title"/>
                <textarea value = {description} onChange = {handleDescription}/>
                <input type = "submit" value = "Create" disabled = {title === 0}/>
            </form>
        </>
    )
}
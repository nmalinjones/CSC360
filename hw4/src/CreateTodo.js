import React, {useContext, useState, useEffect} from "react";
import StateContext from "./Context";
import { useResource } from "react-request-hook";
import { useNavigation } from 'react-navi'

export default function CreateTodo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const {state, dispatch} = useContext(StateContext);
    const navigation = useNavigation();

    const [todo , createTodo ] = useResource(({title, description, complete, dateCreated, dateCompleted, tid}) => ({
        url: '/todos',
        method: 'post',
        data: {title, description, complete, dateCreated, dateCompleted, tid}
    }))

    
    useEffect(() => {
        if(todo && todo.data && todo.isLoading === false) {
          navigation.navigate(`/`)
        }
      }, [todo])

    function handleTitle (evt) {setTitle(evt.target.value)}
    function handleDescription (evt) {setDescription(evt.target.value)}
    function handleCreate (evt) {
        const newTodo = {title, description, complete: false, dateCreated: Date.now(), tid: Math.floor(Math.random() * 1000000), dateCompleted: null}

        //setTodos([newTodo, ...todos]);
        createTodo({title, description, complete: false, dateCreated: Date.now(), tid: Math.floor(Math.random() * 1000000), dateCompleted: null})
        dispatch({type: "CREATE_TODO", newTodo})
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
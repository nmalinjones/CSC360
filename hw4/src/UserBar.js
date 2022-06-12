import React, { useContext } from "react";
import StateContext from "./Context";
import Login from "./Login";
import Logout from "./Logout";
import Register from "./Register";

export default function UserBar() {

    const {state, dispatch} = useContext(StateContext);

    if (state.user){
        console.log('Inside User')
        return <Logout user = {state.user} dispatch={dispatch} />
    } else {
        console.log('Inside User')
        return (
            <>
                <Login dispatch={dispatch} />
                <Register dispatch={dispatch} />
            </>
        );
    }
}
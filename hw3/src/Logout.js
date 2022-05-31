import React, { useState } from "react";

export default function Logout({user, setUser}) {
    return (
        <form onSubmit={(e) => {e.preventDefault(); setUser("");}}>
            Current User: <b> {user} </b>
            <input type = "submit" value = "logout"/>
        </form>
    );
}
import React, { useContext } from 'react'
import UserBar from '../UserBar'
import StateContext from '../Context'
import {Link} from 'react-navi'

export default function HeaderBar(){
    const {state, dispatch} = useContext(StateContext);
    return (
        <div>
            <UserBar />
            {state.user && <Link href="/todo/create">Create New Todo</Link>}
        </div>
    )
}
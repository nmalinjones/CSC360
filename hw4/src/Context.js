import React, {useContext} from 'react'

const StateContext = React.createContext({
    state: {},
    dispatch: () => {}
})

export default StateContext;
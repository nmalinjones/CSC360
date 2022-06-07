function userReducer(state, action) {
    switch(action.type) {
        case "LOGIN":
            return action.username;
        case "LOGOUT":
            return "";
        case "REGISTER":
            return action.username;
        default:
            return state;
    }
}

function todoReducer(state, action) {
    switch(action.type) {
        case "CREATE_TODO":
            return [...state, action.newTodo];
        case "TOGGLE_TODO":
            console.log('In Toggle Dispatch')
            console.log(action.todo.id)
            console.log(action.todo)
            /*
            const newState = state.map((t) => {
                console.log("Current Item :")
                console.log(t)
                if(action.id === t.id) {
                    console.log("Inside Map")
                    console.log("Found Item")
                    t = action.todo;
                }
                console.log("Finished With Item")
                console.log(state);
            });
            */
            console.log("Printing State:")
            console.log(state)
            return state.map((t) => {
                if(action.todo.id === t.id) {
                    console.log("Inside Map")
                    console.log("Found Item")
                    t = action.todo;
                }
            });;
        case "DELETE_TODO":
        default:
            return state;
    }
}

export default function appReducer(state, action) {
    return {
        user: userReducer(state.user, action),
        todos: todoReducer(state.todos, action)
    }
}
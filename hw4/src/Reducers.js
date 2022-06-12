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
            return action.newTodos
        case "DELETE_TODO":
            return action.delTodos
        case "FETCH_TODO":
            return action.todos
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
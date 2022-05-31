export default function userReducer(state, action) {
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
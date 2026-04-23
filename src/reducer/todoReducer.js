export default function todoReducer (state, action) {
    switch (action.type) {
        case "ADD_TODO":
            return [...state, action.payload]
        case "DELETE_TODO":
            return state.filter((todo) => todo.id !== action.payload.id)
        case "CHANGE_TODO":
            return state.map((todo) => {
                if(todo.id === action.payload.id) {
                    return {
                        ...todo,
                        title: action.payload.title,
                        done: action.payload.done
                    }
                }
                return todo
            })
        default:           
             throw new Error("Unknown action type")
    }
}
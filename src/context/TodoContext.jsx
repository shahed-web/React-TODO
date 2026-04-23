import { createContext, useContext, useReducer } from "react";
import generateNextId from "../utils/generateNextId";
import initialTodos from "../data/initialTodos";
import todoReducer from "../reducer/todoReducer";


export const TodoContext = createContext(null)

export default function TodoContextProvider({ children }) {
      const [todos, dispatch] = useReducer(todoReducer, initialTodos)
      const handleAddTodo = (title) => {
          const newTodo = {
              id: generateNextId(todos),
              title: title,
              done: false
          }
            dispatch({ type: "ADD_TODO", payload: newTodo })
      }
      
      const handleDeleteTodo = (id) => {
          dispatch({ type: "DELETE_TODO", payload: {id} })
      }
  
      const handleChangeTodo = (changedTodo) => {
          dispatch({ type: "CHANGE_TODO", payload: changedTodo })
      }
    return (
        <TodoContext.Provider value={{todos, onAddTodo: handleAddTodo, onDeleteTodo: handleDeleteTodo, onChangeTodo: handleChangeTodo}}>
            {children}
        </TodoContext.Provider>
    )
}

export function useTodoContext () {
    return useContext(TodoContext)
}
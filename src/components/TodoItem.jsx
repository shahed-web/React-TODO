import {  useState } from "react"
import {  useTodoContext } from "../context/TodoContext"

export default function TodoItem ({ todo }) {
    const [isEditing, setIsEditing] = useState(false)
    const { onDeleteTodo, onChangeTodo } = useTodoContext()
    const handleEdit = () => {
        setIsEditing(!isEditing)
    }

    const todoContent = isEditing ? (
        <>
            <input type="text" value={todo.title} onChange={(e)=>onChangeTodo({
                ...todo,
                title: e.target.value
            })}/>
            <button onClick={handleEdit}>Save</button> 
        </>
    ) : (
        <>
            <span>{todo.title}</span> 
            <button onClick={handleEdit}>Edit</button> 
        </>
    )

    return (
        <>
            <input type="checkbox" checked={todo.done} onChange={(e) => onChangeTodo({
                ...todo,
                done: e.target.checked
            })}/>
            
            {todoContent}  
            
            <button onClick={()=>onDeleteTodo(todo.id)}>Delete</button>   
        </>
    )
}
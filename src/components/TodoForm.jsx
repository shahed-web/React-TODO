import { useState } from "react"
import { useTodoContext } from "../context/TodoContext"

export default function TodoForm () {
    const [title, setTitle] = useState("")
    const { onAddTodo } = useTodoContext()
    return (
        <>
            <input 
                type="text" 
                placeholder="add todo" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button disabled={!title.trim()} onClick={()=>{onAddTodo(title); setTitle("")}}>Add Todo</button>
        </>
    )
}
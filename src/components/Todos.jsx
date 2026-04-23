import { useTodoContext } from "../context/TodoContext"
import TodoItem from "./TodoItem"

export default function Todos () {
    const { todos } = useTodoContext()

    return (
        <ul>
            <h2>Todo List</h2>
            {todos.map((todo) => (
                <li style={{listStyle: "none"}} key={todo.id}>
                    <TodoItem todo={todo} />
                </li>
            ))}
        </ul>
    )
}
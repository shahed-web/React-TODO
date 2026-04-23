export default function generateNextId (todos) {
    if (todos.length === 0) {
        return 1;
    }
    const maxId = Math.max(...todos.map(todo => todo.id));
    return maxId + 1;   
}
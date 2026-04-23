import './App.css'
import TodoForm from './components/TodoForm'
import Todos from './components/Todos'
import TodoContextProvider from './context/TodoContext'

function App() {

  return (
    <>
      <h1>Todo App</h1>
      <TodoContextProvider>
        <TodoForm />
        <Todos />
      </TodoContextProvider>
    </>
  )
}

export default App

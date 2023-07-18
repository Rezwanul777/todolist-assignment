import { useState } from 'react'
import TodoList from './Components/ToDoList'


function App() {
  
  return (
    <>
      <div>
      <h1 className="text-center mt-4">My To-Do List</h1>
      <TodoList/>
    </div>
    </>
  )
}

export default App

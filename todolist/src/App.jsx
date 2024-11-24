import { useState } from 'react'
import './App.css'
import Todo from './todo.jsx';


function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const handleAddTodo = () => {
    if(input) {
      setTodos([...todos, input]);
      setInput('');
    }

    const handleRemoveTodo = (index) => {
      const updatedTodos = todos.filter((_,i) => i !== index);
      setTodos(updatedTodos);
    }
  };



  return (
    <>
      <div className="app">
        <h1>To do List</h1>
        <input type="text"
        value={input} 
        onChange={(e) => setInput(e.target.value)}
        placeholder='Add a new todo'/>
      </div>
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {
          todos.map((todo,index) => (
            <Todo key={index} text={todo} onRemove={() => handleRemoveTodo(index)} />

          ))
        }
      </ul>
    </>
  )
}

export default App

import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/toDoList';

function App() {

  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFliteredTodos] = useState([]);

  useEffect(() => {
    const filterHandler = () => {
      switch(status){
        case 'completed':
          setFliteredTodos(todos.filter(todo => todo.completed === true ))
          break;
        case 'uncompleted':
          setFliteredTodos(todos.filter(todo => todo.completed === false ))
          break;
        default:
          setFliteredTodos(todos)
          break;
      } 
    };

    filterHandler();
  }, [todos, status]);

  return (
    <div className="App">
      <header>
        <h1>ToDo List</h1>
      </header>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} setStatus={setStatus} />
      <List setTodos={setTodos} todos={todos} filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;

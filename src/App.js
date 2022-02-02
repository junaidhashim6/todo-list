import React,{useState} from 'react';
import './App.css';
import Form from './components/Form.component';
import List from './components/List.component';
function App() {
  const [inputText,setInputText] = useState('');
  const [todos,setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        Welcome to todo List
      </header>
      <Form setInputText={setInputText} todos={todos} setTodos={setTodos} inputText={inputText} />
      <List todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;

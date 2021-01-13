import React from "react";
import './App.css';
import AddTodo from "./components/AddTodo/AddTodo";
import List from "./components/AddTodo/List/List";

function App() {
  return (
    <div className="App">
     <AddTodo />
     <List />
    </div>
  );
}

export default App;

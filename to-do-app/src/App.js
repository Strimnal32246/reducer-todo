import React, { useReducer } from "react";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList.js";
import { initialState, toDoReducer } from "./reducers/index.js";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(toDoReducer, initialState);
  return (
    <div className="App">
      <header className="App-header">
        <img src={require("./imgs/todo.jpg")} />
        <ToDoList dispatch={dispatch} data={state} />
        <ToDoForm dispatch={dispatch} />
      </header>
    </div>
  );
}

export default App;

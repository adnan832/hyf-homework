import React, { useState } from "react";
import TodoList from "./component/todoList";
import Counter from "./component/counter";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  return (
    <>
      <h1>*Todo-List*</h1>
      <h2>
        {" "}
        <Counter />{" "}
      </h2>
      <div className="App">
        <TodoList
          todo={todo}
          setTodo={setTodo}
          input={input}
          setInput={setInput}
        />
      </div>
    </>
  );
}
export default App;

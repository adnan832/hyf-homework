import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: "",
      },
    };
    this.todoInput = this.todoInput.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }
  todoInput(event) {
    this.setState({
      currentItem: {
        text: event.target.value,
      },
    });
  }
  addTodo(event) {
    event.preventDefault();
    const newTodo = this.state.currentItem;
    console.log(newTodo);
    if (newTodo.text !== "") {
      const newTodos = [...this.state.items, newTodo];
      this.setState({
        items: newTodos,
        currentItem: {
          text: "",
          key: "",
        },
      });
    }
  }
  deleteTodo(todo) {
    // console.log("remove" + " " + todo);
    const filteredTodo = this.state.items.filter((item) => item.text !== todo);
    this.setState({
      items: filteredTodo,
    });
    console.log(filteredTodo);
  }

  render() {
    return (
      <div id="todoDiv">
        <form id="todoForm" onSubmit={this.addTodo}>
          <input
            type="text"
            placeholder="Enter todo here!"
            value={this.state.currentItem.text}
            onChange={this.todoInput}
          />
          <button type="submit">Add</button>
        </form>

        {this.state.items.map((todo) => {
          return (
            <div className="listItems" key={(todo.text, todo.title)}>
              <p>
                {todo.text}
                {todo.title}
                <button
                  type="button"
                  className="deleteBtn"
                  onClick={(e) => this.deleteTodo(todo.text)}
                >
                  X
                </button>
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
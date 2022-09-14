import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./index.css";
import Todo from "./models/todo";
import AddTodo from "./components/todos/AddTodo";
import TodoItem from "./components/todos/TodoItem";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todo: Todo): void => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id: number): void => {
    const filterTodos = todos.filter((todo: Todo) => {
      return todo.id !== id;
    });
    setTodos(filterTodos);
  };

  const editTodo = (id: number, value: string) => {
    setTodos(
      todos.map((todo: Todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            title: value,
          };
        }
        return todo;
      })
    );
  };

  const filterTodo = ( id:number ) : void => {
    
    setTodos(
      todos.map((todo: Todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            is_done: !todo.is_done,
          };
        }
        return todo;
      })
    );
  }

  return (
    <div className="App">
      <header className="container">
        <div className="jumbotron d-flex justify-center flex-column align-items-center">
          <h1 className="display-4">Hello, world!</h1>
          <p className="lead">
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>

          <AddTodo addTodo={addTodoHandler} />
        </div>
      </header>

      <div className="d-flex flex-column align-items-center mt-5">
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              undone
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-profile"
              type="button"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              done
            </button>
          </li>
        </ul>
        <div className="tab-content tab-container" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <>
              {todos
                .filter((todo: Todo) => {
                  return todo.is_done === false;
                })
                .map((todo: Todo) => {
                  return (
                    <TodoItem
                      key={todo.id}
                      todo={todo}
                      deleteTodo={deleteTodo}
                      editTodo={editTodo}
                      filterTodo={filterTodo}
                    />
                  );
                })}
            </>
          </div>
          <div
            className="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
           <>
              {todos
                .filter((todo: Todo) => {
                  return todo.is_done === true;
                })
                .map((todo: Todo) => {
                  return (
                    <TodoItem
                      key={todo.id}
                      todo={todo}
                      deleteTodo={deleteTodo}
                      editTodo={editTodo}
                      filterTodo={filterTodo}
                    />
                  );
                })}
            </>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

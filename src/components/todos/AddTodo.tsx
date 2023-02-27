import React, { useState, Dispatch, SetStateAction } from "react";
import Todo from "../../models/todo";
import {useDispatch} from "react-redux"
import { AppDispatch } from "../../store";
import { addTodoAction } from "../../store/todoSlice"

interface Props {
  addTodo: (todo: Todo) => void;
}

const AddTodo: React.FC<Props> = ({ addTodo }) => {
  const [input, setInput] = useState<string>("");

  const dispatch = useDispatch<AppDispatch>()

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (input !== "") {
      addTodo({
        id: Date.now(),
        title: input,
        is_done: false,
      });
      // dispatch(addTodoAction({
      //     id: Date.now(),
      //     title: input,
      //     is_done: false,
      //   }))


      setInput("");
    }
  };

  return (
    <form onSubmit={submitHandler} className="input-group mb-3 input-container">
      <input
        type="text"
        className="form-control"
        placeholder="Add Todo"
        aria-label="Add Todo"
        aria-describedby="basic-addon2"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div className="input-group-append">
        <button type="submit" className="btn btn-outline-secondary">
          Button
        </button>
      </div>
    </form>
  );
};

export default AddTodo;

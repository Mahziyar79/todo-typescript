import React, { useState } from "react";
import Todo from "../../models/todo";
import EditTodo from "./EditTodo";

interface Props {
  todo: Todo;
  deleteTodo: (id: number) => void;
  editTodo : (id: number , value:string) => void,
  filterTodo : (id:number) => void

}

const TodoItem: React.FC<Props> = ({ todo, deleteTodo,editTodo ,filterTodo }) => {
  const [editStatus, setEditStatus] = useState<boolean>(false);
  return !editStatus ? (
    <div className="d-flex justify-content-between align-items-center mb-4">
      <div className={`filter-title-done ${todo.is_done && "done_item"}`} onClick={() => filterTodo(todo.id)}>{todo.title}</div>
      <div>
        <button
          type="button"
          className="btn btn-info btn-sm btn-space"
          onClick={() => setEditStatus(true)}
        >
          Edit
        </button>
        <button
          onClick={() => deleteTodo(todo.id)}
          type="button"
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      </div>
    </div>
  ) : (
    <EditTodo todo={todo} editTodo={editTodo} setEditStatus={setEditStatus}/>
  );
};

export default TodoItem;

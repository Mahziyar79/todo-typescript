import React, { useState,Dispatch} from "react";
import Todo from "../../models/todo";

interface Props {
  todo: Todo;
  editTodo : (id: number , value:string) => void
  setEditStatus : Dispatch<React.SetStateAction<boolean>>
}

const EditTodo: React.FC<Props> = ({ todo,editTodo,setEditStatus }) => {
  const [changeInputValue, setChangeInputValue] = useState(todo.title);

  const submitChange = (e : React.FormEvent) => {
    e.preventDefault();
    if(changeInputValue !== ""){
        editTodo(todo.id , changeInputValue);
        setEditStatus(false)
    }
  };

  return (
    <form
      onSubmit={submitChange}
      className="d-flex justify-content-between align-items-center mb-4"
    >
      <input
        type="text"
        value={changeInputValue}
        onChange={(e) => setChangeInputValue(e.target.value)}
      />
      <div>
        <button type="submit" className="btn btn-info btn-sm btn-space">
          Save
        </button>
        <button type="button" className="btn btn-danger btn-sm btn-space">
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditTodo;

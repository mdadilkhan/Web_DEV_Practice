import React, { useReducer, useState } from "react";

const ACTIONS = {
  ADD: "add",
  DELETE: "delete",
  UPDATE: "update",
  READ: "read",
};
const initalData = {
  arr: [],
};
function reducer(state, action) {
  console.log(state);
  console.log(action);
  switch (action.type) {
    case ACTIONS.ADD:
      return {
        ...state,
        arr: [...state.arr, action.payload],
      };
    case ACTIONS.DELETE:
      return {
        ...state,
        arr: state.arr.filter((item) => item !== action.payload),
      };
    default:
      return state;
  }
}
const TodoApp = () => {
  const [state, dispatch] = useReducer(reducer, initalData);
  const [input, setInput] = useState("");

  function handleChange(e) {
    setInput(e.target.value);
  }
  function handleAdd() {
    if (input.trim() === "") return;
    dispatch({ type: ACTIONS.ADD, payload: input });
    setInput(" ");
  }
  function handleDelete(item) {
    dispatch({ type: ACTIONS.DELETE, payload: item });
  }

  return (
    <div>
      <input type="text" value={input} onChange={handleChange} />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {state.arr.map((item, index) => {
          return (
            <li key={index}>
              {item}{" "}
              <button
                onClick={() =>
                  dispatch({ type: ACTIONS.DELETE, payload: item })
                }
              >
                Delete
              </button>
              
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoApp;

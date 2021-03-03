import React from "react";

export default function Todo({ id, todo, isCompleted, setTodos }) {
  const toggleComplete = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      });
    });
  };
  return (
    <div className="todo">
      {/* <label htmlFor="isCompleted" className="container">
        <input
          onChange={() => toggleComplete(id)}
          type="checkbox"
          name="done"
          checked={isCompleted}
        />
        <span className="checkmark"></span>
      </label> */}
      <input
        onChange={() => toggleComplete(id)}
        type="checkbox"
        name="done"
        checked={isCompleted}
      />
      <span style={isCompleted ? { textDecoration: "line-through" } : {}}>
        {todo}
      </span>
    </div>
  );
}

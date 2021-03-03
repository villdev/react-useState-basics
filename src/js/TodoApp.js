import React, { useState } from "react";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";

const data = [
  {
    id: 1,
    todo: "Create awesomes apps",
    isCompleted: true,
  },
  {
    id: 2,
    todo: "Master React",
    isCompleted: false,
  },
];

export default function TodoApp() {
  const [todos, setTodos] = useState(data);
  const [inputTodo, setInputTodo] = useState("");
  const updateInputTodo = (e) => {
    setInputTodo(e.target.value);
  };
  const addTodo = (e) => {
    e.preventDefault();
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: uuidv4(), todo: e.target.todo.value, isCompleted: false },
    ]);
    setInputTodo("");
  };
  return (
    <div className="exercise">
      <div className="todoApp">
        <h2> Todo</h2>
        <div className="todo-wrapper">
          {todos.map(({ id, todo, isCompleted }) => (
            <Todo
              key={id}
              id={id}
              todo={todo}
              isCompleted={isCompleted}
              setTodos={setTodos}
            />
          ))}
        </div>
        <form className="add-todo-wrapper" onSubmit={addTodo}>
          <input
            onChange={updateInputTodo}
            value={inputTodo}
            type="text"
            name="todo"
            placeholder="Write a new todo"
          />
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
}

import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div className="exercise">
      <div className="counter">
        <button
          style={{ color: "green", borderRadius: "8px 0 0 8px" }}
          onClick={decrement}
        >
          -
        </button>
        <span>{count}</span>
        <button
          style={{ color: "red", borderRadius: "0 8px 8px 0" }}
          onClick={increment}
        >
          +
        </button>
      </div>
    </div>
  );
}

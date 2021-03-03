import React, { useState } from "react";

export default function DarkMode() {
  const [currentTheme, setCurrentTheme] = useState("light");
  const toggleDarkMode = () => {
    setCurrentTheme((theme) => (theme === "dark" ? "light" : "dark"));
  };
  return (
    <div
      className="exercise"
      style={currentTheme === "dark" ? { backgroundColor: "black" } : {}}
    >
      <div className="dark-mode">
        <button onClick={toggleDarkMode}>Toggle dark mode</button>
      </div>
    </div>
  );
}

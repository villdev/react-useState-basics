import React from "react";
import "./css/style.css";

import Counter from "./js/counter";
import TwitterPost from "./js/TwitterPost";
import PasswordReset from "./js/PasswordReset";

export default function App() {
  return (
    <div>
      <Counter />
      <TwitterPost />
      <PasswordReset />
    </div>
  );
}

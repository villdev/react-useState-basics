import React, { useState } from "react";
import "./css/style.css";
import leftArrowImg from "./images/arrow-left.svg";
import rightArrowImg from "./images/arrow-right.svg";

import Counter from "./js/counter";
import TwitterPost from "./js/TwitterPost";
import PasswordReset from "./js/PasswordReset";
import AddToCart from "./js/AddToCart";
import TodoApp from "./js/TodoApp";
import DarkMode from "./js/DarkMode";
import ToastEx from "./js/ToastEx";
import FigmaApp from "./js/FigmaApp";
const routes = [
  "addToCart",
  "passwordReset",
  "twitterPost",
  "toastEx",
  "todoApp",
  "figmaApp",
  "darkMode",
  "counter",
];
//*counter
//*twitter post
//*passwordReset => password match, alphanumeric, disable submit, show password
//*addToCart => out of stock, like in a list, addt to cart
//*todapp => strikethrough
//*dark mode
//*toast
//!fontPairs => figma, dark mode

export default function App() {
  const [currentRoute, setCurrentRoute] = useState(0);
  const handleCarouselRoute = (dir) => {
    if (dir === "left" && currentRoute !== 0) {
      setCurrentRoute(currentRoute - 1);
    } else if (dir === "right" && currentRoute !== routes.length - 1) {
      setCurrentRoute(currentRoute + 1);
    }
  };
  // const handleKeyCarouselRoute = (e) => {

  // }
  return (
    <div className="App">
      <div className="route-title">{routes[currentRoute]}</div>
      <button
        className="carouselBtn"
        // onKeyDown={handleKeyCarouselRoute}
        onClick={() => handleCarouselRoute("left")}
        // style={currentRoute === 0 ? { color: "#7d7e80" } : { color: "#000000" }}
      >
        <img src={leftArrowImg} alt="" />
      </button>
      {routes[currentRoute] === "counter" ? (
        <Counter />
      ) : routes[currentRoute] === "twitterPost" ? (
        <TwitterPost />
      ) : routes[currentRoute] === "passwordReset" ? (
        <PasswordReset />
      ) : routes[currentRoute] === "addToCart" ? (
        <AddToCart />
      ) : routes[currentRoute] === "todoApp" ? (
        <TodoApp />
      ) : routes[currentRoute] === "darkMode" ? (
        <DarkMode />
      ) : routes[currentRoute] === "toastEx" ? (
        <ToastEx />
      ) : routes[currentRoute] === "figmaApp" ? (
        <FigmaApp />
      ) : (
        <div>
          <h3>error 404</h3>
        </div>
      )}
      <button
        className="carouselBtn"
        // onKeyDown={handleKeyCarouselRoute}
        onClick={() => handleCarouselRoute("right")}
        // style={
        //   currentRoute === routes.length - 1
        //     ? { color: "#7d7e80" }
        //     : { color: "#000000" }
        // }
      >
        <img src={rightArrowImg} alt="" />
      </button>
    </div>
  );
}

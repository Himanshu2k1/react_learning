import "./styles.css";
import React, { useState, useEffect } from "react";

export default function App() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const [count, setCount] = useState(0);
  const tick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    const interval = setInterval(tick, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [count]);

  // Mouse Locator

  const logMousePosition = (e) => {
    setX(e.clientX);
    setY(e.clientY);
  };
  useEffect(() => {
    console.log("component mounted");
    window.addEventListener("mousemove", logMousePosition);

    return () => {
      console.log("component unmounted");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);

  return (
    <div className="App">
      <p>Based on useEffect Hook</p>
      <h3>Timer : {count}</h3>
      <div>
        Pointer Co-ordinates are X:{x} , Y:{y}
      </div>
    </div>
  );
}

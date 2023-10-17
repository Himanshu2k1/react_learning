import "./styles.css";

import React, { useState, useEffect } from "react";

export default function App() {
  //for counter
  const [count, setCount] = useState(0);

  // initialse for name
  const [name, setName] = useState({ fistName: "", lastName: "" });

  // effect hook
  useEffect(() => {
    document.title = `your app counter is ${count}`;
  });

  // for lucky number
  const [num, setNum] = useState([]);

  // helping functions for counter
  Increment5 = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };
  Decrement5 = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  // luckey number generator
  additem = () => {
    setNum([
      ...num,
      {
        id: num.length,
        value: Math.floor(Math.random() * 100) + 1
      }
    ]);
  };
  return (
    <div>
      <h3>Implemented using useState Hook </h3>

      {/* jsx for name */}
      <input
        type="text"
        value={name.fistName}
        onChange={(e) => setName({ ...name, fistName: e.target.value })}
        placeholder="Enter Last name"
      ></input>
      <input
        type="text"
        value={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
        placeholder="Enter Last name"
      ></input>

      {/* JSX for counter */}
      <div class="counter"> counter : {count} </div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement
      </button>
      <button onClick={Increment5}>Increment 5</button>
      <button onClick={Decrement5}>Decrement 5</button>
      <button onClick={() => setCount((prevCount) => 0)}>Reset</button>

      <h3>
        {" "}
        Welcome {name.fistName} {name.lastName} to my web.
      </h3>

      {/* JSX for luckey number */}
      <button onClick={additem}>Add Your Lucky Number</button>
      <ul>
        {num.map((n) => (
          <li key={n.id}>Your Lucky Number is :{n.value}</li>
        ))}
      </ul>
      <button onClick={() => setNum((num) => [])}>Clear</button>

      <h5>|| Himanshu Sharma @ Q3 tech. ||</h5>
    </div>
  );
}

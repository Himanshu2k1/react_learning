import "./styles.css";
import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 0
};
reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return {...state, firstCounter: state.firstCounter - action.value };
    case "increment2":
      return {...state, secondCounter: state.secondCounter + action.value };
    case "decrement2":
      return {...state, secondCounter: state.secondCounter - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

export default function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <div className="counter">First counter value {count.firstCounter} </div>
      <button className="button2" onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment counter 1
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement counter 1
      </button>
      <button className="button2" onClick={() => dispatch({ type: "increment", value: 5 })}>
        Increment counter 1 by 5
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
        Decrement counter 1 by 5
      </button>

      <div>
      <div className="counter">Second counter value {count.secondCounter} </div>
      <button className="button2" onClick={() => dispatch({ type: "increment2", value: 1 })}>
        Increment 2nd counter
      </button>
      <button onClick={() => dispatch({ type: "decrement2", value: 1 })}>
        Decrement 2nd counter
      </button>
      </div>
      <button className="reset"onClick={() => dispatch({ type: "reset" })}>Reset Both Counters</button>

      <p>This website is based on useReducer Hooks</p>
    </div>
  );
}

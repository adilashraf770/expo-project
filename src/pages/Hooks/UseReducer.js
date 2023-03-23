import React, { useReducer } from "react";
// import { useState } from "react";
const initalstate = 0;
const reducer = (state, action) => {
  // console.log("state", state);
  // console.log("Action", action);

  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return (state = 0);
    default:
      return initalstate;
  }
};

// const initalCount = 0;
export default function UseReducer() {
  // const [count] = useState(initalCount);

  const [state, dispatch] = useReducer(reducer, initalstate);
  return (
    <div className="py-5">
      <div className="container">
        <div className="row mb-3">
          <div className="col">
            <h1 className="text-center">UseReducer Hook</h1> <br />
            <div className="text-center">
              {/* <button className="btn btn-success" onClick={() => {setCount(count + 1)}}>Increment</button> */}
              <button
                className="btn btn-success"
                onClick={() => {
                  dispatch({ type: "INCREMENT" });
                }}
              >
                Increment
              </button>
              <p className="mb-0 py-3 fs-5">{state}</p>
              {/* <p className="mb-0 py-3 fs-5">{count}</p> */}
              <button
                className="btn btn-danger"
                onClick={() => {
                  dispatch({ type: "DECREMENT" });
                }}
              >
                Decrement
              </button>
              <br />
              <button
                className="btn btn-danger my-2"
                onClick={() => {
                  dispatch({ type: "RESET" });
                }}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

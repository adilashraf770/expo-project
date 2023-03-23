import React from "react";
import { useState } from "react";
export default function Usestate() {
  const [count, setCount] = useState(0);
  const Increment = () => {
    setCount(count + 1);
  };
  const Decrement = () => {
    count > 0 && setCount(count - 1);
    //   count > 0 ? setCount(count-1):  setCount(0);
  };
  return (
    <div className="py-5">
      <div className="container">
        <div className="row mb-3">
          <div className="col">
            <h1 className="text-center">UseSate Hook</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="button text-center">
              <button className="btn btn-success" onClick={Increment}>
                Increment
              </button>
              <p className="mb-0 py-3 fs-5">{count}</p>
              <button className="btn btn-danger" onClick={Decrement}>
                Decrement
              </button>
              <button
                className="btn btn-warning text-white ms-2"
                onClick={() => {
                  setCount(0);
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

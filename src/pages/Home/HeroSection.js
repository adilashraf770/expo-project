import React, { useContext } from "react";
import { UserContext } from "../../context/UserCotext";
import { CountContext } from "../../context/CountContext";

// import { useState } from "react";
// import { userName } from "../../data/user";
export default function HeroSection() {
  const { userName, userAge } = useContext(UserContext);
  const { count, setCount } = useContext(CountContext);
  // const count = 0;

  return (
    <div className="py-5">
      <div className="container">
        <div className="row mb-3">
          <div className="col">
            <h1 className="text-center">Hero Section</h1>
            <h2 className="text-center">Name is: {userName}</h2>
            <h2 className="text-center">Age is: {userAge}</h2>
            <div className="button text-center">
              <button
                className="btn btn-success"
                onClick={() => {
                  setCount(count + 1);
                }}
              >
                Increment
              </button>
              <p className="mb-0 py-3 fs-5">{count}</p>
              <button
                className="btn btn-danger"
                onClick={() => {
                  setCount(count - 1);
                }}
              >
                Decrement
              </button>
              {/* <h1 className="text-center">Count:{count}</h1> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

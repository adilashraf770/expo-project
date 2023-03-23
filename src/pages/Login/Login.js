import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Login() {
  const { isAuthenticated } = useContext(AuthContext);

  const [state, setstate] = useState({
    email: "",
    password: "",
  });
  console.log(isAuthenticated);

  const handleValue = (e) => {
    setstate({ ...state, [e.target.name]: e.target.value });
  };

  const userDetails = (e) => {
    console.log(state);
    // console.log(password);
  };

  return (
    <>
      <div className="container">
        <div className="row my-4">
          <div className="col">
            <div className="text-center">
              <h1>Login</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-8 offset-2 col-lg-6 offset-3 ">
            <div className="card p-5">
              <div className="row g-3 ">
                <div class="col-12 ">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    onChange={handleValue}
                  />
                </div>
                <div className="col-12">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    onChange={handleValue}
                  />
                </div>
                <div className="button ">
                  <button
                    className="btn btn-success w-100"
                    onClick={userDetails}
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

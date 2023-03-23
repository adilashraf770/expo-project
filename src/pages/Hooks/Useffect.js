import React from "react";
import { useState, useEffect } from "react";
export default function UseEffect() {
  const [status, setStatus] = useState("active");
  const [gender,setGender]=useState("male");
  
  const Change=(e)=>{
    setGender(e.target.value);
  }  
  useEffect(() => {
    console.log(gender);
  }, [status,gender]);

  return (
    <div className="py-5">
      <div className="container">
        <div className="row mb-3">
          <div className="col">
            <h1 className="text-center">UseEffect Hook</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="button text-center">
              <select
                className="form-control"
                onChange={(e) => {
                  setStatus(e.target.value);
                }}
              >
                <option className="active">Active</option>
                <option className="inactive">Inactive</option>
                <option className="pending">Pending</option>
                <option className="canceled">Canceled</option>
              </select>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <p className="mb-0 fw-bold me-3 d-inline-block">Gender:</p>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="male"
                value="male"
                onChange={Change}
                checked={gender==="male"}
              />
              <label className="form-check-label" htmlfor="male" >
                male
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="female"
                value="female"
                onChange={Change}
                checked={gender==="female"}

              />
              <label className="form-check-label" htmlfor="female" >
                Female
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Dashborad() {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate("/");
  };
  return (

    <div className="py-5">
      <div className="container">
        <div className="row mb-3">
          <div className="col">
            <h1 className="text-center">Dashborad Home</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="button text-center">
              <button className="btn btn-success w-50" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

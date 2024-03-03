import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav className="navbar navbar-expand bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand  fw-bolder" href="#">
            BOOK LIBRARY
          </a>
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav me-auto"></ul>
            <button
              className="btn btn-outline-success my-2 my-sm"
              onClick={() => navigate("/create")}
            >
              Add +
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

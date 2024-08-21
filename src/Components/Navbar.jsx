import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link to='/#'>CURD App</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to='/'>Home</Link>
              </li>
              <li className="nav-item">
               <Link to='/user'>User</Link>
              </li>
              <li className="nav-item">
                <Link to='/update/:id'>Update</Link>
              </li>
              <li className="nav-item">
                <Link to='/create'>Create</Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
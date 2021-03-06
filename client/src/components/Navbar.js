import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.jpg';

const Navbar = () => {
  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="#"><img src = {logo} alt = "logo" className = "logo"/></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item px-2">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item px-2">
          <NavLink className="nav-link" to="/details">Student Details</NavLink>
        </li>
        <li className="nav-item px-2">
          <NavLink className="nav-link" to="/grievance">Report Grievances</NavLink>
        </li>
        <li className="nav-item px-2">
          <NavLink className="nav-link" to="/login">Login</NavLink>
        </li>
        <li className="nav-item px-2">
          <NavLink className="nav-link" to="/signup">Register</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar;
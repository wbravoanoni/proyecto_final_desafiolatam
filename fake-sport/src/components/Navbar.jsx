import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { Link,NavLink } from "react-router-dom";



const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">My React App</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  className={ ({ isActive }) => (isActive ? "nav-link active ms-3 text-decoration-none fw-bold menu-activo" : "nav-link active ms-3 text-decoration-none") }
                  to="/categoria/hombre" >
                  Hombre
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={ ({ isActive }) => (isActive ? "nav-link active ms-3 text-decoration-none fw-bold menu-activo" : "nav-link active ms-3 text-decoration-none") }
                  to="/categoria/mujer" >
                  Mujer
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={ ({ isActive }) => (isActive ? "nav-link active ms-3 text-decoration-none fw-bold menu-activo" : "nav-link active ms-3 text-decoration-none") }
                  to="/categoria/equipamiento" >
                  Equipamiento
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={ ({ isActive }) => (isActive ? "nav-link active ms-3 text-decoration-none fw-bold menu-activo" : "nav-link active ms-3 text-decoration-none") }
                  to="/categoria/calzado" >
                  Calzado
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={ ({ isActive }) => (isActive ? "nav-link active ms-3 text-decoration-none fw-bold menu-activo" : "nav-link active ms-3 text-decoration-none") }
                  to="/categoria/ofertas" >
                  Ofertas
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={ ({ isActive }) => (isActive ? "nav-link active ms-3 text-decoration-none fw-bold menu-activo" : "nav-link active ms-3 text-decoration-none") }
                  to="/ingresar" >
                  Ingresar
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };

export default Navbar;
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { Link,NavLink } from "react-router-dom";

const NavbarAdmin = () => {

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
            </ul>
            <ul className="navbar-nav ms-auto">
              <li class="nav-item dropdown">
              <NavLink
                  className={ ({ isActive }) => (isActive ? "nav-link dropdown-toggle active ms-3 text-decoration-none fw-bold menu-activo" : "nav-link dropdown-toggle active ms-3 text-decoration-none") }
                  to="/dashboard" 
                  href="#" 
                  id="adminDropdown" 
                  role="button" 
                  data-bs-toggle="dropdown" 
                  aria-expanded="false">
                  Administrador
              </NavLink>
              <ul class="dropdown-menu" aria-labelledby="adminDropdown">
                <li>
                  <a class="dropdown-item" href="/verUsuarios">Crear Usuarios</a>
                </li>
                <li>
                  <a class="dropdown-item" href="/dashboard/categorias">Categorías</a>
                </li>
                <li>
                  <a class="dropdown-item" href="/dashboard/productos">Productos</a>
                </li>
              </ul>
            </li>
              <li className="nav-item">
                <NavLink
                  className={ ({ isActive }) => (isActive ? "nav-link active ms-3 text-decoration-none fw-bold menu-activo bi bi-cart" : "nav-link active ms-3 text-decoration-none bi bi-cart") }
                  to="/carrito" >
                  Carrito
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };

export default NavbarAdmin;
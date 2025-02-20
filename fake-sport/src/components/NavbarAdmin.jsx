import React, { useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { Link,NavLink } from "react-router-dom";

import { CarritoContext } from "../assets/context/CarritoContext";

const NavbarAdmin = () => {
    const { carrito } = useContext(CarritoContext);
    const cantidadTotal = carrito.reduce((acc, item) => acc + item.cant, 0);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    sessionStorage.removeItem("isAuthenticated");
    navigate("/ingresar");
  };

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Fake - Sport</a>
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
              <li className="nav-item dropdown">
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
              <ul className="dropdown-menu" aria-labelledby="adminDropdown">
                <li>
                  <a className="dropdown-item" href="/dashboard">Dashboard</a>
                </li>
                <li>
                  <a className="dropdown-item" href="/verUsuarios">Crear Usuarios</a>
                </li>
                <li>
                  <a className="dropdown-item" href="/verCategorias">Categorías</a>
                </li>
                <li>
                  <a className="dropdown-item" href="/verProductos">Productos</a>
                </li>
                <li>
                  <a onClick={handleLogout} className="dropdown-item" href="/verProductos">Cerra Sesion</a>
                </li>
              </ul>
            </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link active ms-3 text-decoration-none fw-bold menu-activo bi"
                      : "nav-link active ms-3 text-decoration-none bi"
                      }
                      to="/cart"
                    >
                    🛒 Carrito
                    {cantidadTotal > 0 && (
                      <span className="badge bg-danger ms-2">{cantidadTotal}</span>
                    )}
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };

export default NavbarAdmin;
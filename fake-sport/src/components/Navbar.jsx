import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { Link } from "react-router-dom";



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
                <Link
                to="/hombre"
                className="nav-link active ms-3 text-decoration-none"
                >
                  Hombre
                </Link>
              </li>
              <li className="nav-item">
              <Link
                to="/mujer"
                className="nav-link active ms-3 text-decoration-none"
                >
                  Mujer
                </Link>
              </li>
              <li className="nav-item">
              <Link
                to="/ninos"
                className="nav-link active ms-3 text-decoration-none"
                >
                  Niños
                </Link>
              </li>
              <li className="nav-item">
              <Link
                to="/equipamiento"
                className="nav-link active ms-3 text-decoration-none"
                >
                  Equipamiento
                </Link>
              </li>
              <li className="nav-item">
              <Link
                to="/calzado"
                className="nav-link active ms-3 text-decoration-none"
                >
                  Calzado
                </Link>
              </li>
              <li className="nav-item">
              <Link
                to="/ofertas"
                className="nav-link active ms-3 text-decoration-none"
                >
                  Ofertas
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };

export default Navbar;
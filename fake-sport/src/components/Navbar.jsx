import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">My React App</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" href="#">Hombre</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Mujer</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Niños</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Equipamiento</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Calzado</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Ofertas</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };

export default Navbar;
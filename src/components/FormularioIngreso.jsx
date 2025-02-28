import React, { useState } from "react";

const FormularioIngreso = ({ handleLogin, error }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [recordar, setRecordar] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      alert("Por favor, ingrese su correo y contraseña.");
      return;
    }

    handleLogin(email, password, recordar);
  };

  return (
    <main className="form-signin w-50 m-auto pt-5">
      <form onSubmit={onSubmit} className="pt-5">
        <img
          className="mb-4"
          src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg"
          alt="Bootstrap Logo"
          width="72"
          height="57"
        />
        <h1 className="h3 mb-3 fw-normal">Por favor ingresa tus datos</h1>

        {error && <div className="alert alert-danger">{error}</div>}

        <div className="form-floating pb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="floatingInput">Correo Electrónico</label>
        </div>

        <div className="form-floating pb-3">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label htmlFor="floatingPassword">Contraseña</label>
        </div>

        <div className="form-check text-start my-3">
          <input
            className="form-check-input"
            type="checkbox"
            checked={recordar}
            id="flexCheckDefault"
            onChange={() => setRecordar(!recordar)}
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Recordar sesión
          </label>
        </div>

        {/* Botón de Login */}
        <button className="btn btn-dark w-100 py-2" type="submit">
          Ingresar
        </button>
        <p className="mt-5 mb-3 text-body-secondary">&copy; 2024 - 2025</p>
      </form>
    </main>
  );
};

export default FormularioIngreso;

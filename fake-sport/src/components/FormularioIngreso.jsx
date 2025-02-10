import React from "react";

const FormularioIngreso = () => {
    return (
        <main className="form-signin w-50 m-auto pt-5">
        <form className="pt-5">
            <img className="mb-4" src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/>
            <h1 className="h3 mb-3 fw-normal">Por favor ingresa tus datos</h1>

            <div className="form-floating pb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label for="floatingInput">Correo Electrónico</label>
            </div>
            <div className="form-floating pb-3">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                <label for="floatingPassword">Contraseña</label>
            </div>

            <div className="form-check text-start my-3">
            <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
            <label className="form-check-label" for="flexCheckDefault">
                Recordar
            </label>
            </div>
            <button className="btn btn-dark w-100 py-2" type="submit">Ingresar</button>
            <p className="mt-5 mb-3 text-body-secondary">&copy; 2024 - 2025</p>
        </form>
        </main>  
    );
};

export default FormularioIngreso;
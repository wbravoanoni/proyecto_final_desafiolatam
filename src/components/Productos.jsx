import React, { useContext,useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { CarritoContext } from "../assets/context/CarritoContext";

const Productos = () => {

  const { categoriaId } = useParams(); // Obtiene la categoría de la URL
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { agregarAlCarrito } = useContext(CarritoContext);

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch(`https://api-fake-sport.onrender.com/api/productos/categoria/${categoriaId}`);
            if (!response.ok) throw new Error("Error al obtener los datos");
            const data = await response.json();
            setProductos(data);
        } catch (error) {
            console.error("Error:", error);
        } finally {
            setLoading(false);
        }
    };

    fetchData();
}, [categoriaId]);

  return (
    <div className="row py-5">
      {/* Columna de Filtros */}
      <div className="col-3">
        <h4>Filtros</h4>
        <div className="form-group text-start ">
          <label htmlFor="genero" className="pb-2 fw-bolder">
            Género
          </label>
          <select id="genero" className="form-control form-control-sm">
            <option></option>
          </select>
        </div>
        <div className="form-group text-start ">
          <label htmlFor="tipo" className="py-2 fw-bolder">
            Tipo
          </label>
          <select id="tipo" className="form-control form-control-sm">
            <option></option>
          </select>
        </div>
        <div className="form-group text-start ">
          <label htmlFor="talla" className="py-2 fw-bolder">
            Talla
          </label>
          <select id="talla" className="form-control form-control-sm">
            <option></option>
          </select>
        </div>
        <div className="form-group text-start ">
          <label htmlFor="descuento" className="py-2 fw-bolder">
            Descuento
          </label>
          <select id="descuento" className="form-control form-control-sm">
            <option></option>
          </select>
        </div>
        <div className="form-group text-start ">
          <label htmlFor="color" className="py-2 fw-bolder">
            Color
          </label>
          <select id="color" className="form-control form-control-sm">
            <option></option>
          </select>
        </div>
        <button className="mt-3 btn btn-dark btn-block px-5">Filtrar</button>
      </div>

      {/* Columna de Productos */}
      <div className="col-9">
        <div className="row pb-3">
            <div className="col-8">
            </div>
            <div className="col-4">
                <div className="form-group text-start ">
                    <label htmlFor="genero" className="pb-2 fw-bolder">
                    Ordenar por:
                    </label>
                    <select id="genero" className="form-control form-control-sm">
                        <option>Precio mas bajo</option>
                        <option>Precio mas alto</option>
                        <option>Más reciente</option>
                        <option>Mayor descuento</option>
                    </select>
                </div>
            </div>
        </div>

        <div className="row">
          {productos.map((producto) => (
            <div className="col-md-4 mb-4" key={producto.id}>
              <div className="card">
                <a href={`/productos/${producto.id}`}>
                    <img
                    src={producto.imagen}
                    className="card-img-top"
                    alt="Imagen de excursión"
                    />
                </a>
                <div className="card-body">
                  <p className="card-text">{producto.nombre}</p>
                  
                  <p>
  {producto.descuento > 0 ? (
    <>
      
      <span className="text-decoration-line-through text-danger">
      ${Number(producto.precio).toLocaleString("es-CL")}
      </span>{" "}
      <span>
        ${Math.round(producto.precio * (1 - producto.descuento / 100)).toLocaleString("es-CL")}
      </span>
    </>
  ) : (
    <span>${producto.precio.toLocaleString("es-CL")}</span>
  )}
</p>
                </div>
                <button onClick={ () => agregarAlCarrito(producto) } className="btn btn-dark mx-2 px-3"><i className="fa-solid fa-cart-shopping me-2"></i>Añadir</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Productos;

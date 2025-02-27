import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CarritoContext } from "../assets/context/CarritoContext";

const ProductoUnico = () => {
  const { agregarAlCarrito } = useContext(CarritoContext);
  const { productoid } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api-fake-sport.onrender.com/api/productos/${productoid}`);
        if (!response.ok) throw new Error("Error al obtener el producto");
        const data = await response.json();
        setProducto(data);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [productoid]);

  if (loading) return <p>Cargando producto...</p>;
  if (!producto) return <p>Producto no encontrado.</p>;

  return (
    <div className="row py-5">
      <div className="row py-5">
        <div className="col-7 mb-4">
          <div className="card">
            <h2 className="my-3">{producto.text}</h2>
            <a href="#">
              <img
                src={producto.imagen}
                className="card-img-top"
                alt="Imagen del producto"
              />
            </a>
          </div>
        </div>
        <div className="col-5 mb-4">
          <p>
            {producto.descuento > 0 ? (
              <>
                <span className="text-decoration-line-through text-danger h5">
                    ${Number(producto.precio).toLocaleString("es-CL")}
                </span>{" "}
                <span className="h3">
                  ${Math.round(producto.precio * (1 - producto.descuento / 100)).toLocaleString("es-CL")}
                </span>
                <br />
                <span className="ps-2 text-danger fw-bold">Descuento: {producto.descuento} %</span>
              </>
            ) : (
              <span className="h5">${producto.precio.toLocaleString("es-CL")}</span>
            )}
          </p>

          <p className="fw-bold text-start">Color:</p>
          <div className="d-flex justify-content-center pb-5">
            {["danger", "warning", "primary", "dark", "success"].map((color) => (
              <div key={color} className={`btn btn-${color} mx-2 rounded-circle`} style={{ width: '50px', height: '50px' }}></div>
            ))}
          </div>

          <p className="fw-bold text-start">Talla: </p>
          <div className="d-flex justify-content-center pb-5">
            {["S", "M", "L", "XL"].map((talla) => (
              <div key={talla} className='btn mx-2' style={{ border: "1px solid", width: '70px' }}>{talla}</div>
            ))}
          </div>

          <hr />
          <button onClick={() => agregarAlCarrito(producto)} className="btn btn-outline-dark mx-2 px-3">
            <i className="fa-solid fa-cart-shopping me-2"></i>Añadir
          </button>
        </div>
        
        <h4 className="text-start ps-5">Descripción:</h4>
        <p className="card-text">{producto.descripcion}</p>
      </div>
    </div>
  );
};

export default ProductoUnico;

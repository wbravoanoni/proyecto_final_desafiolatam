import React, { useContext, useEffect, useState } from "react";
import { CarritoContext } from "../assets/context/CarritoContext";
import Navbar from '../components/Navbar';
import NavbarAdmin from "../components/NavbarAdmin";
import Footer from "../components/Footer";

const Cart = () => {
    const isAuthenticated =
      localStorage.getItem("isAuthenticated") || sessionStorage.getItem("isAuthenticated");

  const {
    carrito,
    eliminarDelCarrito,
    aumentarCantidad,
    disminuirCantidad,
    total,
    vaciarCarrito
  } = useContext(CarritoContext);

  const [productosCarrito, setProductosCarrito] = useState(carrito);

  useEffect(() => {
    setProductosCarrito(carrito);
  }, [carrito]); 

  let total_formateado = total.toLocaleString("es-CL");

  return (
    <div>
      { isAuthenticated ? <NavbarAdmin /> :<Navbar /> }
      <div className="row">
        <h1 className="text-center mb-4">Carrito</h1>

        {console.log("Carrito en /cart:", productosCarrito)}

        {productosCarrito.length === 0 ? (
          <p>El carrito está vacío</p>
        ) : (
          productosCarrito.map((producto) => (
            <div key={producto.id} className="mb-3 border p-3">
              <ul className="list-unstyled">
                {producto.imagen && (
                  <li>
                    <img src={producto.imagen} alt="" width={150} />
                  </li>
                )}
                {producto.text && <li>Producto: {producto.text}</li>}
                {producto.price && (
                  <li>Precio: ${producto.price.toLocaleString("es-CL")}</li>
                )}
                <li>
                  Cantidad: {producto.cant}
                  <button
                    onClick={() => disminuirCantidad(producto)}
                    className="btn btn-outline-danger mx-2"
                  >
                    -
                  </button>
                  <button
                    onClick={() => aumentarCantidad(producto)}
                    className="btn btn-outline-success"
                  >
                    +
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => eliminarDelCarrito(producto.id)}
                    className="btn btn-danger mt-2"
                  >
                    Eliminar producto
                  </button>
                </li>
              </ul>
            </div>
          ))
        )}

        <p className="d-block mx-auto">Total: ${total_formateado}</p>
        {carrito.length > 0 && (
          <button
            onClick={vaciarCarrito}
            className="btn btn-danger px-5 mt-3 d-block mx-auto"
          >
            Vaciar Carrito
          </button>
        )}

        <button className="btn btn-warning px-5 mt-3 d-block mx-auto">
          Pagar
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;

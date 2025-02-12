import React from "react";
import { useParams } from "react-router-dom";
import cardsData from '../assets/info/productos'

const DetalleProducto = () => {
    const { categoriaId } = useParams();
  const productosFiltrados = cardsData.filter(
    (producto) => producto.id === categoriaId
  );

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
          {productosFiltrados.map((card) => (
            <div className="col-md-4 mb-4" key={card.id}>
              <div className="card">
                <a href="">
                    <img
                    src={card.image}
                    className="card-img-top"
                    alt="Imagen de excursión"
                    />
                </a>
                <div className="card-body">
                  <p className="card-text">{card.text}</p>
                  
                  <p>
            {card.descuento > 0 ? (
                <>
                    <span className="text-decoration-line-through text-danger">
                        ${card.precio.toLocaleString("es-CL")}
                    </span>{" "}
                    <span>
                        ${Math.round(card.precio * (1 - card.descuento / 100)).toLocaleString("es-CL")}
                    </span>
                </>
                ) : (
                    <span>$
                    {Math.round(
                      card.precio * (1 - card.descuento / 100)
                    ).toLocaleString("es-CL")}</span>
                )}
                    </p>
                </div>
                <p><button className="btn btn-dark">Comprar</button></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetalleProducto;

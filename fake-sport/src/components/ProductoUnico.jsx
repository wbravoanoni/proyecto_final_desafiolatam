import React from "react";
import { useParams } from "react-router-dom";
import cardsData from '../assets/info/productos'

const ProductoUnico = () => {
    const { productoid } = useParams();
    const productosFiltrados = cardsData.filter(
    (producto) => producto.id === parseInt(productoid)
  );

  return (
        <div className="row py-5">
            {productosFiltrados.map((card) => (
            <div className="col-md-7 mb-4" key={card.id}>
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
  );
};

export default ProductoUnico;

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
            <div className="row py-5">
                <div className="col-7 mb-4" key={card.id}>
                    <div className="card">
                    <h2 className="my-3">{card.text}</h2>
                    <a href="">
                        <img
                        src={card.image}
                        className="card-img-top"
                        alt="Imagen de excursión"
                        />
                    </a>
                    <div className="card-body">
                       
                    </div>
                    </div>
                </div>
                <div className="col-5 mb-4">
                <p>
                {card.descuento > 0 ? (
                    <>
                        <span className="text-decoration-line-through text-danger h5">
                            ${card.precio.toLocaleString("es-CL")}
                        </span>{" "}
                        <span className="h3">
                            ${Math.round(card.precio * (1 - card.descuento / 100)).toLocaleString("es-CL")}
                        </span>
                        <span className="ps-2 h6">Descuento: {card.descuento} %</span>
                    </>
                    ) : (
                        <span className="h5">$
                        {Math.round(
                            card.precio * (1 - card.descuento / 100)
                        ).toLocaleString("es-CL")}</span>
                    )}
                    </p>

                    <p className="fw-bold text-start">Color:</p>
                    <p className="text-start">{card.color}</p>
                    <p className="fw-bold text-start">Talla: </p>
                        <div className="d-flex justify-content-center pb-5">
                            <div className='mx-2' style={{border: "1px solid", width: '70px'}}>S</div>
                            <div className='mx-2' style={{border: "1px solid", width: '70px'}}>M</div>
                            <div className='mx-2' style={{border: "1px solid", width: '70px'}}>L</div>
                            <div className='mx-2' style={{border: "1px solid", width: '70px'}}>XL</div>
                        </div>
                        <hr />
                        <p><button className="btn btn-dark w-100">Comprar</button></p>
                </div>
                <h4 className="text-start ps-5">Descripción:</h4>
                <p className="card-text">{card.descripcion}</p>    
            </div>
            
            ))}
        </div>
  );
};

export default ProductoUnico;

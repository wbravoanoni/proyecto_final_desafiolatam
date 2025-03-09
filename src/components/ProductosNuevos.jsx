import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React, { useState, useEffect } from "react";

const ProductosNuevos = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api-fake-sport.onrender.com/api/productos`);
                if (!response.ok) throw new Error("Error al obtener los datos");
                const data = await response.json();

                if (Array.isArray(data)) {
                    setProductos(data);
                } else {
                    console.error("La API no devolvió un array");
                    setProductos([]);
                }
            } catch (error) {
                console.error("Error:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <p className="text-center">Cargando productos...</p>;
    }

    return (
        <div className="row">
            <h3 className="text-center py-3">Productos Nuevos</h3>
            <div id="carouselWithCards" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {productos.map((producto, index) => (
                        <div
                            className={`carousel-item ${index === 0 ? "active" : ""}`}
                            key={index}
                        >
                            <div className="container mt-3">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="card">
                                            <a href={`/productos/${producto.id}`}>
                                                <img
                                                    src={producto.imagen || "/imagenes/default.jpg"}
                                                    className="card-img-top"
                                                    alt={producto.nombre}
                                                />
                                            </a>
                                            <div className="card-body text-center">
                                                <h5 className="card-title">{producto.precio}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselWithCards"
                    data-bs-slide="prev"
                    style={{ backgroundColor: 'rgba(128, 128, 128, 0.2)' }}
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselWithCards"
                    data-bs-slide="next"
                    style={{ backgroundColor: 'rgba(128, 128, 128, 0.2)' }}
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default ProductosNuevos;

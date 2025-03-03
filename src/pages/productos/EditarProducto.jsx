import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditarProducto = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducto = async () => {
    try {
        const token = localStorage.getItem("token") || sessionStorage.getItem("token");

        const response = await fetch(`https://api-fake-sport.onrender.com/api/productos/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            throw new Error("Error al obtener los datos del producto");
        }

        const data = await response.json();
        setProducto(data);
    } catch (error) {
        setError(error.message);
    } finally {
        setLoading(false);
    }
    };

    fetchProducto();
    }, [id]);

    if (loading) return <p>Cargando...</p>;
    if (error) return <p className="alert alert-danger">{error}</p>;
    if (!producto) return <p className="alert alert-warning">Producto no encontrado.</p>;

    return (
        <div className="container mt-4">
            <h3>Editar Producto: {producto.nombre}</h3>
            <p>ID: {producto.id}</p>
        </div>
    );
};

export default EditarProducto;

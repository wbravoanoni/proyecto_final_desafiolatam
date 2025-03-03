import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NavbarAdmin from "../../components/NavbarAdmin";
import Footer from "../../components/Footer";

const EditarProducto = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem("token") || sessionStorage.getItem("token");

  const [producto, setProducto] = useState({
    nombre: "",
    descripcion: "",
    talla: "",
    color: "",
    precio: "",
    cantidad: "",
    descuento: "",
    imagen: "",
    activo: true,
    id_categoria: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducto = async () => {
      try {
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
  }, [id, token]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProducto({
      ...producto,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!producto.nombre.trim()) {
      setError("El nombre del producto es obligatorio.");
      return;
    }

    try {
      const response = await fetch(`https://api-fake-sport.onrender.com/api/privado/productos/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(producto),
      });

      if (!response.ok) {
        throw new Error("Error al actualizar el producto");
      }

      alert("Producto actualizado exitosamente");
      navigate("/verProductos");
    } catch (error) {
      setError(error.message);
    }
  };

  if (loading) return <p>Cargando...</p>;
  if (error) return <p className="alert alert-danger">{error}</p>;

  return (
    <div>
      <NavbarAdmin />
      <div className="container mt-3 text-center">
        <h2 className="pt-5">Editar Producto</h2>
        <div className="row">
          <form onSubmit={handleSubmit}>
            {Object.keys(producto).map((key) => (
              key !== "activo" ? (
                <div className="offset-4 col-sm-4 mt-2" key={key}>
                  <label htmlFor={key} className="form-label fw-bold">
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </label>
                  <input
                    type={key === "precio" || key === "cantidad" || key === "descuento" || key === "id_categoria" ? "number" : "text"}
                    className="form-control"
                    id={key}
                    name={key}
                    value={producto[key] || ""}
                    onChange={handleChange}
                    required={key === "nombre"}
                  />
                </div>
              ) : (
                <div className="offset-4 col-sm-4 mt-2" key={key}>
                  <label className="form-check-label">Activo</label>
                  <input
                    type="checkbox"
                    className="form-check-input ms-2"
                    id={key}
                    name={key}
                    checked={producto[key]}
                    onChange={handleChange}
                  />
                </div>
              )
            ))}
            {error && <div className="text-danger mt-2">{error}</div>}
            <p className="text-center">
              <button type="submit" className="mt-3 btn btn-success mx-5 px-5">
                Guardar cambios
              </button>
              <button type="button" className="mt-3 btn btn-secondary px-5" onClick={() => navigate("/verProductos")}>
                Cancelar
              </button>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EditarProducto;

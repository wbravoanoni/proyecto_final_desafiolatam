import React, { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
} from "@tanstack/react-table";

const TablaProductos = () => {
   
  const navigate = useNavigate();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pageIndex, setPageIndex] = useState(0);
  const pageSize = 3;
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchProductos = async () => {
      setLoading(true);
      setError(null);

      const token = localStorage.getItem("token") || sessionStorage.getItem("token");

      if (!token) {
        setError("No tienes permiso para acceder a esta información. Inicia sesión.");
        setLoading(false);
        return;
      }

      try {
        console.log(`Cargando página ${pageIndex + 1}...`);
        const response = await fetch(
          `https://api-fake-sport.onrender.com/api/privado/productos?page=${pageIndex + 1}&limit=${pageSize}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Error al obtener los datos.");
        }

        const data = await response.json();
        console.log("Datos recibidos:", data);

        if (data.productos && Array.isArray(data.productos)) {
          setProductos(data.productos);
        } else {
          console.error("Error: La API no devolvió una lista de productos válida.");
          setProductos([]);
        }

        setTotalPages(data.totalPaginas);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, [pageIndex]);

const handleEdit = (id) => {
    navigate(`/editar-producto/${id}`);
};

  const columns = [
    { accessorKey: "id", header: "ID" },
    { accessorKey: "id_categoria", header: "id_categoria" },
    { accessorKey: "nombre", header: "nombre" },
    { accessorKey: "precio", header: "precio" },
    { accessorKey: "cantidad", header: "cantidad" },
    { accessorKey: "descuento", header: "descuento" },
    {
      accessorKey: "activo",
      header: "Estado",
      cell: ({ row }) => (
        <button
          className={`btn ${row.original.activo ? "btn-success" : "btn-secondary"}`}
          onClick={() => toggleEstado(row.original.id)}
        >
          {row.original.activo ? "Activo" : "Inactivo"}
        </button>
      ),
    },
    {
        accessorKey: "editar",
        header: "Editar",
        cell: ({ row }) => (
          <button
            className="btn btn-warning"
            onClick={() => handleEdit(row.original.id)}
          >
            Editar
          </button>
        ),
      },
  ];

  const toggleEstado = async (id) => {
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");
    if (!token) {
      setError("No tienes permiso para realizar esta acción.");
      return;
    }

    try {
      const response = await fetch(`https://api-fake-sport.onrender.com/api/privado/productos/${id}/toggle`, {
        method: "PUT",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Error al cambiar el estado del producto");
      }
      
      setProductos((prevProductos) =>
        prevProductos.map((producto) =>
          producto.id === id ? { ...producto, activo: !producto.activo } : producto
        )
      );
    } catch (error) {
      setError(error.message);
    }
  };

  const data = useMemo(() => productos, [productos]);

  console.log("🔹 Datos pasados a react-table:", data);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    manualPagination: true,
    pageCount: totalPages,
    state: { pagination: { pageIndex, pageSize } },
  });

  return (
    <div className="container mt-4">
      <h3>Lista de Productos</h3>

      {loading && <p>Cargando productos...</p>}
      {error && <p className="alert alert-danger">{error}</p>}

      {!loading && !error && data.length > 0 && (
        <>
          <table className="table table-striped">
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th key={header.id}>
                      {flexRender(header.column.columnDef.header, header.getContext())}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          <div className="d-flex justify-content-between">
            <button
              className="btn btn-primary"
              onClick={() => setPageIndex((prev) => Math.max(prev - 1, 0))}
              disabled={pageIndex === 0}
            >
              Anterior
            </button>
            <span>Página {pageIndex + 1} de {totalPages}</span>
            <button
              className="btn btn-primary"
              onClick={() => setPageIndex((prev) => (prev + 1 < totalPages ? prev + 1 : prev))}
              disabled={pageIndex + 1 >= totalPages}
            >
              Siguiente
            </button>
          </div>
        </>
      )}

      {!loading && !error && data.length === 0 && (
        <p className="alert alert-warning">No hay productos disponibles.</p>
      )}
    </div>
  );
};

export default TablaProductos;

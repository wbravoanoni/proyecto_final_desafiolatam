import React, { useEffect, useState, useMemo } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
} from "@tanstack/react-table";

const columns = [
  { accessorKey: "id", header: "ID" },
  { accessorKey: "id_categoria", header: "id_categoria" },
  { accessorKey: "nombre", header: "nombre" },
  { accessorKey: "precio", header: "precio" },
  { accessorKey: "cantidad", header: "cantidad" },
  { accessorKey: "descuento", header: "descuento" },
  { accessorKey: "activo", header: "Estado" },
];

const TablaProductos = () => {
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pageIndex, setPageIndex] = useState(0);
  const pageSize = 3;
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchCategorias = async () => {
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
          `https://api-fake-sport.onrender.com/api/productos?page=${pageIndex + 1}&limit=${pageSize}`,
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

        if (data.categorias && Array.isArray(data.categorias)) {
          setCategorias(data.categorias);
        } else {
          console.error("Error: La API no devolvió una lista de categorías válida.");
          setCategorias([]);
        }

        setTotalPages(data.totalPaginas);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCategorias();
  }, [pageIndex]);

  const data = useMemo(() => categorias, [categorias]);

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
      <h3>Lista de Categorías</h3>

      {loading && <p>Cargando categorías...</p>}
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

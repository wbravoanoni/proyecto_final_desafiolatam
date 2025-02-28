import React, { useEffect, useState, useMemo} from "react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
} from "@tanstack/react-table";

const columns = [
  { accessorKey: "id", header: "ID" },
  { accessorKey: "nombre", header: "Nombre" },
  { accessorKey: "correo", header: "Correo" },
  { accessorKey: "tipo", header: "Tipo" },
];

const TablaUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pageIndex, setPageIndex] = useState(0);
  const pageSize = 3; 
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchUsuarios = async () => {
      setLoading(true);
      setError(null);

      const token = localStorage.getItem("token") || sessionStorage.getItem("token");

      if (!token) {
        setError("No tienes permiso para acceder a esta información. Inicia sesión.");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `https://api-fake-sport.onrender.com/api/usuarios?page=${pageIndex + 1}&limit=${pageSize}`, 
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`
            },
          }
        );

        if (!response.ok) {
          throw new Error("Error al obtener los datos. Verifica tu autenticación.");
        }

        const data = await response.json();
        setUsuarios(data.usuarios); 
        setTotalPages(data.totalPaginas);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsuarios();
  }, [pageIndex]); 

  const data = useMemo(() => usuarios, [usuarios]);

  const table = useReactTable({
    data: usuarios,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: { pagination: { pageIndex, pageSize } },
  });

  return (
    <div className="container mt-4">
      <h3>Lista de Usuarios</h3>

      {loading && <p>Cargando usuarios...</p>}
      {error && <p className="alert alert-danger">{error}</p>}

      {!loading && !error && (
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
    </div>
  );
};

export default TablaUsuarios;

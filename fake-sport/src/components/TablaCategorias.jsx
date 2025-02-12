import React from "react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
} from "@tanstack/react-table";

import data from '../assets/info/categorias'

const columns = [
  { accessorKey: "id", header: "ID" },
  { accessorKey: "nombre", header: "Nombre" },
  { accessorKey: "fcreacion", header: "Creación" },
  { accessorKey: "estado", header: "Estado" },
];

const TablaCategorias = () => {
  const [pageIndex, setPageIndex] = React.useState(0);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      pagination: { pageIndex, pageSize: 3 }, 
    },
    onPaginationChange: (updater) => {
      const newState = typeof updater === "function" ? updater({ pageIndex }) : updater;
      setPageIndex(newState.pageIndex);
    },
  });

  return (
    <div className="container mt-4">
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
        <button className="btn btn-primary" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
          Anterior
        </button>
        <button className="btn btn-primary" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default TablaCategorias;

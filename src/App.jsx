import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaPrincipal from './pages/PaginaPrincipal';
import Pagina404 from './pages/Pagina404';
import CategoriasProductos from './pages/CategoriasProductos';
import Ingresar from './pages/Ingresar';
import Dashboard from './pages/Dashboard';
import VerUsuarios from './pages/usuarios/VerUsuarios';
import VerCategorias from './pages/categorias/VerCategorias';
import VerProductos from './pages/productos/VerProductos';
import FormularioUsuarios from './pages/usuarios/FormularioUsuarios';
import FormularioCategorias from './pages/categorias/FormularioCategorias';
import FormularioProductos from './pages/productos/FormularioProductos';
import DetalleProducto from './pages/DetalleProducto';
import EditarProducto from './pages/productos/EditarProducto';
import FormularioComprador from './pages/usuarios/FormularioComprador';



import CarritoProvider from "../src/assets/context/CarritoContext";
import Cart from '../src/pages/Cart'


import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CarritoProvider>
      <Routes>
        <Route path="/" element={<PaginaPrincipal />} />
        <Route path="/categoria/:categoriaId" element={<CategoriasProductos />} />
        <Route path="/ingresar" element={<Ingresar />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/verUsuarios" element={<VerUsuarios />} />
        <Route path="/Usuarios" element={<FormularioUsuarios />} />
        <Route path="/verCategorias" element={<VerCategorias />} />
        <Route path="/Categorias" element={<FormularioCategorias />} />
        <Route path="/verProductos" element={<VerProductos />} />
        <Route path="/Productos" element={<FormularioProductos />} />
        <Route path="/productos/:productoid" element={<DetalleProducto />} />¿
        <Route path="/editar-producto/:id" element={<EditarProducto />} />
        <Route path='/cart' element={<Cart />} />
        <Route path="/Comprador" element={<FormularioComprador />} />
        <Route path="*" element={<Pagina404 />} />
      </Routes>
    </CarritoProvider>

    </>
  )
}

export default App

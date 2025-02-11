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

import "bootstrap-icons/font/bootstrap-icons.css";



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<PaginaPrincipal />} />
        <Route path="/categoria/:categoriaId" element={<CategoriasProductos />} />
        <Route path="/ingresar" element={<Ingresar />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/verUsuarios" element={<VerUsuarios />} />
        <Route path="*" element={<Pagina404 />} />
      </Routes>
    </>
  )
}

export default App

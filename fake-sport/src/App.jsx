import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaPrincipal from './pages/PaginaPrincipal';
import Pagina404 from './pages/Pagina404';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Routes>
        <Route path="/" element={<PaginaPrincipal />} />
        <Route path="*" element={<Pagina404 />} />
      </Routes>

     
    </>
  )
}

export default App

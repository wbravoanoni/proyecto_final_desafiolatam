import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Categorias from './components/Categorias';
import ProductosNuevos from './components/ProductosNuevos';
import Footer from './components/Footer';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Navbar />
      <div>
        <div className="container-fluid">
          <Carousel />
          <Categorias/>
          <ProductosNuevos/>
          <Footer/>
        </div>
      </div>
    </div>
    </>
  )
}

export default App

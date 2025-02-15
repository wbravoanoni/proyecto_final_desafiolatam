import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter } from "react-router-dom";

import CarritoProvider from "../src/assets/context/CarritoContext";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CarritoProvider> 
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CarritoProvider>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'  
import './App.css'                              
import App from './App.jsx'
import { ProveedorCarrito } from './context/ContextoCard';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProveedorCarrito>
    <App />
    </ProveedorCarrito>
  </StrictMode>,
)

import CatalogoTemplate from "./components/templates/CatalogoTemplate"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Catalogo from "./pages/CatalagoPag"
import Inicio from "./pages/InicioPage"
import DetalleProducto from "./pages/ProductoDetallePag"
import LoginPage from "./pages/LoginPage"
import CarritoCompra from "./pages/CarritoCompra"



function App() {
  return (
    <section>
      <BrowserRouter>
      
      <Routes>
      
        <Route path="/" element={<Inicio/>} />
        <Route path="/catalogo" element = {<Catalogo/>}/>
        <Route path="/catalogo/:codigo" element={<DetalleProducto />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/carrito" element={<CarritoCompra />} />
      </Routes>
    </BrowserRouter>
    </section>
  )
}

export default App
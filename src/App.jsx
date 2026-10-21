import CatalogoTemplate from "./components/templates/CatalogoTemplate"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Catalogo from "./pages/CatalagoPag"
import Inicio from "./pages/InicioPage"
import DetalleProducto from "./pages/ProductoDetallePag"
import LoginPage from "./pages/LoginPage"
import { InventarioProvider } from "./data/CopiaInventario"
import ManejoStockPage from "./pages/ManejoStockPage"
import InventarioBajoPage from "./pages/InventarioBajoPage"
import AdministradorPage from "./pages/AdministradorPage"
import CarritoPage from "./pages/carritoPage"

function App() {
  return (
    <section>
      <BrowserRouter>
      <InventarioProvider>
      <Routes>
      
        <Route path="/" element={<Inicio/>} />
        <Route path="/catalogo" element = {<Catalogo/>}/>
        <Route path="/catalogo/:codigo" element={<DetalleProducto />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<ManejoStockPage />} />
        <Route path="/admin2" element={<InventarioBajoPage />} />
        <Route path="/administrador" element={<AdministradorPage/>} />
        <Route path="/Carrito" element={<CarritoPage/>} />

      </Routes>
      </InventarioProvider>
    </BrowserRouter>
    </section>
  )
}

export default App
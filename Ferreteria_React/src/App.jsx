import CatalogoTemplate from "./components/templates/CatalogoTemplate"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Catalogo from "./pages/CatalagoPag"
import Inicio from "./pages/InicioPage"
import DetalleProducto from "./pages/ProductoDetallePag"
function App() {
  return (
    <section>
      <BrowserRouter>
      
      <Routes>
      
        <Route path="/" element={<Inicio/>} />
        <Route path="/catalogo" element = {<Catalogo/>}/>
        <Route path="/catalogo/:codigo" element={<DetalleProducto />} />
      </Routes>
    </BrowserRouter>
    </section>
  )
}

export default App
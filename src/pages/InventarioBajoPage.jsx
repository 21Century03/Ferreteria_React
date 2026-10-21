import { useInventario } from "./../data/CopiaInventario"
import { obtenerBajoStock } from "../Service/Funciones"
import Plantilla from "../components/templates/PlantillaPublica"
import { NavLink } from "react-router-dom";
import "./ManejoStockPage.css"

function StockBajoPage() {
  const inventario = useInventario()
  const lista = obtenerBajoStock(inventario.productos)

  return (
    <Plantilla>
    <main>

      <h1>Productos con bajo stock</h1>
      {lista.length === 0 ? (
        <p>Todo en orden.</p>
      ) : (
        <ul className = "listaItems">
          {lista.map((producto) => (
            <li key={producto["Código"]}>
              {producto["Nombre del producto"]}: quedan {producto["Stock"]} (mínimo {producto["Stock mínimo"]})
            </li>
          ))}
        </ul>

      )}
        <nav>
          <NavLink to = "/admin" className = "botonBajo"> restablecer  </NavLink>
        </nav>

    </main></Plantilla>

  )
}

export default StockBajoPage
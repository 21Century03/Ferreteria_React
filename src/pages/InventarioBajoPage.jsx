import { useInventario } from "../data/CopiaInventario"
import { obtenerBajoStock } from "../Service/Funciones"
import Plantilla from "../components/templates/PlantillaPublica"
import { NavLink } from "react-router-dom";
import "../Styles/ManejoStockPage.css"

function StockBajoPage() {
  const inventario = useInventario()
  const lista = obtenerBajoStock(inventario.productos)

  return (
    <Plantilla>
    <main>

      <h1 className="text-marca mb-4">Productos con bajo stock</h1>
      {lista.length === 0 ? (
        <p className="alert alert-success">Todo en orden.</p>
      ) : (
        <ul className="list-group">
          {lista.map((producto) => (
            <li
              key={producto["Código"]}
              className="list-group-item bg-dark text-white d-flex flex-wrap justify-content-between align-items-center gap-2"
            >
              <span>{producto["Nombre del producto"]}</span>
              <span className="badge rounded-pill text-bg-danger">
                Quedan {producto["Stock"]} (mínimo {producto["Stock mínimo"]})
              </span>
            </li>
          ))}
        </ul>
      )}

      <section className="d-flex flex-wrap gap-3 mt-4">
        <NavLink to="/admin" className="btn btn-marca fw-bold px-4 py-2">
          Administrar stock
        </NavLink>
      </section>

    </main></Plantilla>

  )
}

export default StockBajoPage
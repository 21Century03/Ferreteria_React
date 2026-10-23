import TablaAdmin from "../components/organisms/TablaAdmin"
import ButtonIndexForm from "../components/atoms/Button"
import { useInventario } from "../data/CopiaInventario"
import Plantilla from "../components/templates/PlantillaPublica"
import { NavLink } from "react-router-dom";
import "../Styles/ManejoStockPage.css"

function AdminPage() {
  const inventario = useInventario()

  const manejarReinicio = () => {
    if (window.confirm("¿Restablecer el stock original?")) {
      inventario.reiniciar()
    }
  }

  return (
    <Plantilla>
    <main>
      <h1 className="text-marca mb-4">Administración de inventario</h1>
      <TablaAdmin
        productos={inventario.productos}
        onGuardar={inventario.actualizarProducto}
      />
      <section className="d-flex flex-wrap gap-3 mt-4">
        <ButtonIndexForm onClick={manejarReinicio} estaCorrecto={false}>
          Restablecer stock original
        </ButtonIndexForm>
        <NavLink to="/admin2" className="btn btn-marca fw-bold px-4 py-2">
          Ir a revisar stock
        </NavLink>
      </section>
    </main>
    </Plantilla>
  )
}

export default AdminPage
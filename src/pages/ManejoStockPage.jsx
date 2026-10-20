import TablaAdmin from "../components/organisms/TablaAdmin/TablaAdmin"
import ButtonIndexForm from "../components/atoms/Button/Button"
import { useInventario } from "../data/CopiaInventario"
import Plantilla from "../components/templates/PlantillaPublica"
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
      <h1>Administración de inventario</h1>
      <TablaAdmin
        productos={inventario.productos}
        onGuardar={inventario.actualizarProducto}
      />
      <ButtonIndexForm onClick={manejarReinicio} estaCorrecto={false}>
        Restablecer stock original
      </ButtonIndexForm>
    </main>
    </Plantilla>
  )
}

export default AdminPage
import { useNavigate } from "react-router-dom"
import Plantilla from "../components/templates/PlantillaPublica"
import PanelUsuario from "../components/organisms/PanelUsuario"
import { useUsuario } from "../data/UsuarioContext"
import { useInventario } from "../data/CopiaInventario"
import { useUsuariosAdmin, useEdicionPerfil } from "../Service/HooksUsuarios"

function UsuarioPage() {
  const sesion = useUsuario()
  const inventario = useInventario()
  const navigate = useNavigate()
  const admin = useUsuariosAdmin(sesion.usuario)
  const edicion = useEdicionPerfil(sesion.usuario, sesion.actualizarUsuario)

  const salir = () => {
    sesion.cerrarSesion()
    navigate("/login")
  }

  return (
    <Plantilla>
      <PanelUsuario
        usuario={sesion.usuario}
        vistos={sesion.vistos}
        compras={sesion.compras}
        productos={inventario.productos}
        cantidadCarrito={inventario.carrito.length}
        usuarios={admin.usuarios}
        mensajeUsuarios={admin.mensaje}
        edicion={edicion}
        
        onEliminarUsuario={admin.eliminar}
        onCerrarSesion={salir}
      />
    </Plantilla>
  )
}

export default UsuarioPage
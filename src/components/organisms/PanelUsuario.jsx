import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import ButtonIndexForm from "../atoms/Button"
import PerfilUsuario from "./PerfilUsuario"
import HistorialVistos from "./HistorialVistos"
import MisCompras from "./MisCompras"
import CarritoPanel from "./CarritoPanel"
import { useUsuario } from "../../data/UsuarioContext"
import { useInventario } from "../../data/CopiaInventario"
import { filtrarPorCorreo } from "../../Service/FuncionesUsuario"
import "../../Styles/PanelUsuario.css"

function PanelUsuario() {
  const [seccion, setSeccion] = useState("perfil")
  const sesion = useUsuario()
  const inventario = useInventario()
  const navigate = useNavigate()

  if (!sesion.usuario) {
    return (
      <section className="panel-usuario">
        <h2>Debes iniciar sesión para ver tu cuenta</h2>
        <Link to="/login" className="btn btn-marca fw-bold">Ir al login</Link>
      </section>
    )
  }

  const vistosUsuario = filtrarPorCorreo(sesion.vistos, sesion.usuario.correo)
  const comprasUsuario = filtrarPorCorreo(sesion.compras, sesion.usuario.correo)

  const manejarCerrarSesion = () => {
    sesion.cerrarSesion()
    navigate("/login")
  }

  const claseBoton = (nombre) => {
    if (seccion === nombre) {
      return "btn-marca"
    }
    return "btn-outline-marca"
  }

  return (
    <section className="panel-usuario">
      <h1 className="text-marca mb-3">Hola, {sesion.usuario.nombre}</h1>

      <section className="d-flex flex-wrap gap-2 mb-4">
        <ButtonIndexForm className={claseBoton("perfil")} onClick={() => setSeccion("perfil")}>
          Mi perfil
        </ButtonIndexForm>
        <ButtonIndexForm className={claseBoton("vistos")} onClick={() => setSeccion("vistos")}>
          Artículos vistos ({vistosUsuario.length})
        </ButtonIndexForm>
        <ButtonIndexForm className={claseBoton("compras")} onClick={() => setSeccion("compras")}>
          Mis compras ({comprasUsuario.length})
        </ButtonIndexForm>
        <ButtonIndexForm className={claseBoton("carrito")} onClick={() => setSeccion("carrito")}>
          Carrito ({inventario.carrito.length})
        </ButtonIndexForm>
        <ButtonIndexForm className="incorrecto" onClick={manejarCerrarSesion}>
          Cerrar sesión
        </ButtonIndexForm>
      </section>

      <section className="panel-marca p-4 rounded-3">
        {seccion === "perfil" && <PerfilUsuario usuario={sesion.usuario} />}
        {seccion === "vistos" && (
          <HistorialVistos vistos={vistosUsuario} productos={inventario.productos} />
        )}
        {seccion === "compras" && <MisCompras compras={comprasUsuario} />}
        {seccion === "carrito" && <CarritoPanel />}
      </section>
    </section>
  )
}

export default PanelUsuario
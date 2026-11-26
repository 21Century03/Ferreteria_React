import { useState } from "react"
import { Link } from "react-router-dom"
import BarraPestanas from "../molecules/BarraPestanas"
import PerfilUsuario from "./PerfilUsuario"
import HistorialVistos from "./HistorialVistos"
import MisCompras from "./MisCompras"
import CarritoPanel from "./CarritoPanel"
import TablaUsuarios from "./TablaUsuarios"
import { esAdmin, pestanasPara } from "../../Service/ServicioUsuarios"
import { filtrarPorCorreo } from "../../Service/FuncionesUsuario"
import "../../Styles/PanelUsuario.css"

function PanelUsuario(props) {
  const [seccion, setSeccion] = useState("perfil")

  if (!props.usuario) {
    return (
      <section className="panel-usuario">
        <h2>Debes iniciar sesión para ver tu cuenta</h2>
        <Link to="/login" className="btn btn-marca fw-bold">Ir al login</Link>
      </section>
    )
  }

  const admin = esAdmin(props.usuario)
  const vistos = filtrarPorCorreo(props.vistos, props.usuario.email)
  const compras = filtrarPorCorreo(props.compras, props.usuario.email)
  const edicion = props.edicion

  const pestanas = pestanasPara(props.usuario, {
    usuarios: props.usuarios.length,
    vistos: vistos.length,
    compras: compras.length,
    carrito: props.cantidadCarrito,
  })

  return (
    <section className="panel-usuario">
      <h1 className="text-marca mb-3">Hola, {props.usuario.nombre}</h1>

      <BarraPestanas
        pestanas={pestanas}
        activa={seccion}
        onSeleccionar={setSeccion}
        onCerrarSesion={props.onCerrarSesion}
      />

      <section className="panel-marca p-4 rounded-3">
        {seccion === "perfil" && (
          <PerfilUsuario
            usuario={props.usuario}
            puedeEditar={!admin}
            editando={edicion.editando}
            borrador={edicion.borrador}
            errores={edicion.errores}
            mensaje={edicion.mensaje}
            exito={edicion.exito}
            onEditar={edicion.iniciar}
            onCancelar={edicion.cancelar}
            onCambiar={edicion.cambiar}
            onGuardar={edicion.guardar}
          />
        )}


        {admin && seccion === "usuarios" && (
          <TablaUsuarios
            usuarios={props.usuarios}
            usuarioActual={props.usuario}
            mensaje={props.mensajeUsuarios}
            onEliminar={props.onEliminarUsuario}
          />
        )}

        {!admin && seccion === "vistos" && (
          <HistorialVistos vistos={vistos} productos={props.productos} />
        )}
        {!admin && seccion === "compras" && <MisCompras compras={compras} />}
        {!admin && seccion === "carrito" && <CarritoPanel />}
      </section>
    </section>
  )
}

export default PanelUsuario
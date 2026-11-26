import FilaUsuario from "../molecules/FilaUsuario"
import { puedeEliminar } from "../../Service/ServicioUsuarios"

function TablaUsuarios(props) {
  return (
    <section>
      <h2>Usuarios</h2>
      {props.mensaje && <p className="alert alert-warning">{props.mensaje}</p>}
      {props.usuarios.length === 0 ? (
        <p>No hay usuarios para mostrar.</p>
      ) : (
        <section className="table-responsive">
          <table className="table table-dark table-striped table-hover align-middle">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Teléfono</th>
                <th>Rol</th>
                <th>Estado</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              {props.usuarios.map((u) => (
                <FilaUsuario
                  key={u.email}
                  nombre={u.nombre}
                  email={u.email}
                  telefono={u.telefono}
                  rol={u.rol}
                  activo={u.activo}
                  puedeEliminar={puedeEliminar(props.usuarioActual, u)}
                  onEliminar={props.onEliminar}
                />
              ))}
            </tbody>
          </table>
        </section>
      )}
    </section>
  )
}

export default TablaUsuarios
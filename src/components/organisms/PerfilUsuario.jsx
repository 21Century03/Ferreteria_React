import DatoPerfil from "../molecules/DatoPerfil"
import DatoPerfilEditable from "../molecules/DatoPerfilEditable"
import ButtonIndexForm from "../atoms/Button"

function PerfilUsuario(props) {
  return (
    <section>
      <h2>Mi perfil</h2>
      <section className="card">
        <ul className="list-group list-group-flush">
          {props.editando ? (
            <>
              <DatoPerfilEditable
                id="perfil-nombre"
                titulo="Nombre"
                valor={props.borrador.nombre}
                error={props.errores.nombre}
                onChange={(e) => props.onCambiar("nombre", e.target.value)}
              />
              <DatoPerfilEditable
                id="perfil-telefono"
                titulo="Teléfono"
                valor={props.borrador.telefono}
                error={props.errores.telefono}
                onChange={(e) => props.onCambiar("telefono", e.target.value)}
              />
            </>
          ) : (
            <>
              <DatoPerfil titulo="Nombre" valor={props.usuario.nombre} />
              <DatoPerfil titulo="Teléfono" valor={props.usuario.telefono} />
            </>
          )}
          <DatoPerfil titulo="Correo" valor={props.usuario.email} />
        </ul>
      </section>

      {props.mensaje && (
        <p className={"mt-3 " + (props.exito ? "text-success" : "text-danger")}>{props.mensaje}</p>
      )}

      {props.puedeEditar && (
        <section className="d-flex gap-2 mt-3">
          {props.editando ? (
            <>
              <ButtonIndexForm onClick={props.onGuardar}>Guardar</ButtonIndexForm>
              <ButtonIndexForm className="btn-outline-marca" onClick={props.onCancelar}>
                Cancelar
              </ButtonIndexForm>
            </>
          ) : (
            <ButtonIndexForm onClick={props.onEditar}>Editar</ButtonIndexForm>
          )}
        </section>
      )}
    </section>
  )
}

export default PerfilUsuario
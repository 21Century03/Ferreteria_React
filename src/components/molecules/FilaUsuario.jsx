import ButtonIndexForm from "../atoms/Button"

function FilaUsuario(props) {
  return (
    <tr>
      <td>{props.nombre}</td>
      <td>{props.email}</td>
      <td>{props.telefono || "—"}</td>
      <td>
        <span className={"badge " + (props.rol === "admin" ? "text-bg-warning" : "text-bg-secondary")}>
          {props.rol}
        </span>
      </td>
      <td>{props.activo ? "Activo" : "Inactivo"}</td>
      <td>
        {props.puedeEliminar && (
          <ButtonIndexForm className="incorrecto" onClick={() => props.onEliminar(props.email)}>
            Eliminar
          </ButtonIndexForm>
        )}
      </td>
    </tr>
  )
}

export default FilaUsuario
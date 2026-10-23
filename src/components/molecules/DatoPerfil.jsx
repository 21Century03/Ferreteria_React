import Etiqueta from "../atoms/etiqueta"

function DatoPerfil(props) {
  return (
    <li className="list-group-item d-flex justify-content-between gap-3">
      <strong>{props.titulo}</strong>
      <Etiqueta texto={props.valor} />
    </li>
  )
}

export default DatoPerfil

import Etiqueta from "../../atoms/Etiqueta/etiqueta"
import "./DatoPerfil.css"

function DatoPerfil(props) {
  return (
    <li className="list-group-item dato-perfil">
      <strong>{props.titulo}</strong>
      <Etiqueta texto={props.valor} />
    </li>
  )
}

export default DatoPerfil

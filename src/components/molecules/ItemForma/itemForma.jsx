import Etiqueta from "../../atoms/Etiqueta/etiqueta"
import { Link } from "react-router-dom"
import "./itemForma.css"

function Item(props) {
  return (
    <section className="etiqueta">
      {props.imagen && (
        <img src={props.imagen} alt={props.nombre} className="etiqueta__img" />
      )}
      <p><Etiqueta texto={props.nombre} /></p>
      <p>Precio: $<Etiqueta texto={props.precio} /></p>
      <p>Cantidad disponible: <Etiqueta texto={props.stock} /></p>
      <Link to={`/catalogo/${props.codigo}`} className="btn-ver-mas">
        Ver detalle
      </Link>
    </section>
  )
}

export default Item

import Etiqueta from "../atoms/etiqueta"
import { Link } from "react-router-dom"
import "../../Styles/itemForma.css"

function Item(props) {
  return (
    <section className="etiqueta card h-100 p-3 shadow-sm justify-content-between">
      {props.imagen && (
        <img src={props.imagen} alt={props.nombre} className="etiqueta__img rounded mb-3" />
      )}
      <p className="fw-bold mb-2"><Etiqueta texto={props.nombre} /></p>
      <p className="mb-2">Precio: $<Etiqueta texto={props.precio} /></p>
      <p className="mb-2">Cantidad disponible: <Etiqueta texto={props.stock} /></p>
      <Link to={`/catalogo/${props.codigo}`} className="btn btn-marca fw-bold d-block mt-2 py-2">
        Ver detalle
      </Link>
    </section>
  )
}

export default Item

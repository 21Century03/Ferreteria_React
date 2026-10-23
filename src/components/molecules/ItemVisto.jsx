import Etiqueta from "../atoms/etiqueta"
import { Link } from "react-router-dom"
import "../../Styles/ItemVisto.css"

function ItemVisto(props) {
  return (
    <section className="card h-100 item-visto">
      {props.imagen && (
        <img src={props.imagen} alt={props.nombre} className="card-img-top item-visto__img" />
      )}
      <section className="card-body">
        <p className="fw-bold"><Etiqueta texto={props.nombre} /></p>
        <p className="mb-2">Precio: $<Etiqueta texto={props.precio} /></p>
        <Link to={`/catalogo/${props.codigo}`} className="btn btn-marca fw-bold d-block mt-2 py-2">
          Ver detalle
        </Link>
      </section>
    </section>
  )
}

export default ItemVisto

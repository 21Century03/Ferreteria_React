import Etiqueta from "../../atoms/Etiqueta/etiqueta"
import { Link } from "react-router-dom"
import "./ItemVisto.css"

function ItemVisto(props) {
  return (
    <section className="card h-100 item-visto">
      {props.imagen && (
        <img src={props.imagen} alt={props.nombre} className="card-img-top item-visto__img" />
      )}
      <section className="card-body">
        <p className="fw-bold"><Etiqueta texto={props.nombre} /></p>
        <p>Precio: $<Etiqueta texto={props.precio} /></p>
        <Link to={`/catalogo/${props.codigo}`} className="btn-ver-mas">
          Ver detalle
        </Link>
      </section>
    </section>
  )
}

export default ItemVisto

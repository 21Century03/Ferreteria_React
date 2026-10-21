import Etiqueta from "../../atoms/Etiqueta/etiqueta"
import { Link } from "react-router-dom"
import "./ItemVisto.css"

function ItemVisto(props) {
  return (
    <section className="item-visto">
      {props.imagen && (
        <img src={props.imagen} alt={props.nombre} className="item-visto__img" />
      )}
      <section className="item-visto__cuerpo">
        <p className="item-visto__nombre"><Etiqueta texto={props.nombre} /></p>
        <p>Precio: $<Etiqueta texto={props.precio} /></p>
        <Link to={`/catalogo/${props.codigo}`} className="btn-ver-mas">
          Ver detalle
        </Link>
      </section>
    </section>
  )
}

export default ItemVisto

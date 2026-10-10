import Etiqueta from "../atoms/etiqueta"
import { Link } from "react-router-dom"
function Item(props){
  return  (<>
  <section className="etiqueta">
<p> <Etiqueta texto = {props.nombre} /></p>
<p> Precio:  $<Etiqueta texto = {props.precio} /></p>
<p> Cantidad disponible: <Etiqueta texto = {props.stock} /></p>
<Link to={`/catalogo/${props.codigo}`} className="btn-ver-mas">
        Ver detalle
</Link>
</section>

</>
  )
}

export default Item
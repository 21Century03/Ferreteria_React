import ItemVisto from "../../molecules/ItemVisto/ItemVisto"
import { ImgProductos } from "../../../data/ImgProductos"
import { buscarProducto } from "../../../Service/FuncionesUsuario"
import "./HistorialVistos.css"

function HistorialVistos(props) {
  if (props.vistos.length === 0) {
    return (
      <section>
        <h2>Artículos vistos</h2>
        <p>Aún no has visto ningún artículo.</p>
      </section>
    )
  }

  return (
    <section>
      <h2>Artículos vistos</h2>
      <section className="historial__lista">
        {props.vistos.map((visto) => {
          const producto = buscarProducto(props.productos, visto.codigo)
          if (!producto) {
            return null
          }
          return (
            <section key={visto.codigo}>
              <ItemVisto
                codigo={producto["Código"]}
                nombre={producto["Nombre del producto"]}
                precio={producto["P. Venta (CLP)"]}
                imagen={ImgProductos[producto["Código"]]}
              />
            </section>
          )
        })}
      </section>
    </section>
  )
}

export default HistorialVistos
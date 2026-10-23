import ItemVisto from "../molecules/ItemVisto"
import { ImgProductos } from "../../data/ImgProductos"
import { buscarProducto } from "../../Service/FuncionesUsuario"

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
      <section className="row g-3">
        {props.vistos.map((visto) => {
          const producto = buscarProducto(props.productos, visto.codigo)
          if (!producto) {
            return null
          }
          return (
            <section key={visto.codigo} className="col-12 col-sm-6 col-md-4">
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
import Forma from "../molecules/itemForma"
import { ImgProductos } from "../../data/ImgProductos"
import "../../Styles/Catalogo.css"

function Catalogo(props) {
  let mensajeVacio = null
  if (props.productos.length === 0) {
    mensajeVacio = <p>No hay productos con esos filtros.</p>
  }

  return (
    <section className="catalogo">
      <h2 className="text-center mb-4">Catálogo de productos</h2>
      {mensajeVacio}
      <section className="tarjeta-producto">
        {props.productos.map(function (producto) {
          return (
            <section key={producto["Código"]}>
              <Forma
                codigo={producto["Código"]}
                nombre={producto["Nombre del producto"]}
                precio={producto["P. Venta (CLP)"]}
                stock={producto["Stock"]}
                imagen={ImgProductos[producto["Código"]]}
              />
            </section>
          )
        })}
      </section>
    </section>
  )
}

export default Catalogo
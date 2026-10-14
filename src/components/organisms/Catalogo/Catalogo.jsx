import Forma from "../../molecules/ItemForma/itemForma"
import { productos } from "../../../data/productos"
import { ImgProductos } from "../../../data/ImgProductos"
import "./Catalogo.css"

function Catalogo() {
  return (
    <section className="catalogo">
      <h2>Catálogo de productos</h2>
      <section className="tarjeta-producto">
        {productos.map(function (producto) {
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

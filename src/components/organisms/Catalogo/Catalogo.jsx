import Forma from "../../molecules/ItemForma/itemForma"
import { ImgProductos } from "../../../data/ImgProductos"
import "./Catalogo.css"
import { useInventario } from "../../../data/CopiaInventario"

function Catalogo() {
  const inventario = useInventario()
  return (
    <section className="catalogo">
      <h2>Catálogo de productos</h2>
      <section className="tarjeta-producto">
        {inventario.productos.map(function (producto) {
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

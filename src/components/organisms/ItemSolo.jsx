import { useParams, useNavigate } from "react-router-dom"
import { useState } from "react"
import { productos } from "../../data/productos"
import Input from "../atoms/Input"
import ButtonIndexForm from "../atoms/Button"

function ItemSolo(props){
  const { codigo } = useParams()
  const navigate = useNavigate()
  const [cantidad, setCantidad] = useState("")
  const producto = productos.find(
    (item) => String(item["Código"]) === String(codigo)
  )
  if (!producto) {
    return (
      <section>
        <h2>Producto no encontrado</h2>
        <ButtonIndexForm onClick={() => navigate("/")} estaCorrecto={true}>
          Volver al catálogo
        </ButtonIndexForm>
      </section>
    )
  }
  const manejarCambio = (e) => setCantidad(e.target.value)
  const esCorrecto = true
return (
    <section className="detalle-producto">
     
      <ButtonIndexForm onClick={() => navigate("/")} estaCorrecto={true}>
        ← Volver al catálogo
      </ButtonIndexForm>

      <h2>{producto["Nombre del producto"]}</h2>
      <p><strong>Código:</strong> {producto["Código"]}</p>
      <p><strong>Precio:</strong> ${producto["P. Venta (CLP)"]}</p>
      <p><strong>Stock disponible:</strong> {producto["Stock"]} unidades</p>

      <section className="acciones-compra">
        <Input
          id="cantidad-producto"
          type="number"
          value={cantidad}
          onChange={manejarCambio}
          placeholder="Ingresar la cantidad deseada"
        />

        <ButtonIndexForm
          onClick={() => console.log("Añadido al carrito:", producto, cantidad)}
          estaCorrecto={esCorrecto}
        >
          Agregar al Carrito
        </ButtonIndexForm>
      </section>
    </section>
  )
}

export default ItemSolo;

import { useParams, useNavigate } from "react-router-dom"
import { useState } from "react"
import { productos } from "../../../data/productos"
import { ImgProductos } from "../../../data/ImgProductos"
import Input from "../../atoms/Input/Input"
import ButtonIndexForm from "../../atoms/Button/Button"
import "./ItemSolo.css"
import SelectorDesp from "../../molecules/SelectorDesp/SelectorDesp"
import Item from "../../molecules/ItemForma/itemForma"
function ItemSolo() {
  const { codigo } = useParams()
  const navigate = useNavigate()
  const [cantidad, setCantidad] = useState("")
  const [MetodoEnvio,setMetodoEnvio] = useState("")
  const producto = productos.find(
    (item) => String(item["Código"]) === String(codigo)
  )

  if (!producto) {
    return (
      <section className="detalle-producto">
        <h2>Producto no encontrado</h2>
        <ButtonIndexForm onClick={() => navigate("/catalogo")} estaCorrecto={true}>
          Volver al catálogo
        </ButtonIndexForm>
      </section>
    )
  }

  const manejarCambio = (e) => setCantidad(e.target.value)

  return (
    <section className="detalle-producto">
      <ButtonIndexForm onClick={() => navigate("/catalogo")} estaCorrecto={true}>
        ← Volver al catálogo
      </ButtonIndexForm>

      <img
        src={ImgProductos[producto["Código"]]}
        alt={producto["Nombre del producto"]}
        className="detalle-producto__img"
      />

      <h2>{producto["Nombre del producto"]}</h2>
      <p><strong>Código:</strong> {producto["Código"]}</p>
      <p><strong>Precio:</strong> ${producto["P. Venta (CLP)"]}</p>
      <p><strong>Stock disponible:</strong> {producto["Stock"]} unidades</p>
      

      <SelectorDesp 
        etiqueta = "Seleccione metodo de envio"
        id="metodo-envio"
        label="Método de envío"
        value={MetodoEnvio}
        onChange={(e) => setMetodoEnvio(e.target.value)}/>
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
          estaCorrecto={true}
        >
          Agregar al Carrito
        </ButtonIndexForm>
      </section>

    </section>
  )
}

export default ItemSolo

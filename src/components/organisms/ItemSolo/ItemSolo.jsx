import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { ImgProductos } from "../../../data/ImgProductos"
import Input from "../../atoms/Input/Input"
import ButtonIndexForm from "../../atoms/Button/Button"
import "./ItemSolo.css"
import SelectorDesp from "../../molecules/SelectorDesp/SelectorDesp"
import Item from "../../molecules/ItemForma/itemForma"
import { useInventario } from "../../../data/CopiaInventario"
import { validarCompra } from "../../../Service/Funciones"
import { useUsuario } from "../../../data/UsuarioContext"

function ItemSolo() {
  const params = useParams()
  const navigate = useNavigate()
  const [cantidad, setCantidad] = useState("")
  const [metodoEnvio,setmetodoEnvio] = useState("")
  const inventario = useInventario()
   const [mensaje, setMensaje] = useState("")
  const sesion = useUsuario()

  const producto = inventario.productos.find(
    (item) => String(item["Código"]) === String(params.codigo)
  )

  useEffect(() => {
    if (producto) {
      sesion.registrarVisto(params.codigo)
    }
  }, [params.codigo, sesion.usuario])

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

  const manejarCambio = (e) => {setCantidad(e.target.value)
  setMensaje("")}
  const manejarCompra = () => {
  const cantidadNumero = Number(cantidad)
  const error = validarCompra(producto, cantidadNumero, metodoEnvio)
   
  if (error !== "") {
    setMensaje(error)
    return
  }
  const resultado = inventario.agregarProducto(producto["Código"], cantidadNumero, metodoEnvio)

  if (!resultado.ok) {
    setMensaje(resultado.mensaje)
    return
  }

  setCantidad("")
  setMensaje("Producto agregado al carrito")
}


  

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
        value={metodoEnvio}
        onChange={(e) => setmetodoEnvio(e.target.value)}/>
      <section className="acciones-compra">
        <Input
          id="cantidad-producto"
          type="number"
          min="1"
          step="1"
          value={cantidad}
          onChange={manejarCambio}
          placeholder="Ingresar la cantidad deseada"
        />
        <ButtonIndexForm
          onClick={manejarCompra}
          estaCorrecto={true}
        >
          Agregar al Carrito
        </ButtonIndexForm>
      </section>
    {mensaje !== "" && <p className="detalle-producto__mensaje">{mensaje}</p>}

    <ButtonIndexForm onClick={() => navigate("/carrito")} estaCorrecto={true}>
  Ver carrito
    </ButtonIndexForm>
    </section>
  )
}

export default ItemSolo

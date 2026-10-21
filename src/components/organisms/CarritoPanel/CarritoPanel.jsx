import { useState } from "react"
import { useInventario } from "../../../data/CopiaInventario"
import { useUsuario } from "../../../data/UsuarioContext"
import { ImgProductos } from "../../../data/ImgProductos"
import ButtonIndexForm from "../../atoms/Button/Button"
import ItemCarrito from "../../molecules/ItemCarrito/ItemCarrito"
import "./CarritoPanel.css"

function CarritoPanel() {
    const {
    carrito, subtotal, costoEnvio, totalConIva,
    agregarProducto, restarProducto, eliminarProducto, finalizarCompra,
  } = useInventario()
  const [mensaje, setMensaje] = useState("")
  const sesion = useUsuario()

  if (carrito.length === 0) {
    return <h2>Tu carrito está vacío</h2>
  }

  const manejarMas = (item) => {
    const resultado = agregarProducto(item.codigo, 1)
    setMensaje(resultado.mensaje)
  }

  const manejarFinalizar = () => {
    const itemsComprados = carrito
    const resultado = finalizarCompra()
    if (resultado.ok){
      sesion.agregarCompra(itemsComprados, subtotal, totalConIva)
    }
    setMensaje(resultado.mensaje)
  }

  return (
    <section calssName="carrito">
      <h2>Carrito de compras</h2>

      {carrito.map((item) => (
        <ItemCarrito
          key={item.codigo}
          nombre={item.nombre}
          precio={item.precio}
          cantidad={item.cantidad}
          envio={item.envio}
          imagen={ImgProductos[item.codigo]}
          onRestar={() => restarProducto(item.codigo)}
          onSumar={() => manejarMas(item)}
          onEliminar={() => eliminarProducto(item.codigo)}
        />
      ))}

      <section className="carrito__resumen">
        <p>Subtotal: ${subtotal}</p>
        {costoEnvio > 0 && <p>Envío a domicilio: ${costoEnvio}</p>}
        <h3>Total con IVA: ${Math.round(totalConIva)}</h3>
        {mensaje !== "" && <p className="carrito__mensaje">{mensaje}</p>}

        <ButtonIndexForm onClick={manejarFinalizar} estaCorrecto={true}>
          Finalizar compra
        </ButtonIndexForm>
      </section>
    </section>
  )
}

export default CarritoPanel
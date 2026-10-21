import { useState } from "react"
import { useInventario } from "../../../data/CopiaInventario"
import ButtonIndexForm from "../../atoms/Button/Button"

function CarritoPanel() {
    const {
    carrito, subtotal, costoEnvio, totalConIva,
    agregarProducto, restarProducto, eliminarProducto, finalizarCompra,
  } = useInventario()
  const [mensaje, setMensaje] = useState("")

  if (carrito.length === 0) {
    return <h2>Tu carrito está vacío</h2>
  }

  const manejarMas = (item) => {
    const resultado = agregarProducto(item, 1)
    setMensaje(resultado.mensaje)
  }

  const manejarFinalizar = () => {
    const resultado = finalizarCompra()
    setMensaje(resultado.mensaje)
  }

  return (
    <section>
      <h2>Carrito de compras</h2>

      {carrito.map((item) => (
        <section key={item.codigo}>
          <p>{item.nombre}</p>
          <p> Cantidad: {item.cantidad}</p>
          <p> Subtotal: ${item.precio * item.cantidad}</p>
          <p> Envío: {item.envio}</p>
          {costoEnvio > 0 && <p>Envío a domicilio: ${costoEnvio}</p>}

          <ButtonIndexForm onClick={() => restarProducto(item.codigo)} estaCorrecto={true}>
            -
          </ButtonIndexForm>
          <ButtonIndexForm onClick={() => manejarMas(item)} estaCorrecto={true}>
            +
          </ButtonIndexForm>
          <ButtonIndexForm onClick={() => eliminarProducto(item.codigo)} estaCorrecto={true}>
            Eliminar
          </ButtonIndexForm>
        </section>
      ))}

    <p>Subtotal: ${subtotal}</p>
    {costoEnvio > 0 && <p>Envío a domicilio: ${costoEnvio}</p>}
    <h3>Total con IVA: ${Math.round(totalConIva)}</h3>

      <ButtonIndexForm onClick={manejarFinalizar} estaCorrecto={true}>
        Finalizar compra
      </ButtonIndexForm>
    </section>
  )
}

export default CarritoPanel
import { useCard } from "../../../context/ContextoCard"
import ButtonIndexForm from "../../atoms/Button/Button"

function CarritoPanel() {
  const { carrito, agregarProducto, restarProducto, eliminarProducto } = useCard()

  if (carrito.length === 0) {
    return <h2>Tu carrito está vacío</h2>
  }

  return (
    <section>
      <h2>Carrito de compras</h2>

      {carrito.map((item) => (
        <div key={item.id}>
          <span>{item.nombre}</span>
          <span> Cantidad: {item.cantidad}</span>
          <span> Subtotal: ${item.precio * item.cantidad}</span>

          <ButtonIndexForm onClick={() => restarProducto(item.id)} estaCorrecto={true}>
            -
          </ButtonIndexForm>
          <ButtonIndexForm onClick={() => agregarProducto(item)} estaCorrecto={true}>
            +
          </ButtonIndexForm>
          <ButtonIndexForm onClick={() => eliminarProducto(item.id)} estaCorrecto={true}>
            Eliminar
          </ButtonIndexForm>
        </div>
      ))}
    </section>
  )
}

export default CarritoPanel
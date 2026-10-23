import Etiqueta from "../atoms/etiqueta"
import ButtonIndexForm from "../atoms/Button"
import "../../Styles/ItemCarrito.css"

function ItemCarrito(props) {
  return (
    <section className="item-carrito card flex-row overflow-hidden shadow-sm mb-3">
      <section className="item-carrito__imagen">
        {props.imagen && (
          <img src={props.imagen} alt={props.nombre} className="item-carrito__img" />
        )}
      </section>

      <section className="item-carrito__cuerpo">
        <p className="item-carrito__nombre"><Etiqueta texto={props.nombre} /></p>
        <p className="mb-1">Precio unitario: $<Etiqueta texto={props.precio} /></p>
        <p className="mb-1">Cantidad: <Etiqueta texto={props.cantidad} /></p>
        <p className="mb-1">Subtotal: $<Etiqueta texto={props.precio * props.cantidad} /></p>
        <p className="mb-1">
          Envío: {props.envio === "despacho" ? "Despacho a domicilio" : "Retiro en tienda"}
        </p>

        <section className="d-flex flex-wrap gap-2 mt-2">
          <ButtonIndexForm className="btn-oscuro btn-sm" onClick={props.onRestar}>-</ButtonIndexForm>
          <ButtonIndexForm className="btn-oscuro btn-sm" onClick={props.onSumar}>+</ButtonIndexForm>
          <ButtonIndexForm className="btn-oscuro btn-sm" onClick={props.onEliminar}>Eliminar</ButtonIndexForm>
        </section>
      </section>
    </section>
  )
}

export default ItemCarrito
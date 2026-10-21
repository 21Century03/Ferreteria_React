import Etiqueta from "../../atoms/Etiqueta/etiqueta"
import ButtonIndexForm from "../../atoms/Button/Button"
import "./ItemCarrito.css"

function ItemCarrito(props) {
  return (
    <section className="item-carrito">
      <section className="item-carrito__imagen">
        {props.imagen && (
          <img src={props.imagen} alt={props.nombre} className="item-carrito__img" />
        )}
      </section>

      <section className="item-carrito__cuerpo">
        <p className="item-carrito__nombre"><Etiqueta texto={props.nombre} /></p>
        <p>Precio unitario: $<Etiqueta texto={props.precio} /></p>
        <p>Cantidad: <Etiqueta texto={props.cantidad} /></p>
        <p>Subtotal: $<Etiqueta texto={props.precio * props.cantidad} /></p>
        <p>
          Envío: {props.envio === "despacho" ? "Despacho a domicilio" : "Retiro en tienda"}
        </p>

        <section className="item-carrito__acciones">
          <ButtonIndexForm className="btn-cantidad" onClick={props.onRestar}>-</ButtonIndexForm>
          <ButtonIndexForm className="btn-cantidad" onClick={props.onSumar}>+</ButtonIndexForm>
          <ButtonIndexForm className="btn-eliminar" onClick={props.onEliminar}>Eliminar</ButtonIndexForm>
        </section>
      </section>
    </section>
  )
}

export default ItemCarrito
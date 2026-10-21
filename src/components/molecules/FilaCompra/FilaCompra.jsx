import "./FilaCompra.css"

function FilaCompra(props) {
  return (
    <li className="fila-compra">
      <p className="fila-compra__titulo">Compra N° {props.id} - {props.fecha}</p>

      {props.items.map((item) => (
        <p key={item.codigo}>
          {item.nombre} x {item.cantidad} - ${item.precio * item.cantidad}
        </p>
      ))}

      <p>Subtotal: ${props.subtotal}</p>
      {props.envio > 0 && <p>Envío a domicilio: ${props.envio}</p>}
      <p className="fila-compra__titulo">Total con IVA: ${props.total}</p>
    </li>
  )
}

export default FilaCompra
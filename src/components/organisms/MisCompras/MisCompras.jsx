import FilaCompra from "../../molecules/FilaCompra/FilaCompra"
import "./MisCompras.css"

function MisCompras(props) {
  if (props.compras.length === 0) {
    return (
      <section>
        <h2>Mis compras</h2>
        <p>Aún no has realizado compras.</p>
      </section>
    )
  }

  return (
    <section>
      <h2>Mis compras</h2>
      <ul className="mis-compras__lista">
        {props.compras.map((compra) => (
          <FilaCompra
            key={compra.id}
            id={compra.id}
            fecha={compra.fecha}
            items={compra.items}
            subtotal={compra.subtotal}
            envio={compra.envio}
            total={compra.total}
          />
        ))}
      </ul>
    </section>
  )
}

export default MisCompras

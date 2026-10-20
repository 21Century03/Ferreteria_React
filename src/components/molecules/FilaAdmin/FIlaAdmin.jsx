import { useState } from "react"
import Input from "../../atoms/Input/Input"
import ButtonIndexForm from "../../atoms/Button/Button"

function FilaAdmin(props) {
  const [stock, setStock] = useState(String(props.stock))

  const [mensaje, setMensaje] = useState("")

  const manejarGuardar = () => {
    const stockNumero = Number(stock)


    if (stock === "" ) {
      setMensaje("Complete el stock")
      return
    }
    if (!Number.isInteger(stockNumero)) {
      setMensaje("Use números enteros")
      return
    }
    if (stockNumero < 0 ) {
      setMensaje("No se permiten negativos")
      return
    }

    setMensaje("")
    props.onGuardar(props.codigo, stockNumero)
  }

  return (
    <tr>
      <td>{props.codigo}</td>
      <td>{props.nombre}</td>
      <td>
        <Input
          id={"stock-" + props.codigo}
          type="number"
          value={stock}
          onChange={(e) => {
            setStock(e.target.value)
            setMensaje("")
          }}
        />
      </td>
      <td>
        <ButtonIndexForm onClick={manejarGuardar} estaCorrecto={true}>
          Guardar
        </ButtonIndexForm>
        {mensaje !== "" && <p>{mensaje}</p>}
      </td>
    </tr>
  )
}

export default FilaAdmin
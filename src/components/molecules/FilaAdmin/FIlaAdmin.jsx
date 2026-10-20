import { useState } from "react"
import Input from "../../atoms/Input/Input"
import ButtonIndexForm from "../../atoms/Button/Button"
import { validarStock } from "../../../Service/Funciones"

function FilaAdmin(props) {
  const [stock, setStock] = useState(String(props.stock))

  const [mensaje, setMensaje] = useState("")

  const manejarGuardar = () => {
    const error = validarStock(stock)
      if (error !== "") {
      setMensaje(error)
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
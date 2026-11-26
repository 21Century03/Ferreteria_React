import Input from "../atoms/Input"

function DatoPerfilEditable(props) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-start gap-3">
      <label htmlFor={props.id}><strong>{props.titulo}</strong></label>
      <section className="w-50">
        <Input
          id={props.id}
          type="text"
          value={props.valor}
          onChange={props.onChange}
          placeholder={props.placeholder}
          className={props.error ? "is-invalid" : ""}
        />
        {props.error && <small className="text-danger d-block mt-1">{props.error}</small>}
      </section>
    </li>
  )
}

export default DatoPerfilEditable
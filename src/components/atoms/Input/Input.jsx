import './Input.css';

const InputIndexNombre = ( props ) => {
  return (
    <input
      id={props.id}
      type={props.type}
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
      className={"input " + (props.className || "")}
    />
  )
}

export default InputIndexNombre

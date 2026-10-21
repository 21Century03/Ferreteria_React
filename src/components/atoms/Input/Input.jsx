import './Input.css';

function InputIndexNombre(props) {
  return (
    <input
      id={props.id}
      type={props.type}
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
      min={props.min}
      step={props.step}
      className={"input " + (props.className || "")}
    />
  );
}

export default InputIndexNombre;

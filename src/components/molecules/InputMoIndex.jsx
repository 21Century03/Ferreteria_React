import Input from "../atoms/Input"

const InputMoIndex = (props) => {
  return (
    <div className="mb-3">
      
      <label htmlFor={props.id} className="form-label">
        {props.label}
      </label>

    <Input
      id={props.id}
      type={props.type}
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
      className={props.className}
    />
    </div>
  );
}

export default InputMoIndex 
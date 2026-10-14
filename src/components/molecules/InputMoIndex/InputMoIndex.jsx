import Input from "../../atoms/Input/Input"
import './InputMoIndex.css';
const InputMoIndex = (props) => {
  return (
    <div>
      
      <label htmlFor={props.id}>{props.label}</label>

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
import InputIndex from "../../atoms/Input/Input";
import './InputMoIndex.css';

function InputMoIndex(prop) {
  return (
    <div className="grupo-campo">
      <label htmlFor={prop.id}>{prop.label || "Nombre"}</label>

      <InputIndex
        id={prop.id}
        type={prop.type}
        value={prop.value}
        onChange={prop.onChange}
        placeholder={prop.placeholder}
      />
    </div>
  );
}

export default InputMoIndex;
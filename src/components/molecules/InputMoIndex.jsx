import InputIndex from "../atoms/Input"

const InputMoIndex = ({ id, type, value, onChange, placeholder }) => {
  return (
    <div className="grupo-campo">
        <label htmlFor={id}>{"label-text"}</label>

    <InputIndex
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
    </div>
  )
}

export default InputMoIndex 
import React from "react"
import InputIndex from "../atoms/InputIndex"

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
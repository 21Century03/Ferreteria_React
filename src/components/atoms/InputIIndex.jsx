import React from "react"
const InputIndexNombre = ({ id, type, value, onChange, placeholder }) => {
  return (
    <input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  )
}

export default InputIndexNombre

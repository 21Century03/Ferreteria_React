import React from 'react'
const ButtonIndexForm = ({ onClick, children }) => {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  )
}

export default ButtonIndexForm
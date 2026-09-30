
const ButtonIndexForm = ({ onClick, children, EstaCorrecto }) => {
  return (
    <button
     onClick={onClick}
     className={EstaCorrecto ? 'correcto' : 'incorrecto'}
    
    >
      {children}
    </button>
  )
}

export default ButtonIndexForm
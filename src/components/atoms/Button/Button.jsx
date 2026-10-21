import './Button.css';

function ButtonIndexForm(prop) {
  let clase = prop.className;

  
  if (!clase) {
    clase = prop.estaCorrecto === false ? "incorrecto" : "correcto";
  }

  return (
    <button
      type={prop.type || 'button'}
      onClick={prop.onClick}
      className={clase}
      aria-label={prop.ariaLabel}
      aria-expanded={prop.ariaExpanded}
    >
      {prop.children}
    </button>
  );
}

export default ButtonIndexForm;
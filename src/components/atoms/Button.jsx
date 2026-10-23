function ButtonIndexForm(prop) {
  let variante = prop.className;

  
  if (!variante) {
    variante = prop.EsCorrecto === false ? "btn-outline-marca px-4 py-2" : "btn-marca px-4 py-2";
  }

  return (
    <button
      type={prop.type || 'button'}
      onClick={prop.onClick}
      className={"btn fw-bold " + variante}
      aria-label={prop.ariaLabel}
      aria-expanded={prop.ariaExpanded}
    >
      {prop.children}
    </button>
  );
}

export default ButtonIndexForm;
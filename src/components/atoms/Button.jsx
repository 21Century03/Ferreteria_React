function ButtonIndexForm(prop) {
  return (
    <button
      onClick={prop.onClick}
      className={prop.estaCorrecto ? 'correcto' : 'incorrecto'}
    >
      {prop.children}
    </button>
  );
}

export default ButtonIndexForm;
function InsigniaContador(props) {
  if (!props.cantidad || props.cantidad <= 0) {
    return null;
  }

  return (
    <span className="badge bg-primary rounded-pill ms-1">
      {props.cantidad}
    </span>
  );
}

export default InsigniaContador;
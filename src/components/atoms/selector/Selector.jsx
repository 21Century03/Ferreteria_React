function Selector(prop) {
  return (
    <select
      id={prop.id}
      name={prop.name}
      value={prop.value}
      onChange={prop.onChange}
      className={prop.className}
    >
      {prop.children}
    </select>
  );
}

export default Selector;
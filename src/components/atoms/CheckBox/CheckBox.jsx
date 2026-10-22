export function CheckBox(props) {
  return (
    <section className="form-check ms-2 mb-1">
      <input
            className="form-check-input"
            type="checkbox"
            id={props.id}
            checked={props.checked}
            onChange={props.onChange}
      />
      <label className="form-check-label small" htmlFor={props.id}>
        {props.label}
      </label>
    </section>
  );
}

export default CheckBox;
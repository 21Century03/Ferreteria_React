export function CheckBox(props) {
  return (
    <section >
      <input
            className="form-check-input"
            type="checkbox"
            id={props.id}
            checked={props.checked}
            onChange={props.onChange}
      />
      <label  htmlFor={props.id}>
        {props.label}
      </label>
    </section>
  );
}

export default CheckBox;
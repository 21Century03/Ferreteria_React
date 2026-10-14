import './Button.css';

function ButtonIndexForm(prop) {
  return (
    <button
      type={prop.type || "button"}
      onClick={prop.onClick}
      className={prop.className}
      aria-label={prop.ariaLabel}
      aria-expanded={prop.ariaExpanded}
    >
      {prop.children}
    </button>
  );
}

export default ButtonIndexForm;
import "./form.css";

function FormInput({
  id,
  labelText,
  inputType,
  placeholder,
  value,
  onChange,
  isRequired = true,
  icon,
}) {
  return (
    <div className="label">
      <div className="label-icon">
        {icon}
        <label className="text-sm font-medium" htmlFor={id}>
          {labelText}{" "}
        </label>
      </div>
      {inputType === "textarea" ? (
        <textarea
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={isRequired}
          className="auth-input"
        />
      ) : (
        <input
          id={id}
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={isRequired}
          className="auth-input"
        />
      )}
    </div>
  );
}
export default FormInput;

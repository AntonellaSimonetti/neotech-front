import "./form.css";

function FormInput({
  id,
  labelText,
  inputType,
  placeholder,
  value,
  onChangeFn,
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
          onChange={onChangeFn}
          required={isRequired}
          className="input contact-textarea"
        />
      ) : (
        <input
          id={id}
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={onChangeFn}
          required={isRequired}
          className="input"
        />
      )}
    </div>
  );
}
export default FormInput;

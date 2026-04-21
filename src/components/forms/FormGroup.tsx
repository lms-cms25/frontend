type FormGroupProps = {
  label: string;
  id: string;
  type: string;
  placeholder: string;
  errorMessage: string;
  icon?: string;
};

const FormGroup = ({
  label,
  id,
  type,
  placeholder,
  errorMessage,
  icon,
  ...props
}: FormGroupProps) => {
  return (
    <div className="form-group">
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
      <div className={`input-container ${icon ? "has-icon" : ""}`}>
        {icon && <img src={icon} className="input-icon" alt="" />}
        <input {...props} id={id} className="form-input" />
      </div>
      <span className="field-validation-error">{errorMessage}</span>
    </div>
  );
};

export default FormGroup;

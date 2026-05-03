type FormGroupProps = {
  label: string;
  id: string;
  type: string;
  placeholder: string;
  errorMessage?: string;
  name?: string;
  defaultValue: string;
};

const FormGroup = ({
  label,
  id,
  type,
  placeholder,
  errorMessage,
  name,
  defaultValue
}: FormGroupProps) => {
  return (
    <div className="form-group">
      
      <label className="form-label" htmlFor={id}>
        {label}
      </label>

      <input
        type={type}
        id={id}
        className="form-input"
        placeholder={placeholder}
        name={name}
        defaultValue={defaultValue}
      />

      {errorMessage && (
        <span className="field-validation-error">
          {errorMessage}
        </span>
      )}

    </div>
  );
};

export default FormGroup;
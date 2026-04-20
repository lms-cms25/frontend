type FormGroupProps = {
  label: string;
  id: string;
  type: string;
  placeholder: string;
  errorMessage?: string;
};

const FormGroup = ({
  label,
  id,
  type,
  placeholder,
  errorMessage,
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
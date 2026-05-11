type FormGroupProps = {
  label: string;
  id: string;
  type: string;
  placeholder: string;
  errorMessage?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const FormGroup = ({
  label,
  id,
  type,
  placeholder,
  errorMessage,
  value,
  onChange,
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
        value={value}
        onChange={onChange}
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

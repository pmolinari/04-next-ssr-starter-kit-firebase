import {
  useState,
  type CSSProperties,
  type FC,
  type InputHTMLAttributes,
} from "react";

const baseStyles: CSSProperties = {
  display: "grid",
  gap: "4px",
};

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: boolean;
  message?: string;
};

const Input: FC<InputProps> = ({
  label,
  error,
  message,
  type = "text",
  value,
  onChange,
  ...rest
}) => {
  const [inputValue, setInputValue] = useState(value);
  return (
    <div style={baseStyles}>
      <label htmlFor={rest.name}>{label}</label>
      <input
        className="text-black"
        type={type}
        value={inputValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setInputValue(e.target.value);
          onChange?.(e);
        }}
        {...rest}
      />
      {message && <label>{message}</label>}
    </div>
  );
};

export default Input;

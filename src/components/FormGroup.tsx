import { useState, type FC, type InputHTMLAttributes } from "react";

export type InputFormGroupProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  // error?: boolean;
  message?: string;
};

const InputFormGroup: FC<InputFormGroupProps> = ({
  label,
  // error,
  message,
  type = "text",
  value,
  onChange,
  ...rest
}) => {
  const [inputValue, setInputValue] = useState(value);
  return (
    <div style={{}}>
      <label htmlFor={rest.name} className="block">
        {label}
      </label>
      <input
        className="w-full text-black bg-slate-300 border-none outline-none"
        type={type}
        value={inputValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setInputValue(e.target.value);
          onChange?.(e);
        }}
        {...rest}
      />
      {message && <label className="block">{message}</label>}
    </div>
  );
};

export default InputFormGroup;

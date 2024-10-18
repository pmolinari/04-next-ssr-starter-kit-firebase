import { type ButtonHTMLAttributes, type FC } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  ppp?: string;
}

export const Button: FC<ButtonProps> = ({
  children,
  className = "",
  ...props
}) => {
  const classes =
    `bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`.trim();
  return (
    <button className={`${classes}`} {...props}>
      {children}
    </button>
  );
};

export default Button;

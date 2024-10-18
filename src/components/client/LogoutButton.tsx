import type { FC } from "react";
import Button, { type ButtonProps } from "../Button";
import { isInputError } from "astro:actions";
import { actions } from "astro:actions";

const LogoutButton: FC<ButtonProps> = ({ onClick, children, ...rest }) => {
  const handleClick = async () => {
    const { error } = await actions.logoutAccount();
    if (error) {
      console.log(error);
      if (isInputError(error)) {
        console.log(error.fields);
      }
      return;
    }
    window.location.reload();
  };

  return (
    <Button onClick={handleClick} {...rest}>
      {children}
    </Button>
  );
};

export default LogoutButton;

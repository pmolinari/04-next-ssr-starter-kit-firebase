"use client";
import React, { FC } from "react";
import Button, { ButtonProps } from "../Button";
import { signIn } from "next-auth/react";

const SignInButton: FC<ButtonProps> = ({ children, ...rest }) => {
  const handleClick = async () => {
    const result = await signIn("google", {
      redirect: false,
      callbackUrl: "/dashboard",
    });
    console.log(result);
  };

  return (
    <Button onClick={handleClick} {...rest}>
      {children}
    </Button>
  );
};

export default SignInButton;

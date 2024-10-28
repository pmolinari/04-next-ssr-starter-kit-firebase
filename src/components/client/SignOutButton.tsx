"use client";
import React, { FC } from "react";
import Button, { ButtonProps } from "../Button";
import { signOut } from "next-auth/react";

const SignOutButton: FC<ButtonProps> = ({ children, ...rest }) => {
  const handleClick = async () => {
    signOut();
  };

  return (
    <Button onClick={handleClick} {...rest}>
      {children}
    </Button>
  );
};

export default SignOutButton;

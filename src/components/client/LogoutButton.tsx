"use client";
import type { FC } from "react";
import Button, { type ButtonProps } from "../Button";
import { signOut } from "firebase/auth";
import { auth } from "@/app/firebase/config";

const LogoutButton: FC<ButtonProps> = ({ children, ...rest }) => {
  const handleClick = async () => {
    signOut(auth);
    sessionStorage.removeItem("userSession");
  };

  return (
    <Button onClick={handleClick} {...rest}>
      {children}
    </Button>
  );
};

export default LogoutButton;

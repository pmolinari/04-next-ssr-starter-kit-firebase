"use client";
import React, { useState } from "react";
import { v4 as uuidV4 } from "uuid";
import Button from "../Button";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";

function generateCompactUuid() {
  const uuid = uuidV4(); // Generar el UUID v4
  const compactUuid = uuid.replace(/-/g, ""); // Quitar los guiones con replace
  return compactUuid.slice(-11); // Tomar los últimos 11 caracteres
}

const FormCredential = () => {
  const router = useRouter();
  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);
  const [submiting, setSubmiting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmiting(true);

    try {
      const credential = generateCompactUuid();
      await createUserWithEmailAndPassword(
        `${credential}@viewer.com.ar`,
        credential
      );
      sessionStorage.setItem("userSession", "true");
      router.push("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="grid gap-4 grid-cols-1 md:grid-cols-2 w-full"
    >
      <Button
        type="submit"
        className="col-span-1 md:col-span-2"
        disabled={submiting}
      >
        Guardar
      </Button>
    </form>
  );
};

export default FormCredential;

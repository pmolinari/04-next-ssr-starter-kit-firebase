import React, { useState } from "react";
import { v4 as uuidV4 } from "uuid";
import { actions, isInputError } from "astro:actions";
import Button from "../Button";

function generateCompactUuid() {
  const uuid = uuidV4(); // Generar el UUID v4
  const compactUuid = uuid.replace(/-/g, ""); // Quitar los guiones con replace
  return compactUuid.slice(-11); // Tomar los últimos 11 caracteres
}

const FormCredential = () => {
  const [submiting, setSubmiting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmiting(true);
    const credential = generateCompactUuid();
    const formData = new FormData();
    formData.append("email", `${credential}@viewer.com.ar`);
    formData.append("password", credential);
    const { error } = await actions.createAccount(formData);
    await actions.logoutAccount();
    setSubmiting(false);
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

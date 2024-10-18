"use client";
import React, { useState } from "react";
import InputFormGroup from "../FormGroup";
import Button from "../Button";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";

const initialFormValues = {
  email: "test1@test.com",
  password: "123456",
  submiting: false,
};

const FormUserLogin = () => {
  const router = useRouter();
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const [formValues, setFormValues] = useState(initialFormValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setFormValues((prev) => ({
      ...prev,
      submiting: true,
    }));
    e.preventDefault();
    const { email, password } = formValues;
    try {
      await signInWithEmailAndPassword(email, password);
      sessionStorage.setItem("userSession", "true");
      setFormValues(initialFormValues);
      router.push("/");
    } catch (err) {
      console.error(err);
    }

    // const formData = new FormData(e.target as HTMLFormElement);
    // const { error } = await actions.loginAccount(formData);
    // setFormValues((prev) => ({
    //   ...prev,
    //   submiting: true,
    // }));
    // if (error) {
    //   console.log(error);
    //   if (isInputError(error)) {
    //     console.log(error.fields);
    //   }
    //   return;
    // }
    // window.location.reload();
  };

  return (
    <form
      onSubmit={onSubmit}
      className="grid gap-4 grid-cols-1 md:grid-cols-2 w-full"
    >
      <InputFormGroup
        label="email"
        name="email"
        type="email"
        onChange={handleChange}
        value={formValues.email}
        message="Mi mensaje de error..."
      />
      <InputFormGroup
        label="password"
        type="password"
        name="password"
        onChange={handleChange}
        value={formValues.password}
      />
      <Button
        type="submit"
        className="col-span-1 md:col-span-2"
        disabled={formValues.submiting}
      >
        Login
      </Button>
    </form>
  );
};

export default FormUserLogin;

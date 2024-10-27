import FormUserLogin from "@/components/client/FormUserLogin";
import React from "react";

const SignInPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "70vw",
        height: "60vh",
        margin: "auto",
        maxWidth: "500px",
      }}
    >
      <h1>SignInPage</h1>
      <FormUserLogin />
    </div>
  );
};

export default SignInPage;

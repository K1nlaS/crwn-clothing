//Utils
import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

//Components
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

//Styled Components
import { SignUpContainer } from "./sign-up-form.styles";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: ""
};

const SignUpForm = () => {

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSumbit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (e) {
      if (e.code === "auth/email-already-in-use") {
        alert("Email already in use");
      } else {
        console.log("user creating encountered an error", e.message);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };


  return (
    <SignUpContainer>
      <h2>I do not have an account</h2>
      <span>Sign up with your email and password</span>

      <form onSubmit={handleSumbit}>

        <FormInput label="Display Name" type="text" name="displayName" onChange={handleChange} value={displayName} required />

        <FormInput label="Email" type="email" name="email" onChange={handleChange} value={email} required />

        <FormInput label="Password" type="password" name="password" onChange={handleChange} value={password} required />

        <FormInput label="Confirm Password" type="password" name="confirmPassword" onChange={handleChange} value={confirmPassword} required />

        <Button children={"Sign Up"} type="submit" />

      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;
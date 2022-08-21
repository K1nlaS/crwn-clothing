//Utils
import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

import "./sign-up-form.styles.scss";

//Components
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

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
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>

      <form onSubmit={handleSumbit}>

        <FormInput label="Display Name" type="text" name="displayName" id="displayName" onChange={handleChange} value={displayName} required />

        <FormInput label="Email" type="email" name="email" id="email" onChange={handleChange} value={email} required />

        <FormInput label="Password" type="password" name="password" id="password" onChange={handleChange} value={password} required />

        <FormInput label="Confirm Password" type="password" name="confirmPassword" id="confirmPassword" onChange={handleChange} value={confirmPassword} required />

        <Button children={"Sign Up"} type="submit" />

      </form>
    </div>
  );
};

export default SignUpForm;
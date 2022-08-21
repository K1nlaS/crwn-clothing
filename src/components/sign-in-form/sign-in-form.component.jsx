//Utils
import { useState } from "react";
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword
} from "../../utils/firebase/firebase.utils";


import "./sign-in-form.styles.scss";

//Components
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSumbit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);

      resetFormFields();
    } catch (e) {
      switch (e.code) {
        case "auth/user-not-found": alert("user not found"); break;
        case "auth/wrong-password": alert("password is incorrect"); break;
        default: console.log(e.message);
      }
    }
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };


  return (
    <div className="sign-up-container">
      <h2>Already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSumbit}>

        <FormInput label="Email" type="email" name="email" onChange={handleChange} value={email} required />

        <FormInput label="Password" type="password" name="password" onChange={handleChange} value={password} required />

        <div className="buttons-container">
          <Button children={"Sign In"} type="submit" />
          <Button children={"Google Sign In"} type="button" buttonType="google" onClick={signInWithGoogle} />
        </div>

      </form>
    </div>
  );
};

export default SignInForm;
//Misc
import { useState } from "react";
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword
} from "../../utils/firebase/firebase.utils";

//Components
import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

//Styled Components
import {
  SignUpContainer,
  ButtonsContainer
} from "./sign-in-form.styles";

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
    <SignUpContainer>
      <h2>Already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSumbit}>

        <FormInput label="Email" type="email" name="email" onChange={handleChange} value={email} required />

        <FormInput label="Password" type="password" name="password" onChange={handleChange} value={password} required />

        <ButtonsContainer>
          <Button children={"Sign In"} type="submit" />
          <Button children={"Google Sign In"} type="button" buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle} />
        </ButtonsContainer>

      </form>
    </SignUpContainer>
  );
};

export default SignInForm;
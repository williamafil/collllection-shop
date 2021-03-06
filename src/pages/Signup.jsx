import React, { useState } from "react";
import { auth, createUserProfileDoc } from "../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useHistory } from "react-router-dom";

import FormButton from "../components/Form/FormButton";
import { FormLabel, FormInput } from "../components/Form/FormLabelAndInput";
import LoginSignupWrapper from "../components/UI/LoginSignupWrapper";

const Signup = () => {
  const history = useHistory();

  const [isSubmit, setIsSubmit] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMsgs, setErrorMsgs] = useState([]);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setErrorMsgs([]);
    let isError = false;
    setIsSubmit(true);

    if (password !== confirmPassword) {
      setErrorMsgs((prev) => [...prev, "Please confirm your password."]);
      isError = true;
    }
    if (email.trim() === "") {
      setErrorMsgs((prev) => [...prev, "Email can't be blank."]);
      isError = true;
    }
    if (password.trim() === "") {
      setErrorMsgs((prev) => [...prev, "Password can't be blank."]);
      isError = true;
    }
    if (isError) {
      setIsSubmit(false);
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        return user;
      })
      .then((authUser) => {
        // store user in db with detailed profile
        createUserProfileDoc(authUser, {
          firstName,
          lastName,
          displayName: `${firstName} ${lastName}`,
        }).then((res) => {
          setIsSubmit(false);
          setFirstName("");
          setLastName("");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
          return history.push("/");
        });
      })
      .catch((error) => {
        const { code, message } = error;

        switch (code) {
          case "auth/email-already-in-use":
            setErrorMsgs((prev) => [...prev, "Email already in use."]);
            break;
          case "auth/weak-password":
            setErrorMsgs((prev) => [
              ...prev,
              "Password should be at least 6 characters.",
            ]);
            break;
          default:
            setErrorMsg(message);
        }

        setIsSubmit(false);
      });
  };

  const onInputHandler = (event) => {
    const { name, value } = event.target;
    if (name === "first-name") setFirstName(value);
    if (name === "last-name") setLastName(value);
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
    if (name === "confirm-password") setConfirmPassword(value);
  };

  return (
    <section className="Signup py-16">
      <LoginSignupWrapper sectionTitle="Create Account">
        {errorMsgs.length !== 0 && (
          <ul className="p-2.5 bg-lightOrange-800">
            {errorMsgs.map((error) => (
              <li>{error}</li>
            ))}
          </ul>
        )}
        <form onSubmit={onSubmitHandler}>
          <fieldset className="mt-5 lg:mt-0">
            <FormLabel label="First Name" htmlFor="first-name" />
            <FormInput
              inputHandler={onInputHandler}
              id="first-name"
              type="text"
              value={firstName}
              placeholder="First Name"
            />
          </fieldset>
          <fieldset className="mt-5">
            <FormLabel label="Last Name" htmlFor="last-name" />
            <FormInput
              inputHandler={onInputHandler}
              id="last-name"
              type="text"
              value={lastName}
              placeholder="Last Name"
            />
          </fieldset>
          <fieldset className="mt-5 lg:mt-0">
            <FormLabel label="Email" htmlFor="email" />
            <FormInput
              inputHandler={onInputHandler}
              id="email"
              type="email"
              value={email}
              placeholder="Email"
            />
          </fieldset>
          <fieldset className="mt-5">
            <FormLabel label="Password" htmlFor="password" />
            <FormInput
              inputHandler={onInputHandler}
              id="password"
              type="password"
              value={password}
              placeholder="Password"
            />
          </fieldset>
          <fieldset className="mt-5">
            <FormLabel label="Confirm Password" htmlFor="confirm-password" />
            <FormInput
              inputHandler={onInputHandler}
              id="confirm-password"
              type="password"
              value={confirmPassword}
              placeholder="Confirm Password"
            />
          </fieldset>
          <fieldset className="mt-5">
            <FormButton disabled={isSubmit}>Create</FormButton>
          </fieldset>
        </form>
      </LoginSignupWrapper>
    </section>
  );
};

export default Signup;

import React, { useState } from "react";
import { auth, createUserProfileDoc } from "../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useHistory } from "react-router-dom";

import FormButton from "../components/Form/FormButton";
import { FormLabel, FormInput } from "../components/Form/FormLabelAndInput";
import LoginSignupWrapper from "../components/UI/LoginSignupWrapper";

const Signup = () => {
  const history = useHistory();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) return;

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
          setFirstName("");
          setLastName("");
          setEmail("");
          setPassword("");
          setConfirmPassword("");

          return history.push("/");
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(
          "🐙 SIGNUP ERROR",
          `Code: ${errorCode}, `,
          `Message: ${errorMessage}`,
        );
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
    <section className="Signup py-28">
      <LoginSignupWrapper sectionTitle="Create Account">
        <form onSubmit={onSubmitHandler}>
          <fieldset className="mt-5 lg:mt-0">
            <FormLabel label="First Name" htmlFor="first-name" />
            <FormInput
              inputHandler={onInputHandler}
              id="first-name"
              type="text"
              value={firstName}
              placeholder="First Name"
              required
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
              required
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
              required
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
              required
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
              required
            />
          </fieldset>
          <fieldset className="mt-5">
            <FormButton value="Create" />
          </fieldset>
        </form>
      </LoginSignupWrapper>
    </section>
  );
};

export default Signup;

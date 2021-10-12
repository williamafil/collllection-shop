import React from "react";
import FormButton from "../components/Form/FormButton";
import { FormLabel, FormInput } from "../components/Form/FormLabelAndInput";
import LoginSignupWrapper from "../components/UI/LoginSignupWrapper";

const Signup = () => {
  return (
    <section className="Signup py-28">
      <LoginSignupWrapper sectionTitle="Create Account">
        <form>
          <fieldset className="mt-5 lg:mt-0">
            <FormLabel label="First Name" />
            <FormInput id="first-name" type="text" placeholder="First Name" />
          </fieldset>
          <fieldset className="mt-5">
            <FormLabel label="Last Name" />
            <FormInput id="last-name" type="text" placeholder="Last Name" />
          </fieldset>
          <fieldset className="mt-5 lg:mt-0">
            <FormLabel label="Email" />
            <FormInput id="email" type="email" placeholder="Email" />
          </fieldset>
          <fieldset className="mt-5">
            <FormLabel label="Password" />
            <FormInput id="password" type="password" placeholder="Password" />
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

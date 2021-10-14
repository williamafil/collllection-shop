import React from "react";
import { Link } from "react-router-dom";

import { FormLabel, FormInput } from "../Form/FormLabelAndInput";
import FormButton from "../Form/FormButton";

const ResetPasswordForm = ({ onCancelHandler }) => {
  return (
    <div>
      <h3 className="text-xl">Reset your password</h3>
      <p className="text-sm pt-2.5 pb-5">
        We will send you an email to reset your password.
      </p>
      <form>
        <fieldset className="mt-5 lg:mt-0">
          <FormLabel label="Email" />
          <FormInput id="email" type="email" placeholder="Email" />
        </fieldset>

        <fieldset className="mt-5">
          <FormButton>Submit</FormButton>
        </fieldset>
        <div className="mt-2.5 flex space-x-5 text-sm tracking-wide">
          <button
            type="button"
            className="hover:text-lightOrange-800"
            onClick={onCancelHandler}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ResetPasswordForm;

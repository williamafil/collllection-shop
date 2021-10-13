import React from "react";

export const FormLabel = ({ label, htmlFor }) => {
  return (
    <label htmlFor={htmlFor} className="tracking-wider">
      {label}
    </label>
  );
};

export const FormInput = (props) => {
  const { inputHandler, id, type, value, placeholder, required } = props;

  return (
    <input
      onInput={inputHandler}
      id={id}
      name={id}
      type={type}
      className="w-full mt-2.5 py-2.5 px-5 tracking-widest border border-black bg-transparent"
      value={value}
      placeholder={placeholder}
      required={required}
    />
  );
};

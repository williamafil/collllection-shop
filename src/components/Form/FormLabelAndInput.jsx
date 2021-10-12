import React from "react";

export const FormLabel = ({ label }) => {
  return <label className="tracking-wider">{label}</label>;
};

export const FormInput = (props) => {
  const { id, type, placeholder, required } = props;

  return (
    <input
      id={id}
      type={type}
      className="w-full mt-2.5 py-2.5 px-5 tracking-widest border border-black bg-transparent"
      placeholder={placeholder}
      required={required}
    />
  );
};

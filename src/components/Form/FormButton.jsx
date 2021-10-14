import React from "react";

const FormButton = (props) => {
  const { children, onClickHandler, isGoogle } = props;

  return (
    <button
      onClick={onClickHandler}
      className={`w-full h-11 mt-2.5 py-2.5 px-5 text-center text-sm ${
        isGoogle
          ? "border border-black text-black hover:bg-googleBlue hover:border-googleBlue hover:text-white"
          : "bg-black text-white hover:bg-dark"
      }`}
    >
      {children}
    </button>
  );
};

export default FormButton;

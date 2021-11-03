import React from "react";
import clxs from "../../utils/clxs";
import { ReactComponent as LoadingIcon } from "../../images/loading.svg";

const FormButton = (props) => {
  const { children, onClickHandler, isGoogle, disabled } = props;

  return (
    <button
      onClick={onClickHandler}
      className={clxs(
        "w-full h-11 mt-2.5 py-2.5 px-5 text-center text-sm",
        disabled && "cursor-not-allowed",
        isGoogle
          ? "border border-black text-black hover:bg-googleBlue hover:border-googleBlue hover:text-white"
          : "bg-black text-white hover:bg-dark",
      )}
      disabled={disabled}
    >
      <span className="h-full flex justify-center items-center">
        {disabled ? <LoadingIcon /> : children}
        {/* {disabled && <LoadingIcon />} */}
      </span>
    </button>
  );
};

export default FormButton;

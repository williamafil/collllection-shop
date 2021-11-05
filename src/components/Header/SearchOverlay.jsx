import React, { useRef, useEffect } from "react";
import { ReactComponent as SearchIcon } from "../../images/magnifying-glass.svg";

const SearchOverlay = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex justify-center h-14 space-x-2"
    >
      <input
        type="text"
        ref={inputRef}
        className=" w-1/2 py-2 border-b border-lightOrange-800 bg-transparent focus:outline-none text-2xl tracking-wide placeholder-lightOrange-800"
        placeholder="Search"
      />
      <button>
        <SearchIcon className="py-1 px-1 w-12 h-full" />
      </button>
    </form>
  );
};

export default SearchOverlay;

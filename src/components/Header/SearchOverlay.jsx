import { useState } from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import { useHistory, useLocation } from "react-router";

import SearchForm from "../Form/SearchForm";

const SearchOverlay = () => {
  const history = useHistory();

  const dispatch = useDispatch();

  const [searchKeyword, setSearchKeyword] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (searchKeyword.trim() === "") return;

    history.push(`/search?q=${searchKeyword}`);
    dispatch(uiActions.closeOverlay());
  };

  const onInputHandler = (event) => {
    setSearchKeyword(event.target.value);
  };

  return (
    <>
      <SearchForm
        searchKeyword={searchKeyword}
        onSubmit={onSubmitHandler}
        onInput={onInputHandler}
        className="sm:w-1/2 text-2xl border-lightOrange-800 placeholder-lightOrange-800"
        btnClassName="w-8 sm:w-12"
      />
    </>
  );
};

export default SearchOverlay;

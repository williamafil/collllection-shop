import { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import { useHistory, useLocation } from "react-router";
import algolia from "../../utils/algolia";
import { ReactComponent as SearchIcon } from "../../images/magnifying-glass.svg";
import { ReactComponent as LoadingIcon } from "../../images/loading.svg";
import SearchForm from "../Form/SearchForm";

import { pathToSearch } from "../../router";

const SearchOverlay = () => {
  // const inputRef = useRef(null);
  const history = useHistory();
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  // const [isLoading, setIsLoading] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");
  // const [searchResults, setSearchResults] = useState([]);

  // useEffect(() => {
  //   inputRef.current.focus();
  // }, []);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (searchKeyword.trim() === "") return;
    // if (pathname !== pathToSearch) history.push(`/search?q=${searchKeyword}`);
    history.push(`/search?q=${searchKeyword}`);
    dispatch(uiActions.closeOverlay());
    // setIsLoading(true);
    // algolia.search(searchKeyword).then((result) => {
    //   const resultsArray = result.hits.map((hit) => {
    //     return {
    //       categoryId: hit.categoryId,
    //       title: hit.title,
    //       description: hit.description,
    //       images: hit.images,
    //       slug: hit.slug,
    //       price: hit.price,
    //       id: hit.objectID,
    //     };
    //   });
    //   console.log("search result: ", resultsArray);
    //   setSearchResults(resultsArray);
    //   setIsLoading(false);
    // });
  };

  const onInputHandler = (event) => {
    setSearchKeyword(event.target.value);
  };

  return (
    <>
      {/* <div className="flex justify-center w-full">
        {isLoading && <LoadingIcon className="absolute top-1/2" />}
      </div> */}
      <SearchForm
        searchKeyword={searchKeyword}
        onSubmit={onSubmitHandler}
        onInput={onInputHandler}
        className="sm:w-1/2 border-lightOrange-800 placeholder-lightOrange-800"
        btnClassName="w-8 sm:w-12"
      />
      {/* <form
        onSubmit={onSubmitHandler}
        className="sm:mt-40 flex justify-center items-center h-full space-x-2"
      >
        <input
          type="text"
          ref={inputRef}
          onInput={onInputHandler}
          value={searchKeyword}
          className="w-full sm:w-1/2 sm:py-2 border-b border-lightOrange-800 bg-transparent focus:outline-none text-2xl tracking-wide placeholder-lightOrange-800"
          placeholder="Search"
        />
        <button>
          <SearchIcon className="py-1 px-1 w-8 sm:w-12 h-full" />
        </button>
      </form> */}
    </>
  );
};

export default SearchOverlay;

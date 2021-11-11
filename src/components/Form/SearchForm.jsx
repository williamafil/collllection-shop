import { useRef, useEffect } from "react";
import { ReactComponent as SearchIcon } from "../../images/magnifying-glass.svg";
import clxs from "../../utils/clxs";

const SearchForm = ({
  onSubmit,
  onInput,
  searchKeyword,
  q,
  className,
  btnClassName,
}) => {
  const inputRef = useRef(null);
  // const [searchKeyword, setSearchKeyword] = useState("");
  // const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <form
        onSubmit={onSubmit}
        className=" flex justify-center items-center h-full space-x-2"
      >
        <input
          type="text"
          ref={inputRef}
          onInput={onInput}
          value={searchKeyword}
          className={clxs(
            "w-full sm:py-2 border-b bg-transparent focus:outline-none text-2xl tracking-wide ",
            className,
          )}
          placeholder="Search"
        />
        <button>
          <SearchIcon className={clxs("py-1 px-1 h-full", btnClassName)} />
        </button>
      </form>
    </div>
  );
};

export default SearchForm;

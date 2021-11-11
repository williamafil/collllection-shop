import { useState, useEffect } from "react";
import { useLocation, useHistory, Link } from "react-router-dom";
import SearchForm from "../components/Form/SearchForm";
import algolia from "../utils/algolia";
import clxs from "../utils/clxs";

const Search = () => {
  const history = useHistory();
  const location = useLocation();
  const urlSearchParams = new URLSearchParams(location.search);
  const keyword = urlSearchParams.get("q");
  const [isLoading, setIsLoading] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState(keyword);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    algolia.search(keyword).then((result) => {
      const resultsArray = result.hits.map((hit) => {
        return {
          categoryId: hit.categoryId,
          title: hit.title,
          description: hit.description,
          images: hit.images,
          slug: hit.slug,
          price: hit.price,
          id: hit.objectID,
        };
      });
      console.log("search result: ", resultsArray);
      setSearchResults(resultsArray);
      setIsLoading(false);
    });
  }, [keyword]);

  const onInputHandler = (event) => {
    setSearchKeyword(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log("search submit button ");
    if (searchKeyword.trim() === "") return;
    history.push(`/search?q=${searchKeyword}`);
  };

  return (
    <div className="px-5 pb-10 container mx-auto">
      <main className="min-h-screen/2 flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-8">
        <aside className="w-full lg:w-5/12">
          <p className="text-4xl tracking-wider leading-normal">
            {!isLoading && searchResults.length === 0 && (
              <>Your search for "{keyword}" did not yield any results.</>
            )}
            {!isLoading && searchResults.length > 0 && (
              <>
                {searchResults.length} results for "{keyword}"
              </>
            )}
          </p>
          <div className="mt-4 lg:mt-10 lg:pr-4">
            <SearchForm
              onSubmit={onSubmitHandler}
              onInput={onInputHandler}
              searchKeyword={searchKeyword}
              className="border-black w-full placeholder-black"
              btnClassName="w-12 lg:w-9"
            />
          </div>
        </aside>
        <section className="lg:w-full">
          <div
            className={clxs(
              "h-full w-full",
              "sm:masonry-col-2 md:masonry-col-3 lg:masonry-col-4",
              "before:box-inherit after:box-inherit",
            )}
          >
            {searchResults.map((product) => (
              <div key={product.id} className="pb-2 break-inside">
                <Link to={`/products/${product.slug}`} className="">
                  <div className="relative mb-1 pb-16">
                    <img
                      className=""
                      src={product.images[0]}
                      alt={product.title}
                    />
                    <div className="absolute left-0">
                      <h3 className="py-2 font-bold leading-4 tracking-wide text-gray-700">
                        {product.title}
                      </h3>
                      <h3 className="py-1 leading-3">${product.price}</h3>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Search;

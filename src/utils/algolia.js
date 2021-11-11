import algoliasearch from "algoliasearch";

const client = algoliasearch(
  import.meta.env.VITE_ALGOLIA_APP_ID,
  import.meta.env.VITE_ALGOLIA_SEARCH_API_KEY,
);

const algolia = client.initIndex("collllect-shop");

export default algolia;

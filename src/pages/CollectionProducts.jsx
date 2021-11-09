import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { db } from "../firebase/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import clxs from "../utils/clxs";
import CollectionLoadingSkeleton from "../components/Collection/CollectionLoadingSkeleton";

const tl = gsap.timeline();

const CollectionProducts = (props) => {
  const pathName = props.match.params.pathName;
  const categories = useSelector((state) => state.category.categories);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const imageRefs = useRef([]);
  const [category, setCategory] = useState({});
  console.log("pathName", pathName);

  useEffect(async () => {
    setIsLoading(true);
    const productsRef = collection(db, "products");
    const q = query(productsRef, where("categoryId", "==", pathName));
    const querySnapshot = await getDocs(q);
    const productsData = querySnapshot.docs.map((product) => {
      return {
        id: product.id,
        ...product.data(),
      };
    });
    setProducts(productsData);
    setIsLoading(false);

    const currentCategory = categories.find(
      (category) => category.id === pathName,
    );
    setCategory(currentCategory);
  }, [pathName]);

  useEffect(() => {
    if (!isLoading) {
      tl.from(imageRefs.current, 0.5, {
        autoAlpha: 0,
        y: 50,
        delay: 0.3,
        stagger: 0.5,
      });
    }
  }, [isLoading]);

  const productsList = () => {
    return (
      <div className="min-h-screen sm:min-h-screen/2 w-full">
        <div
          className={clxs(
            "h-full w-full",
            "sm:masonry-col-2 md:masonry-col-3 lg:masonry-col-4",
            "before:box-inherit after:box-inherit",
          )}
        >
          {products.map((product, index) => (
            <div
              ref={(element) => (imageRefs.current[index] = element)}
              key={product.id}
              className="pb-2 break-inside"
            >
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
      </div>
    );
  };

  return (
    <div className="container mx-auto px-5 pb-20 lg:py-10">
      <div
        className={clxs(
          "mb-10 lg:mb-16",
          "flex flex-col",
          "md:flex-row md:items-center md:justify-between",
        )}
      >
        <div className="lg:w-1/2">
          <h1 className="text-3xl tracking-wide capitalize">
            {category?.title || pathName}
          </h1>
          <p className="my-2 tracking-wider">{category?.description}</p>
        </div>
        <div className="lg:w-1/2 self-start lg:text-right">
          <span className="hidden lg:inline-block pr-3">Sort by</span>
          <select className="w-40 py-3 px-2 bg-transparent border border-black">
            <option value="">Featured</option>
          </select>
        </div>
      </div>
      {isLoading ? <CollectionLoadingSkeleton /> : <>{productsList()}</>}
    </div>
  );
};

export default CollectionProducts;

import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { db } from "../firebase/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const tl = gsap.timeline();

const CollectionProducts = (props) => {
  const pathName = props.match.params.pathName;
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const imageRefs = useRef([]);

  useEffect(async () => {
    setIsLoading(true);
    const productsRef = collection(db, "products");
    const q = query(productsRef, where("categoryId", "==", pathName));
    const querySnapshot = await getDocs(q);
    const productsData = querySnapshot.docs.map((product) => {
      // const coverImage = new Image();
      // coverImage.src = product.data().images[0];
      // const promise = new Promise((resolve, reject) => {
      //   console.log("data.image: ", product.data().images[0]);
      //   coverImage.onload = resolve();
      //   coverImage.onerror = reject();
      // });

      return {
        id: product.id,
        ...product.data(),
        // cover: coverImage,
      };
    });
    setProducts(productsData);
    setIsLoading(false);
  }, [pathName]);

  useEffect(() => {
    if (!isLoading) {
      tl.from(imageRefs.current, 1, {
        autoAlpha: 0,
        y: 50,
        delay: 0.7,
        stagger: 0.7,
      });
    }
  }, [isLoading]);

  const productsList = () => {
    return (
      <div className="min-h-1/2">
        <div className="max-w-7xl mx-auto sm:masonry-col-2 md:masonry-col-3 lg:masonry-col-4 before:box-inherit after:box-inherit">
          {products.map((product, index) => (
            <div
              ref={(element) => (imageRefs.current[index] = element)}
              key={product.id}
              className="mb-8 break-inside"
            >
              <Link to={`/products/${product.slug}`}>
                <img className="" src={product.images[0]} alt={product.title} />
                <div className="">
                  <h3 className="font-bold leading-loose tracking-wide text-gray-700">
                    {product.title}
                  </h3>
                  <h3 className="leading-3">${product.price}</h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-5 py-10">
      <h1>{pathName}</h1>
      {isLoading ? <>is loading</> : <>{productsList()}</>}
    </div>
  );
};

export default CollectionProducts;

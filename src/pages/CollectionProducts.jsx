import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../firebase/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const CollectionProducts = (props) => {
  const pathName = props.match.params.pathName;
  const [products, setProducts] = useState([]);

  useEffect(async () => {
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
  }, [pathName]);

  return (
    <div className="container mx-auto px-5 py-10">
      <h1>{pathName}</h1>

      <div className="min-h-1/2">
        <div className="max-w-7xl mx-auto sm:masonry-col-2 md:masonry-col-3 lg:masonry-col-4 before:box-inherit after:box-inherit">
          {products.map((product) => (
            <div key={product.id} className="mb-8 break-inside">
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
    </div>
  );
};

export default CollectionProducts;

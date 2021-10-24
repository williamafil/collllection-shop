import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const CollectionProducts = () => {
  const { pathName } = useParams();
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
  }, []);

  return (
    <div className="container mx-auto px-4">
      <h1>{pathName}</h1>

      <div class="min-h-screen">
        <div class="transition duration-700 ease-in max-w-7xl mx-auto sm:masonry-col-2 md:masonry-col-3 lg:masonry-col-4 before:box-inherit after:box-inherit">
          {products.map((product) => (
            <div class="mb-8 break-inside">
              <img className="" src={product.images[0]} alt={product.title} />
              <div className="">
                <h3 className="font-bold tracking-wide text-gray-700">
                  {product.title}
                </h3>
                <h3>${product.price}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollectionProducts;

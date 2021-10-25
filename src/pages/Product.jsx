import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

import { ReactComponent as MinusIcon } from "../images/minus.svg";
import { ReactComponent as PlusIcon } from "../images/plus.svg";
import ProductGallery from "../components/Product/ProductGallery";

const Product = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);

  // TODO: error handling
  useEffect(async () => {
    const productsRef = collection(db, "products");
    const q = query(productsRef, where("slug", "==", slug));
    const querySnapshot = await getDocs(q);
    const result = querySnapshot.docs.map((product) => {
      return {
        id: product.id,
        ...product.data(),
      };
    });
    if (result.length === 1) setProduct(result[0]);
  }, []);

  const onInputQuantityHandler = (event) => {
    if (parseInt(event.target.value) > 99) return;
    if (parseInt(event.target.value) < 1) return;
    if (!Number.isInteger(parseInt(event.target.value))) return;
    setQuantity(parseInt(event.target.value));
  };

  const decrementHandler = () => {
    setQuantity((prev) => {
      if (prev <= 1) return prev;
      return (prev -= 1);
    });
  };

  const incrementHandler = () => {
    setQuantity((prev) => {
      if (prev >= 99) return prev;
      return (prev += 1);
    });
  };

  return (
    <div className="bg-white ">
      <div className="product container mx-auto px-5 py-14 md:flex md:space-x-8">
        <header className="md:w-1/2">
          <ProductGallery images={product.images || []} />
        </header>

        <main className="md:w-1/2">
          <h2 className="text-5xl leading-snug">Paper Fir Tree</h2>
          <h3 className="text-2xl">$ 2.90</h3>

          <div className="mt-10 space-y-12">
            <div className="flex items-center space-x-4">
              <p className="text-lg ">Quantity</p>
              <div className="px-4 h-14 border border-black flex justify-between items-center">
                <MinusIcon
                  onClick={decrementHandler}
                  className="cursor-pointer"
                />
                <input
                  type="number"
                  step="1"
                  min="1"
                  max="99"
                  className="border-none w-full h-full text-center text-lg"
                  value={quantity}
                  onInput={onInputQuantityHandler}
                />
                <PlusIcon
                  onClick={incrementHandler}
                  className="cursor-pointer"
                />
              </div>
            </div>

            <div className="buttons flex flex-col space-y-6">
              <button className="h-14 w-full border border-black">
                Add to Cart
              </button>

              <button className="h-14 w-full bg-lightOrange-800">
                Buy it Now
              </button>
            </div>

            <article className="description space-y-2">
              <p>You & Me card</p>
              <p>Left blank inside for your personal message.</p>
              <p>
                A6 printed on 350gsm card Designed by Dowse and printed in
                Brighton UK.
              </p>
              <p>
                If you're sending a gift and would like a personal message
                written in the card and free gift wrapping please let us know in
                your order comments box.
              </p>
            </article>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Product;

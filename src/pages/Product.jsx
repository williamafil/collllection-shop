import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";
import { useParams, useHistory } from "react-router-dom";
import { db } from "../firebase/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

import { ReactComponent as MinusIcon } from "../images/minus.svg";
import { ReactComponent as PlusIcon } from "../images/plus.svg";
import ProductGallery from "../components/Product/ProductGallery";
import { pathToCheckout } from "../router";

// TODO:
// 1. Add product to redux store
// 2. Keep cart items persistent

const Product = () => {
  const { slug } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
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

  const addProductToCartHandler = () => {
    dispatch(
      cartActions.addProduct({
        id: product.id,
        imageUrl: product.images[0],
        title: product.title,
        price: product.price,
        quantity,
      }),
    );
  };

  return (
    <div className="bg-white ">
      <div className="product container mx-auto px-5 py-14 md:flex md:space-x-8">
        <header className="md:w-1/2">
          <ProductGallery images={product.images || []} />
        </header>

        <main className="md:w-1/2">
          <h2 className="text-5xl leading-snug">{product.title}</h2>
          <h3 className="text-2xl">$ {product.price}</h3>

          <div className="mt-10 w-full xs:w-96 space-y-12">
            <div className="flex items-center space-x-4 ">
              <p className="text-lg ">Quantity</p>
              <div className="px-4 w-full h-14 border border-black flex justify-between items-center">
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
              <button
                onClick={addProductToCartHandler}
                className="h-14 w-full border border-black"
              >
                Add to Cart
              </button>

              <button
                onClick={() => history.push(pathToCheckout)}
                className="h-14 w-full bg-lightOrange-800"
              >
                Buy it Now
              </button>
            </div>

            <article className="description space-y-2">
              <p>{product.description}</p>
            </article>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Product;

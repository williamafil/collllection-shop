import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

import { ReactComponent as MinusIcon } from "../../images/minus.svg";
import { ReactComponent as PlusIcon } from "../../images/plus.svg";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const [itemQuantity, setItemQuantity] = useState(item.quantity);

  const decreaseItemQuantityHandler = (product) => {
    setItemQuantity((prevState) => (prevState -= 1));
    dispatch(
      cartActions.removeProduct({
        ...product,
        quantity: 1,
      }),
    );
  };

  const increaseItemQuantityHandler = (product) => {
    setItemQuantity((prevState) => (prevState += 1));
    dispatch(
      cartActions.addProduct({
        ...product,
        quantity: 1,
      }),
    );
  };

  const onChangeItemQuantity = (event, product) => {
    if (parseInt(event.target.value) > 99) return;
    if (parseInt(event.target.value) < 1) return;
    if (!Number.isInteger(parseInt(event.target.value))) return;

    const newQuantity = parseInt(event.target.value);
    const prevQuantity = itemQuantity;

    setItemQuantity(newQuantity);

    if (newQuantity > prevQuantity) {
      const quantityDiff = newQuantity - prevQuantity;
      dispatch(
        cartActions.addProduct({
          ...product,
          quantity: quantityDiff,
        }),
      );
    }

    if (newQuantity < prevQuantity) {
      const quantityDiff = prevQuantity - newQuantity;
      dispatch(
        cartActions.removeProduct({
          ...product,
          quantity: quantityDiff,
        }),
      );
    }
  };

  return (
    <article className="grid grid-cols-12 mt-10">
      <div className=" col-span-3 md:col-span-2 xl:col-span-1">
        <div className="pt-1.5 w-16 sm:w-20 lg:w-24">
          <img src={item.imageUrl} alt="product" />
        </div>
      </div>
      <div className=" col-span-9 md:col-span-10 xl:col-span-11 flex flex-col justify-between md:justify-start">
        <div className="flex justify-between items-stretch">
          <div className="px-2 flex flex-col md:w-full md:flex-row md:justify-between">
            <div>
              <h3 className="text-base leading-6">{item.title}</h3>
              <h3 className="text-sm leading-4">$ {item.price}</h3>
            </div>
            <div className="py-4 md:p-0 pr-4 flex w-full md:w-28">
              <button
                className="py-1 pr-4 text-base"
                onClick={() => decreaseItemQuantityHandler(item)}
              >
                <MinusIcon />
              </button>
              <input
                className="w-full bg-transparent text-center text-base focus:outline-none "
                type="number"
                step="1"
                min="1"
                max="99"
                value={itemQuantity}
                onChange={(event) => onChangeItemQuantity(event, item)}
              />
              <button
                className="py-1 pl-4 text-base"
                onClick={() => increaseItemQuantityHandler(item)}
              >
                <PlusIcon />
              </button>
            </div>
          </div>

          <div className="px-2 min-w-max md:w-2/6 text-base text-right">
            $ {item.totalPrice}
          </div>
        </div>
        <div className="pl-2 md:py-6">
          <p className="text-xs tracking-wide cursor-pointer">Remove Item</p>
        </div>
      </div>
    </article>
  );
};

export default CartItem;

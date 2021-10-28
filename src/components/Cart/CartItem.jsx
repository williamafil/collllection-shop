import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

import { ReactComponent as MinusIcon } from "../../images/minus.svg";
import { ReactComponent as PlusIcon } from "../../images/plus.svg";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const increaseItemQuantityHandler = (product) => {
    dispatch(
      cartActions.addProduct({
        ...product,
        quantity: 1,
      }),
    );
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
            <h3 className="text-base leading-6">{item.title}</h3>
            <div className="py-4 md:p-0 pr-4 flex w-full md:w-28">
              <button className="py-1 pr-4 text-base">
                <MinusIcon />
              </button>
              <input
                className="w-full bg-transparent text-center text-base"
                type="number"
                value={item.quantity}
              />
              <button className="py-1 pl-4 text-base">
                <PlusIcon onClick={() => increaseItemQuantityHandler(item)} />
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

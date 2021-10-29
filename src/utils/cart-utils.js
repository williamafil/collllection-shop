export const sumTotalQt = (cartTotalQuantity, itemQuantity, operator) => {
  if (operator === "add") {
    return cartTotalQuantity + itemQuantity;
  }

  if (operator === "remove") {
    return cartTotalQuantity - itemQuantity;
  }
};

export const sumSubTotal = (cartSubtotal, item, operator) => {
  if (operator === "add") {
    return (cartSubtotal + item.price * item.quantity).toFixed(2);
  }

  if (operator === "remove") {
    return (cartSubtotal - item.price * item.quantity).toFixed(2);
  }
};

export const addToCart = (cartItems, itemToAdd) => {
  const existingItem = cartItems.find((item) => item.id === itemToAdd.id);

  if (!existingItem) {
    return [
      ...cartItems,
      {
        ...itemToAdd,
        quantity: itemToAdd.quantity,
        totalPrice: +(itemToAdd.price * itemToAdd.quantity).toFixed(2),
      },
    ];
  }

  existingItem.quantity += itemToAdd.quantity;
  existingItem.totalPrice = +(
    existingItem.totalPrice +
    itemToAdd.price * itemToAdd.quantity
  ).toFixed(2);
  return [...cartItems];
};

export const removeFromCart = (cartItems, itemToRemove) => {
  const existingItem = cartItems.find((item) => item.id === itemToRemove.id);

  const isQtEqualOne = existingItem.quantity === 1;
  const isBothQtEqual = existingItem.quantity === itemToRemove.quantity;
  const isQtGreaterOne = existingItem.quantity > 1;

  if (isQtEqualOne || isBothQtEqual) {
    const newItems = cartItems.filter((item) => item.id !== itemToRemove.id);

    return [...newItems];
  } else if (isQtGreaterOne) {
    existingItem.quantity -= itemToRemove.quantity;
    existingItem.totalPrice = +(
      existingItem.totalPrice -
      existingItem.price * itemToRemove.quantity
    ).toFixed(2);

    return [...cartItems];
  }
  return [...cartItems];
};
